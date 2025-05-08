export type ApartamentType = {
    id: string;
    description: string;
    tourUrl: string;
};

export type FloorType = {
    occluderName: string;
    description: string;
    apartaments: ApartamentType[];
};
