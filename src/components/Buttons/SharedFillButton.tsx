import React from "react";
import { cls } from "@/util/helpers";

interface ButtonFillTypes {
    children: React.ReactNode;
    className?: string;
    pill?: boolean;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "normal" | "large";
    onClick?: () => void;
}

const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: '',
        normal: '',
        large: ''
    },
    variant: {
        primary: 'bg-[#001F55] hover:bg-[#173A78] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 text-white',
        secondary: '',
        danger: ''
    }
}

export const SharedFillButton = (
    (
        {
            children,
            onClick,
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            ...props
        }: ButtonFillTypes
    ) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ));