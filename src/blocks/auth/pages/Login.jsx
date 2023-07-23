import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import SiteLogo from "../components/SiteLogo"
import Button from "../components/Button"

export default function Login() {
  return (
    <Main>
      <MaxWidthWrapper>
        <LogoWrapper href="google.com">
          <SiteLogo />
        </LogoWrapper>
        <Heading>Already have an account?</Heading>
        <H3>Login</H3>
        <Form method="post">
          <Input placeholder="Username" label="Username" type="text" name="username" required />
          <Input placeholder="Password" label="Password" type="password" name="password" required />
          <A href="https://google.com">Forgot your password?</A>
          <Button variant="base" size="large" type="submit">
            Login
          </Button>
        </Form>
      </MaxWidthWrapper>
    </Main>
  )
}

const Main = styled.main`
  background-image: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );
  flex: 1;
`

const LogoWrapper = styled.a`
  display: block;
  margin-top: 36px;
`

const Heading = styled.p`
  margin-top: 64px;
  text-align: center;
  font-weight: var(--font-weight-bold);
  font-size: 1.7rem;
  color: var(--color-text);
`

const H3 = styled.h3`
  margin-top: 20px;
  font-weight: var(--font-weight-normal);
  text-align: center;
  font-size: 1.7rem;
  color: var(--color-text);
`

const Form = styled.form`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`

const A = styled.a`
  margin-top: 25px;
  margin-bottom: 61px;
  text-decoration: underline;
  color: var(--color-text);
  font-weight: var(--font-weight-normal);
  font-size: 1.3rem;
`
