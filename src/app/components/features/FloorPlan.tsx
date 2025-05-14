"use client";

import { useEffect, useState, MouseEvent, useCallback } from "react";

import { FloorPlanProps } from "@t";

export const FloorPlan = ({ selectedFloor, selectedApartament, setSelectedApartament }: FloorPlanProps) => {
    const [planSvg, setPlanSvg] = useState<string | null>(null);

    const getPlanSvg = useCallback(async () => {
        const svgUrl = `/floors/${selectedFloor.occluderName}/floor-plan.svg`;
        const response = await fetch(svgUrl);
        let planSvg = await response.text();

        if (selectedApartament) {
            planSvg = planSvg.replace(new RegExp(`id="${selectedApartament.id}"`, "g"), `id="${selectedApartament.id}" class="selected-apartament"`);
        }

        setPlanSvg(planSvg);
    }, [selectedApartament, selectedFloor.occluderName]);

    const handlePlanClick = (e: MouseEvent) => {
        const { target } = e;

        if (!(target instanceof SVGElement && target.nodeName === "path")) return;

        const apartamentId = target.id;

        if (!apartamentId) return;

        const apartament = selectedFloor.apartaments.find((apartament) => apartament.id === apartamentId);

        if (!apartament) return;

        setSelectedApartament(apartament);
    };

    useEffect(() => {
        getPlanSvg();
    }, [selectedApartament, getPlanSvg]);

    if (!planSvg) return null;

    return <div onClick={handlePlanClick} className="floor-plan" dangerouslySetInnerHTML={{ __html: planSvg }}></div>;
};
