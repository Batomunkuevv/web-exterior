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
                "p-[40px] z-[100] absolute top-[6.5vh] bottom-[6.5vh] right-[40px] w-full max-w-[422px]",
                "tb:pt-[48px] tb:p-[24px] tb:w-[unset] tb:inset-[16px] tb:max-w-[unset]",
                "bg-floor-panel border-2 border-yellow flex flex-col items-center text-center",
                "overflow-auto transition-all duration-300",
                {
                    "opacity-100 pointer-events-auto": isOpenFloorPanel,
                    "opacity-0 pointer-events-none": !isOpenFloorPanel,
                }
            )}
        >
            <button onClick={handleCloseClick} className="absolute top-[24px] right-[16px] text-black">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <h2 className="mb-[32px] text-[32px] leading-[130%] xs:text-[24px]">1152 Lafayette Ave</h2>
            <div className="mb-[48px] sm:mb-[32px]">
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
