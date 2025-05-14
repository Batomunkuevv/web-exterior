"use client";

import "@/app/globals.css";
import { useState, useRef, useEffect, MouseEvent } from "react";

import Script from "next/script";
import { ThreeScene, FloorPanel, IframePopup } from "@components";

import { ApartamentType, FloorType } from "@t";

const Home = () => {
    const [showOverlayButton, setShowOverlayButton] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [isOpenFloorPanel, setIsOpenFloorPanel] = useState(false);
    const [selectedFloor, setSelectedFloor] = useState<FloorType | null>(null);
    const [selectedApartament, setSelectedApartament] = useState<ApartamentType | null>(null);
    const [tourUrl, setTourUrl] = useState<string | null>(null);

    const viewerRef = useRef<HTMLDivElement>(null);

    const handleCloseIframePopup = () => {
        setTourUrl(null);
    };

    const handleOverlayClick = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        const icon = document.querySelector(".cloudimage-360-view-360-icon");

        if (icon) {
            icon.remove();
        }

        setShowOverlayButton(false);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (viewerRef.current && window.CI360) {
            window.CI360.init();
        }
    }, [mounted]);

    useEffect(() => {
        if (selectedFloor) {
            setShowOverlayButton(false);
        }
    }, [selectedFloor]);

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
                {showOverlayButton && (
                    <button
                        type="button"
                        aria-label="Открыть 360°"
                        className="absolute z-30"
                        style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 100,
                            height: 100,
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            pointerEvents: "auto",
                        }}
                        onClick={handleOverlayClick}
                        onTouchEnd={handleOverlayClick}
                    />
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
