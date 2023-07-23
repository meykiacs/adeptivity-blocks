import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import SiteLogo from "../components/SiteLogo"
import Button from "../components/Button"
import useWPContext from "../useWPContext"

export default function RP({ setMode }) {
	const { homeUrl, rpNonce } = useWPContext()
	const setToLogin = (e) => {
		e.preventDefault()
    setMode('login')
	}

	return (
		<Main>
			<MaxWidthWrapper>
				<LogoWrapper href={homeUrl}>
					<SiteLogo />
				</LogoWrapper>
				<Heading>Welcome Back!</Heading>
				<H3>Set Your New Password</H3>
				<Form method="post">
					<Input
						placeholder="New Password"
						label="new_password"
						type="text"
						name="new_password"
						required
					/>
					<input
						type="hidden"
						name="rp_nonce"
						value={rpNonce}
					/>
					<input type="hidden" name="action" value="rp" />
					<LinkToLogin onClick={(e) => setToLogin(e)}>
						Back to login?
					</LinkToLogin>
					<Button variant="base" size="large" type="submit">
						Update
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
