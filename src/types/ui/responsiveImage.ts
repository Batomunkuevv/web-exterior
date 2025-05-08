import { ClassNameProp } from "@t";

export interface ResponsiveImageProps extends ClassNameProp {
    src: string;
    alt: string;
    title: string;
    basePath?: string;
    aspectRatio: number;
    wrapperClassName?: string;
    imageClassName?: string;
    sizes?: string;
}
