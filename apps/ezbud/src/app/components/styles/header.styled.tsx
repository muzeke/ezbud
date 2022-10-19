import styled from 'styled-components';

interface StyledHeaderProps {
  background?: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: ${(props) => props.theme.color?.primary};
  padding: 40px 0;
  color: red;
`;
