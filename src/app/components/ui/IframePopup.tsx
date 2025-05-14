"use client";

import clsx from "clsx";
import { useEffect } from "react";

import { IframePopupProps } from "@t";

export const IframePopup = ({ iframeUrl, onClose }: IframePopupProps) => {
    useEffect(() => {
        if (iframeUrl) {
            document.body.classList.add("disable-scroll");
        } else {
            document.body.classList.remove("disable-scroll");
        }

        return () => {
            document.body.classList.remove("disable-scroll");
        };
    }, [iframeUrl]);

    if (!iframeUrl) return null;

    return (
        <div
            className={clsx("py-[48px] fixed inset-0 z-[100] bg-overlay flex justify-center px-2 sm:px-6 overflow-auto", "transition-all duration-1000", {
                "opacity-100 pointer-events-auto": iframeUrl,
                "opacity-0 pointer-events-none": !iframeUrl,
            })}
            onClick={onClose}
        >
            <button className="absolute top-[24px] right-[16px] text-white z-[2]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="my-auto relative w-full max-w-[800px] bg-black rounded-xl shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={iframeUrl}
                    className="w-full h-[70vh] sm:h-[80vh] border-none rounded-xl"
                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen
                />
            </div>
        </div>
    );
};
