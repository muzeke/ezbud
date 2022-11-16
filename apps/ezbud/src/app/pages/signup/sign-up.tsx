import {
  SBox,
  Typography,
  BackgroundFixImage,
  BackgroundFixOverlay,
  theme,
  Button,
  Input,
  Spacing,
} from '@ui';
import { SignUpContent, SignupPage } from './sign-up.styled';
import { ReactComponent as FacebookIcon } from 'libs/ui/src/lib/assets/facebook.svg';
import { ReactComponent as GoogleIcon } from 'libs/ui/src/lib/assets/google.svg';
import { ReactComponent as MobilePhoneIcon } from 'libs/ui/src/lib/assets/mobilephone.svg';
import styled from 'styled-components';
import { lighten } from 'polished';

const SFacebookIcon = styled(FacebookIcon)`
  color: ${(props) => props.theme.color.blue};
`;

export const SignUp = () => {
  return (
    <SignupPage>
      <BackgroundFixImage />
      <BackgroundFixOverlay />
      <SBox.Wrapper>
        <SBox.Header textAlign="center">
          <Typography.Header2
            color={theme.color.primary}
            display="inline-block"
            fontWeight={600}
          >
            EzBudget
          </Typography.Header2>
          &nbsp;
          <Typography.Header2
            color={theme.color.secondary}
            display="inline-block"
            fontWeight={600}
          >
            SignUp Now
          </Typography.Header2>
        </SBox.Header>

        <SBox.Content as={SignUpContent}>
          <Typography.Header5 fontWeight={600}>
            Log in or sign up in seconds
          </Typography.Header5>

          <Typography.Paragraph
            color={lighten(theme.polishedLevels[0], theme.color.text)}
          >
            Use your email or another service to continue with EzBudget (it's
            free)!
          </Typography.Paragraph>

          <Button variant="utility" LeftIcon={SFacebookIcon}>
            <Typography.Label>Continue with Facebook</Typography.Label>
          </Button>

          <Button variant="utility" LeftIcon={GoogleIcon}>
            <Typography.Label>Continue with Google</Typography.Label>
          </Button>

          <Button variant="utility" LeftIcon={MobilePhoneIcon}>
            <Typography.Label>Continue with mobile number</Typography.Label>
          </Button>

          <Spacing
            height="5px"
            border={`0 0 0 1px dashed ${theme.color.grey}`}
          ></Spacing>

          <Typography.Label
            color={lighten(theme.polishedLevels[0], theme.color.text)}
          >
            Signup with user and password
          </Typography.Label>
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />

          <Button variant="secondary">
            <Typography.Label>Create account</Typography.Label>
          </Button>
        </SBox.Content>
      </SBox.Wrapper>
    </SignupPage>
  );
};
