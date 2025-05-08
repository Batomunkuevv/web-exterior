import { ReactNode } from "react";
import { ClassNameProp } from "../global";

export interface LayoutProps extends ClassNameProp {
    children: ReactNode;
}
