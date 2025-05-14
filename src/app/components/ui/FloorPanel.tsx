"use client";

import clsx from "clsx";
import { useEffect } from "react";

import { requestIOSMotionPermission } from "@utils";

import { FloorPanelProps } from "@t";

import Image from "next/image";
import { Button, FloorPlan } from "@components";

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

    const handleButtonClick = async () => {
        if (!selectedApartament) return;

        const granted = await requestIOSMotionPermission();

        if (!granted) {
            console.warn("Пользователь не дал доступ к гироскопу");
        }

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
    }, [selectedFloor, setSelectedApartament]);

    return (
        <div
            className={clsx(
                "py-[calc(var(--index)*1.35)] px-[40px] z-[100] fixed top-[6.5vh] right-[40px] w-full max-w-[calc(var(--index)*13.2)] max-h-[calc(100%-56px)]",
                "tb:pt-[6vh] tb:pb-[3vh] tb:px-[24px] tb:top-[16px] tb:right-1/2 tb:translate-x-1/2 tb:w-[calc(100%-32px)] tb:max-w-[360px] tb:max-h-[calc(100%-32px)]",
                "bg-floor-panel border-2 border-yellow flex flex-col items-center text-center",
                "overflow-auto transition-all duration-300",
                {
                    "opacity-100 pointer-events-auto": isOpenFloorPanel,
                    "opacity-0 pointer-events-none": !isOpenFloorPanel,
                }
            )}
        >
            <button
                onClick={handleCloseClick}
                className="absolute top-[calc(var(--index)*0.7)] right-[calc(var(--index)*0.55)] w-[calc(var(--index)*0.55)] h-[calc(var(--index)*0.55)] text-black tb:top-[calc(var(--index)*1)] tb:right-[calc(var(--index)*0.8)] tb:w-[calc(var(--index)*1.5)] tb:h-[calc(var(--index)*1.5)]"
            >
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
