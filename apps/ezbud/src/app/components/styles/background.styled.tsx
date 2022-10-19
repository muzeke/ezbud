import styled from 'styled-components';

export const BackgroundFixImage = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('../../../assets/images/login-signup-bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Add the blur effect */
  filter: blur(7px);
  -webkit-filter: blur(7px);
  z-index: 0;
`;

export const BackgroundFixOverlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.8)
  );
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
