import React from 'react';
import './Button.scss';

export type ButtonTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonTypes> = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = primary ? 're-c-button--primary' : 're-c-button--secondary';
    return (
        <>
            <button
                type='button'
                className={['re-c-button', `re-c-button--${size}`, mode].join(' ')}
                style={{ backgroundColor }}
                {...props}>
                {label}
            </button>
        </>
    );
};
