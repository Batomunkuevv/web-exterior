import clsx from "clsx";
import localFont from "next/font/local";

import "./globals.css";

import type { Metadata } from "next";

import { MainLayout } from "@components";

import { LayoutProps } from "@t";

export const metadata: Metadata = {
    title: "360° View with 3D Model",
};

const inter = localFont({
    src: [
        {
            path: "/fonts/Inter-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/Inter-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/Inter-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "/fonts/Inter-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "/fonts/Inter-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "/fonts/Inter-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-inter",
});

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <html lang="ru">
            <body className={clsx(inter.variable)}>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
};

export default RootLayout;
