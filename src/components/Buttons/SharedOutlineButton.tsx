import React from "react";
import { cls } from "../../util/helpers";

interface ButtonOutlineTypes {
    children: React.ReactNode;
    className?: string;
    pill?: boolean;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "normal" | "large";
    onClick: () => void;
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
        primary: 'bg-transparent hover:bg-transparent border border-[#001F55] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 text-[#001F55]',
        secondary: '',
        danger: ''
    }
}

export const SharedOutlineButton = (
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
        }: ButtonOutlineTypes
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