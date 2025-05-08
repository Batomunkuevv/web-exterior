import { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col overflow-clip min-h-screen">
            <main className="flex-1">{children}</main>
        </div>
    );
};
