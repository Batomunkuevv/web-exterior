import { Dispatch, SetStateAction } from "react";

import { ApartamentType, FloorType } from "@t";

export interface FloorPlanProps {
    selectedFloor: FloorType;
    selectedApartament: ApartamentType | null;
    setSelectedApartament: Dispatch<SetStateAction<ApartamentType | null>>;
}
