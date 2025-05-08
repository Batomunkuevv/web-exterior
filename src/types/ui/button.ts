import { ReactNode } from "react";

import { ClassNameProp } from "@t";

export interface ButtonProps extends ClassNameProp {
    onClick: () => void;
    children: ReactNode;
    isDisabled?: boolean;
}
