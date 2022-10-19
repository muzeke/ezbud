import styled, { css } from 'styled-components';

interface TypographyProps {
  color?: string;
}
const common = css<TypographyProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || props.theme.color?.primary};
`;

const Header1 = styled.h1<TypographyProps>`
  font-size: ${({ theme }) => theme.fontSize.heading};
  ${common}
`;

const Header2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  ${common}
`;

const Header3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${common}
`;

const Header4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  ${common}
`;

const Header5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.md};
  ${common}
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  ${common}
`;

const Input = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  ${common}
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${common}
`;

const Subtext = styled.span`
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
