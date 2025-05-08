import { Dispatch, SetStateAction } from "react";
import { ApartamentType, FloorType } from "@t";

export interface ThreeSceneProps {
    selectedFloor: FloorType | null;
    setSelectedApartament: Dispatch<SetStateAction<ApartamentType | null>>;
    setSelectedFloor: Dispatch<SetStateAction<FloorType | null>>;
    setIsOpenFloorPanel: Dispatch<SetStateAction<boolean>>;
}
