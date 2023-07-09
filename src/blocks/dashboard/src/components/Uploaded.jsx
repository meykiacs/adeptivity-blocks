import styled from "styled-components"
import playGray from "../svgs/play-gray.svg"
import rectVideo from "../svgs/rect-video.svg"
import play from "../svgs/play.svg"
import { Root, Trigger } from "@radix-ui/react-dialog"
import VideoModal from "./VideoModal"

export default function Uploaded({ title, video, course }) {
	return (
		<Wrapper>
			{video ? (
				<Root>
					<Trigger asChild>
						<Header pointer>
							<Image src={playGray} alt="video" />
							<Image src={rectVideo} alt="video" />
						</Header>
					</Trigger>
					<Footer>
						<div>
							<Text>{course}</Text>
							<Text>{title}</Text>
						</div>
						<Trigger asChild>
							<Icon src={play} alt="play" />
						</Trigger>
					</Footer>
					<VideoModal video={video} />
				</Root>
			) : (
				<>
					<Header>
						<Image src={playGray} alt="video" />
						<Image src={rectVideo} alt="video" />
					</Header>
					<Footer>
						<Text>{title}</Text>
					</Footer>
				</>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border-radius: 7px;
	box-shadow: 0px 0px 7px rgba(32, 34, 36, 0.25);
`

const Header = styled.header`
	background-color: var(--color-gray-200);
	height: 180px;
	width: 100%;
	display: flex;
	position: relative;
	cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`

const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding-left: 13px;
	padding-right: 13px;
`

const Text = styled.p`
	font-size: 1.6rem;
	line-height: 1.45;
`

const Icon = styled.img`
	display: block;
	width: 30px;
	height: auto;
	cursor: pointer;
`

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
