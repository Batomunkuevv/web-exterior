import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { ButtonProps } from "@/types";

export const Button = (props: ButtonProps) => {
    const { className, children, onClick, isDisabled = false, ...rest } = props;
    const classes = clsx(
        "py-[10px] px-[32px] w-full min-h-[calc(var(--index)*1.4)] flex items-center justify-center rounded-[10px] bg-white shadow-button uppercase",
        "transition-all duration-300 hover:bg-black hover:text-white",
        className
    );

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button type="button" disabled={isDisabled} onClick={onClick} className={classes} {...buttonProps}>
            {children}
        </button>
    );
};
