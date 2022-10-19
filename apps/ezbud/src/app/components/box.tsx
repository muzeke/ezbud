import { FC } from 'react';
import { SBox } from './styles';

interface BoxProps extends FC<{ children: React.ReactNode }> {
  Header: FC<{ children: React.ReactNode }>;
  Content: FC<{ children: React.ReactNode }>;
  Footer: FC<{ children: React.ReactNode }>;
}

export const Box: BoxProps = (props) => {
  return <SBox.Wrapper>{props.children}</SBox.Wrapper>;
};

Box.Header = (props) => {
  return <SBox.Header>{props.children}</SBox.Header>;
};

Box.Content = (props) => {
  return <SBox.Content>{props.children}</SBox.Content>;
};

Box.Footer = (props) => {
  return <SBox.Footer>{props.children}</SBox.Footer>;
};
