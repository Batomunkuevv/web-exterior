import { Dispatch, SetStateAction } from "react";
import { ApartamentType, FloorType } from "@t";

export interface FloorPanelProps {
    selectedFloor: FloorType | null;
    setSelectedFloor: Dispatch<SetStateAction<FloorType | null>>;
    isOpenFloorPanel: boolean;
    setIsOpenFloorPanel: Dispatch<SetStateAction<boolean>>;
    selectedApartament: ApartamentType | null;
    setSelectedApartament: Dispatch<SetStateAction<ApartamentType | null>>;
    setTourUrl: Dispatch<SetStateAction<string | null>>;
}
