import styled from "styled-components"
import playGray from "../svgs/play-gray.svg"
import rectVideo from "../svgs/rect-video.svg"
import { QUERIES } from "../constants"
import { Root, Trigger } from "@radix-ui/react-dialog"

import ClassTable from "./ClassTable"
import VideoModal from "./VideoModal"

export default function MyClassDetail({ myClass }) {
	const { analyzed } = myClass
	return (
		<Wrapper>
			<VisualPart>
				{myClass.video ? (
					<Root>
						<Trigger asChild>
							<ImageWrapper pointer>
								<Image src={playGray} alt="video" />
								<Image src={rectVideo} alt="video" />
							</ImageWrapper>
						</Trigger>
						<VideoModal video={myClass.video} />
					</Root>
				) : (
					<ImageWrapper>
						<Image src={playGray} alt="video" />
						<Image src={rectVideo} alt="video" />
					</ImageWrapper>
				)}
				<StyledSpan color={!analyzed ? "gray-500" : "primary"} variant="label">
					{analyzed ? "Analyzed" : "Not analyzed"}
				</StyledSpan>
			</VisualPart>
			<ClassTable myClass={myClass} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 24px;
	flex-wrap: wrap;

	@media ${QUERIES.phoneAndSmaller} {
		justify-content: center;
	}
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
	cursor: ${props => props.pointer ? 'pointer' : 'default'}
`

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const StyledSpan = styled.span`
	display: block;
	margin: 0 auto;
	background-color: var(${(props) => "--color-" + props.color});
	border-radius: 7px;
	padding: 8px 10px;
	text-decoration: none;
	color: var(--color-white);
	font-weight: var(--font-weight-bold-600);
	font-size: 1.5rem;
	line-height: 1;

	min-height: var(--min-tap-height, 32px);
`
