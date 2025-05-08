import { IframePopupProps } from "@t";
import clsx from "clsx";

export const IframePopup = ({ iframeUrl, onClose }: IframePopupProps) => {
    if (!iframeUrl) return null;

    return (
        <div
            className={clsx("fixed inset-0 z-[100] bg-overlay flex items-center justify-center px-2 sm:px-6", "transition-all duration-1000", {
                "opacity-100 pointer-events-auto": iframeUrl,
                "opacity-0 pointer-events-none": !iframeUrl,
            })}
            onClick={onClose}
        >
            <button className="absolute top-[24px] right-[16px] text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="relative w-full max-w-[800px] bg-black rounded-xl shadow-xl overflow-hidden max-h-[90dvh]" onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={iframeUrl}
                    className="w-full h-[70dvh] sm:h-[600px] border-none rounded-xl"
                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen
                />
            </div>
        </div>
    );
};
