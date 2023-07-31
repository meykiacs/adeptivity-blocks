import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import SiteLogo from "../components/SiteLogo"
import useWPContext from "../useWPContext"

export default function Info({ setMode }) {
	const { homeUrl, info } = useWPContext()
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
				<Heading>{info}</Heading>
				<LinkToLogin href="#" role="button" onClick={(e) => setToLogin(e)}>Back to login?</LinkToLogin>
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

const LinkToLogin = styled.a`
	margin-top: 50px;
	/* margin-bottom: 61px; */
	text-decoration: underline;
	color: var(--color-text);
	font-weight: var(--font-weight-normal);
	font-size: 1.3rem;
	cursor: pointer;
	text-align: center;
	display: block;
	margin-right: auto;
	margin-left: auto;
`
