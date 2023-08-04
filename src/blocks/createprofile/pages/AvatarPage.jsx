import styled from "styled-components"
import SiteLogo from "../components/SiteLogo"
import useWPContext from "../useWPContext"
import UploadImageInput from "../components/UploadImageInput"
import TeacherAvatarGrid from "../components/TeacherAvatarGrid"

export default function AvatarPage({setFile, setAvatarSvg}) {
	const { homeUrl, createProfileErrors } = useWPContext()
	return (
		<AvatarPageWrapper>
			<Wrapper>
				<LogoWrapper href={homeUrl}>
					<SiteLogo />
				</LogoWrapper>
				<Heading>Profile Picture</Heading>
				{createProfileErrors.length > 0 &&
					createProfileErrors.map((er) => (
						<ErrorMessage key={er}>{er}</ErrorMessage>
					))}
				<UploadImageInput setFile={setFile} />
				<P>Choose an avatar or browse for a photo</P>
				<TeacherAvatarGrid setAvatarSvg={setAvatarSvg} />
			</Wrapper>
		</AvatarPageWrapper>
	)
}

const AvatarPageWrapper = styled.div`
	background-image: linear-gradient(
		to right,
		var(--color-primary),
		var(--color-secondary)
	);
	padding-bottom: 75px;
`

const LogoWrapper = styled.a`
	display: block;
	margin-top: 36px;
`

const Heading = styled.p`
	margin-top: 64px;
	margin-bottom: 20px;
	text-align: center;
	font-weight: var(--font-weight-bold);
	font-size: 1.7rem;
	color: var(--color-text);
`


const ErrorMessage = styled.p`
	color: var(--color-white);
	margin-top: 20px;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: -10px;
`

const P = styled.p`
	margin-top: 10px;
	margin-bottom: 30px;
	text-align: center;
`

const Wrapper = styled.div`
	max-width: 350px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
`