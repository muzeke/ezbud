import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid red;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background: yellow;
  }
`;

export const PrimaryButton = styled(Button)``;

export const SecondaryButton = styled(Button)`
  background: red;
`;
