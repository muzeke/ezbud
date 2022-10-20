import { FC } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface ButtonProps {
  LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  children?: any;
  variant: 'primary' | 'secondary' | 'utility';
  disabled?: boolean;
}

const disabled = css`
  cursor: not-allowed;
  background: ${(props) => props.theme.color.grey};
  color: ${(props) => props.theme.color.white};
`;

const variant = {
  primary: css`
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.primary};

    :hover {
      background: ${(props) =>
        lighten(props.theme.polishedLevels[1], props.theme.color.primary)};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color?.secondary};

    :hover {
      background: ${(props) =>
        lighten(props.theme.polishedLevels[0], props.theme.color.secondary)};
    }
  `,

  utility: css`
    background: ${(props) =>
      lighten(props.theme.polishedLevels[3], props.theme.color?.grey)};

    :hover {
      background: ${(props) =>
        lighten(props.theme.polishedLevels[2], props.theme.color.grey)};
    }
  `,
};

export const SButton = styled.button<ButtonProps>`
  border-radius: 5px;
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  height: 43px;
  max-width: 100%;
  min-width: 80px;
  padding: 0 6px;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: all 150ms linear;
  position: relative;
  justify-content: center;
  font-weight: 500;

  > svg {
    position: absolute;
    left: 10px;
  }

  :hover {
    text-decoration: none;
    transition: all 250ms linear;
    transition: all 250ms linear;
  }

  ${(props) => variant[props.variant]}
  ${(props) => props.disabled && disabled}
`;

export const Button: FC<ButtonProps> = (props) => {
  const { LeftIcon, RightIcon, children } = props;
  return (
    <SButton {...props}>
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </SButton>
  );
};
