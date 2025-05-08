export {};

declare global {
    interface Window {
        CI360?: {
            init: () => void;
            getActiveIndexByID: (id: string) => number;
        };
    }
}
