import { FC } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface InputProps {
  variant?: string;
}
export const Input = styled.input<InputProps>`
  border: 1px solid
    ${(props) => lighten(props.theme.polishedLevels[2], props.theme.color.grey)};
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-flex;
  height: 43px;
  padding: 7px 10px;
  font-size: ${(props) => props.theme.fontSize.xs};

  :focus,
  :focus-visible {
    border: 1px solid ${(props) => props.theme.color.primary};
    box-shadow: ${(props) => props.theme.boxShadow?.light};
  }
`;
