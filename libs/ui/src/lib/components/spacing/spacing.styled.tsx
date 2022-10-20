import styled from 'styled-components';

interface SpacingProps {
  height: string;
  border?: string;
}
export const Spacing = styled.div<SpacingProps>`
  height: ${(props) => props.height || '2px'};
  border: ${(props) => props.border || 'none'};
`;
