import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import SiteLogo from "../components/SiteLogo"
import Button from "../components/Button"
import useWPContext from "../useWPContext"

export default function LostPassword({ setMode }) {
	const { homeUrl, lostPasswordNonce } = useWPContext()
	const setToLogin = (e) => {
		e.preventDefault()
		setMode("login")
	}

	return (
		<Main>
			<MaxWidthWrapper>
				<LogoWrapper href={homeUrl}>
					<SiteLogo />
				</LogoWrapper>
				<Heading>Forgot Your Password?</Heading>
				<H3>Provide Your Email or Username</H3>
				<Form method="post">
					<Input
						placeholder="Username/Email"
						label="Username/Email"
						type="text"
						name="user"
						required
					/>
					<input
						type="hidden"
						name="lostpassword_nonce"
						value={lostPasswordNonce}
					/>
					<input type="hidden" name="action" value="lostpassword" />
					<LinkToLogin href="#" role="button" onClick={(e) => setToLogin(e)}>
						Back to login?
					</LinkToLogin>
					<Button variant="base" size="large" type="submit">
						Reset
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

const LinkToLogin = styled.a`
	margin-top: auto;
	margin-bottom: 61px;
	text-decoration: underline;
	color: var(--color-text);
	font-weight: var(--font-weight-normal);
	font-size: 1.3rem;
	cursor: pointer;
`
