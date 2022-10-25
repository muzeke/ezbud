import { FC } from 'react';
interface ButtonProps {
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    children?: any;
    variant: 'primary' | 'secondary' | 'utility';
    disabled?: boolean;
}
export declare const SButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonProps, never>;
export declare const Button: FC<ButtonProps>;
export {};
