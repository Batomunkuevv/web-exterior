"use client";

import "@/app/globals.css";
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";

import Script from "next/script";
import { ThreeScene, FloorPanel, IframePopup } from "@components";

import { ApartamentType, FloorType } from "@t";

const Home = () => {
    const [isLoading360, setIsLoading360] = useState(true);
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

    const handleOverlayClick = (e: MouseEvent | TouchEvent) => {
        if (isLoading360) return;

        e.stopPropagation();
        e.preventDefault();

        const icon = document.querySelector(".cloudimage-360-view-360-icon");

        if (icon) {
            icon.remove();
        }

        setShowOverlayButton(false);
    };

    const handle360Loaded = () => {
        setIsLoading360(false);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (viewerRef.current && window.CI360) {
            window.CI360.init();

            const viewer = document.querySelector(".cloudimage-360");

            if (viewer) {
                viewer.addEventListener("load", handle360Loaded);

                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                            const canvas = viewer.querySelector("canvas");

                            if (canvas) {
                                handle360Loaded();
                                observer.disconnect();
                            }
                        }
                    });
                });

                // Start observing
                observer.observe(viewer, {
                    childList: true,
                    subtree: true,
                });
            }
        }

        return () => {
            const viewer = document.querySelector(".cloudimage-360");
            if (viewer) {
                viewer.removeEventListener("load", handle360Loaded);
            }
        };
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
                    isLoading360={isLoading360}
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
