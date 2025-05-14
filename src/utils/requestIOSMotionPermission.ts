type DeviceMotionEventWithPermission = typeof DeviceMotionEvent & {
    requestPermission?: () => Promise<"granted" | "denied">;
};

export const requestIOSMotionPermission = async (): Promise<boolean> => {
    if (typeof window === "undefined") return false;

    const deviceMotionEvent = window.DeviceMotionEvent as DeviceMotionEventWithPermission;

    if (typeof deviceMotionEvent?.requestPermission === "function") {
        try {
            const result = await deviceMotionEvent.requestPermission();
            return result === "granted";
        } catch (err) {
            console.error("Ошибка при запросе доступа к гироскопу:", err);
            return false;
        }
    }

    return true;
};
