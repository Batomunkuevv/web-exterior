"use client";

import "@/app/globals.css";
import { useState, useRef, useEffect } from "react";

import Script from "next/script";
import { ThreeScene, FloorPanel, IframePopup } from "@components";

import { ApartamentType, FloorType } from "@t";

const Home = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpenFloorPanel, setIsOpenFloorPanel] = useState(false);
    const [selectedFloor, setSelectedFloor] = useState<FloorType | null>(null);
    const [selectedApartament, setSelectedApartament] = useState<ApartamentType | null>(null);
    const [tourUrl, setTourUrl] = useState<string | null>(null);

    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (viewerRef.current && window.CI360) {
            window.CI360.init();
        }
    }, [mounted]);

    const handleCloseIframePopup = () => {
        setTourUrl(null);
    };

    return (
        <>
            <Script
                src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy"
                strategy="beforeInteractive"
            />
            <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[100vh] aspect-square">
                {mounted && (
                    <div
                        ref={viewerRef}
                        className="cloudimage-360"
                        id="product-360"
                        data-folder="/images/360/"
                        data-filename-x="360_{index}.webp"
                        data-amount-x="59"
                        data-index-zero-base="2"
                    ></div>
                )}
                <ThreeScene
                    selectedFloor={selectedFloor}
                    setSelectedApartament={setSelectedApartament}
                    setSelectedFloor={setSelectedFloor}
                    setIsOpenFloorPanel={setIsOpenFloorPanel}
                />
            </div>
            <FloorPanel
                isOpenFloorPanel={isOpenFloorPanel}
                setIsOpenFloorPanel={setIsOpenFloorPanel}
                selectedFloor={selectedFloor}
                setSelectedFloor={setSelectedFloor}
                selectedApartament={selectedApartament}
                setSelectedApartament={setSelectedApartament}
                setTourUrl={setTourUrl}
            />
            <IframePopup iframeUrl={tourUrl} onClose={handleCloseIframePopup} />
        </>
    );
};

export default Home;
