import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import SiteLogo from "../components/SiteLogo"
import Button from "../components/Button"
import useWPContext from "../useWPContext"

export default function Login({ setMode }) {
	const { homeUrl, loginNonce, authErrors } = useWPContext()
	const setToLostPassword = (e) => {
		e.preventDefault()
		setMode("lostpassword")
	}
	const setToRegister = (e) => {
		e.preventDefault()
		setMode("register")
	}
	return (
		<Main>
			<MaxWidthWrapper>
				<LogoWrapper href={homeUrl}>
					<SiteLogo />
				</LogoWrapper>
				<Heading>Already have an account?</Heading>
				<H3>Login</H3>
				{authErrors.length > 0 &&
					authErrors.map((er) => <ErrorMessage key={er}>{er}</ErrorMessage>)}
				<Form method="post">
					<Input
						placeholder="Username/Email"
						label="Username/Email"
						type="text"
						name="user"
						required
						// eslint-disable-next-line
						autoFocus
					/>
					<Input
						placeholder="Password"
						label="Password"
						type="password"
						name="password"
						required
					/>
					<input type="hidden" name="login_nonce" value={loginNonce} />
					<input type="hidden" name="action" value="login" />
					<LinkToLostPassword role="button" href="#" onClick={(e) => setToLostPassword(e)}>
						Forgot your password?
					</LinkToLostPassword>
					<LinkToRegister role="button" href="#" onClick={(e) => setToRegister(e)}>
						Register
					</LinkToRegister>
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
	height: 285px;
`

const LinkToLostPassword = styled.a`
	margin-top: auto;
	margin-bottom: 61px;
	text-decoration: underline;
	color: var(--color-text);
	font-weight: var(--font-weight-normal);
	font-size: 1.3rem;
	cursor: pointer;
`

const LinkToRegister = LinkToLostPassword

const ErrorMessage = styled.p`
	color: var(--color-white);
	margin-top: 20px;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: -10px;
`
