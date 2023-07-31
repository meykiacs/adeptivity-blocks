import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import SiteLogo from "../components/SiteLogo"
import Button from "../components/Button"
import useWPContext from "../useWPContext"

export default function Register({ setMode }) {
	const { homeUrl, registerNonce, authErrors } = useWPContext()
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
				<Heading>Create Account</Heading>
				
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
						placeholder="Institute Id Code"
						label="Institute Id Code"
						type="text"
						name="institute"
						required
					/>
					<Input
						placeholder="Password"
						label="Password"
						type="password"
						name="password"
						required
					/>
					<Input
						placeholder="Confirm Password"
						label="Confirm Password"
						type="password"
						name="confirm"
						required
					/>
					<input type="hidden" name="register_nonce" value={registerNonce} />
					<input type="hidden" name="action" value="register" />
					<p style={{ fontSize: "1.25rem" }}>Already Have an Account?</p>
					<LinkToLogin href="#" role="button" onClick={(e) => setToLogin(e)}>Login.</LinkToLogin>

					<Button variant="base" size="large" type="submit">
						Create Account
					</Button>
				</Form>
			</MaxWidthWrapper>
		</Main>
	)
}

const Main = styled.main`
	background-color: var(--color-gray-200);
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
	margin-bottom: 51px;
	text-decoration: underline;
	color: var(--color-text);
	font-weight: var(--font-weight-normal);
	font-size: 1.3rem;
	cursor: pointer;
`

const ErrorMessage = styled.p`
	color: var(--color-white);
	margin-top: 20px;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: -10px;
`
