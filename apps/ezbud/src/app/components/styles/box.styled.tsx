import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.color?.background};
  width: 400px;
  color: ${({ theme }) => theme.color?.primary};
  margin: 48px auto 0;
  font-family: 'PangolinRegular';
  box-shadow: ${({ theme }) => theme.boxShadow?.light};
  position: relative;
  z-index: 2;
  padding: 32px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 10px;
`;

export interface HeaderProps {
  textAlign?: 'initial' | 'center' | 'inherit';
}

const Header = styled.header<HeaderProps>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  min-height: 300px;
`;
const Footer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const SBox = {
  Wrapper,
  Header,
  Content,
  Footer,
};
