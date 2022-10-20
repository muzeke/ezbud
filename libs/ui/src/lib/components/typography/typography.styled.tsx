import styled, { css } from 'styled-components';

interface TypographyProps {
  color?: string;
  display?: 'block' | 'inline-block' | 'flex' | 'inherit' | 'initial';
  fontWeight?: number | string;
}
const common = css<TypographyProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || 'inherit'};
  display: ${(props) => props.display || 'block'};
  font-weight: ${(props) => props.fontWeight || 500};
  letter-spacing: 1.27px;
`;

const Header1 = styled.h1<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.heading};
  ${common}
`;

const Header2 = styled.h2<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  ${common}
`;

const Header3 = styled.h3<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${common}
`;

const Header4 = styled.h4<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  ${common}
`;

const Header5 = styled.h5<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.md};
  ${common}
`;

const Paragraph = styled.p<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${common}
`;

const Input = styled.span<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  ${common}
`;

const Label = styled.span<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${common}
`;

const Subtext = styled.span<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  ${common}
`;

export const Typography = {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Paragraph,
  Input,
  Label,
  Subtext,
};
