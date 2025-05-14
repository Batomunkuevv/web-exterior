import { Dispatch, SetStateAction } from "react";
import { ApartamentType, FloorType } from "@t";

export interface ThreeSceneProps {
    isLoading360: boolean;
    selectedFloor: FloorType | null;
    setSelectedApartament: Dispatch<SetStateAction<ApartamentType | null>>;
    setSelectedFloor: Dispatch<SetStateAction<FloorType | null>>;
    setIsOpenFloorPanel: Dispatch<SetStateAction<boolean>>;
}
