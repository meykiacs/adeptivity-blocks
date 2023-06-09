import styled from "styled-components"
import Button from "./Buttons"
import ClassTable from "./ClassTable"
import playGray from "../svgs/play-gray.svg"
import rectVideo from "../svgs/rect-video.svg"

export default function MyClassDetail({ myClass }) {
	const { analyzed } = myClass
	return (
		<Wrapper>
			<VisualPart>
				<ImageWrapper>
					<Image src={playGray} alt="video" />
					<Image src={rectVideo} alt="video" />
				</ImageWrapper>
				<StyledButton
					content={analyzed ? "Analyzed" : "Analyze Now"}
					color={analyzed ? "gray-500" : "primary"}
				/>
			</VisualPart>
			<ClassTable myClass={myClass} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 24px;
`

const VisualPart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	/* justify-content: space-between; */
`

const ImageWrapper = styled.div`
	background-color: var(--color-gray-200);
	height: 135px;
	width: 180px;
	position: relative;
	box-shadow: 0px 0px 7px rgba(32, 34, 36, 0.25);
`

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const StyledButton = styled(Button)`
	display: block;
	margin: 0 auto;
`
