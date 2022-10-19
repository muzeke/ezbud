import {
  BackgroundFixImage,
  BackgroundFixOverlay,
  Box,
  PrimaryButton,
  SecondaryButton,
  theme,
  Typography,
} from '../components';

export const SignUp = () => {
  return (
    <div>
      <BackgroundFixImage />
      <BackgroundFixOverlay />
      <Box>
        <Box.Header>
          <Typography.Header2 color={theme.color?.secondary} >
            EzBudget
          </Typography.Header2>
        </Box.Header>
        <Box.Content>
          <Typography.Header5>Log in or sign up in seconds</Typography.Header5>
          <Typography.Paragraph>
            Use your email or another service to continue with EzBudget (it's
            free)!
          </Typography.Paragraph>
          <PrimaryButton>Primary</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
        </Box.Content>
        <Box.Footer>
          <Typography.Header2>Footer</Typography.Header2>
        </Box.Footer>
      </Box>
    </div>
  );
};
