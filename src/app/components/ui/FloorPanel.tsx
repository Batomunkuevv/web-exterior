"use client";

import clsx from "clsx";
import { useEffect } from "react";

import Image from "next/image";
import { Button, FloorPlan } from "@components";

import { FloorPanelProps } from "@t";

export const FloorPanel = ({
    selectedFloor,
    setSelectedFloor,
    isOpenFloorPanel,
    setIsOpenFloorPanel,
    selectedApartament,
    setSelectedApartament,
    setTourUrl,
}: FloorPanelProps) => {
    const floorBase = selectedFloor ? `/floors/${selectedFloor.occluderName}/floor-base.png` : null;

    const handleButtonClick = () => {
        if (!selectedApartament) return;

        setTourUrl(selectedApartament.tourUrl);
    };

    const handleCloseClick = () => {
        setIsOpenFloorPanel(false);

        setTimeout(() => {
            setSelectedFloor(null);
        }, 300);
    };

    useEffect(() => {
        if (!selectedFloor) return;

        setSelectedApartament(selectedFloor.apartaments[0]);
    }, [selectedFloor]);

    return (
        <div
            className={clsx(
                "py-[calc(var(--index)*1.35)] px-[40px] z-[100] fixed top-[6.5vh] right-[40px] w-full max-w-[calc(var(--index)*13.2)] max-h-[calc(100%-56px)]",
                "tb:pt-[5vh] tb:pb-[3vh] tb:px-[24px] tb:w-[unset] tb:top-[16px] tb:right-[16px] tb:left-[16px] tb:max-w-[unset] tb:max-h-[calc(100%-32px)]",
                "bg-floor-panel border-2 border-yellow flex flex-col items-center text-center",
                "overflow-auto transition-all duration-300",
                {
                    "opacity-100 pointer-events-auto": isOpenFloorPanel,
                    "opacity-0 pointer-events-none": !isOpenFloorPanel,
                }
            )}
        >
            <button onClick={handleCloseClick} className="absolute top-[calc(var(--index)*0.7)] right-[calc(var(--index)*0.55)] w-[calc(var(--index)*0.55)] h-[calc(var(--index)*0.55)] text-black">
                <svg className="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <h2 className="mb-[calc(var(--index)*1.05)] text-[calc(var(--index)*1.05)] leading-[130%] tb:text-[calc(var(--index)*1.5)]">1152 Lafayette Ave</h2>
            <div className="mb-[calc(var(--index)*1.6)] sm:mb-[calc(var(--index)*1.05)]">
                {selectedFloor?.description && <p dangerouslySetInnerHTML={{ __html: selectedFloor.description }}></p>}
                {selectedApartament?.description && <p dangerouslySetInnerHTML={{ __html: selectedApartament.description }}></p>}
            </div>
            {floorBase && (
                <div className={clsx("mx-[-40px] mb-[32px] w-[calc(100%+80px)] max-h-[54vh] overflow-hidden relative", "tb:mx-[-24px] tb:w-[calc(100%+48px)]")}>
                    <div className="pt-[139.28%]"></div>
                    <Image className="object-contain" fill src={floorBase} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Apartament" />
                    {selectedFloor && (
                        <FloorPlan selectedFloor={selectedFloor} selectedApartament={selectedApartament} setSelectedApartament={setSelectedApartament} />
                    )}
                </div>
            )}
            <Button className="mt-auto" onClick={handleButtonClick}>
                Explore 3d
            </Button>
        </div>
    );
};
