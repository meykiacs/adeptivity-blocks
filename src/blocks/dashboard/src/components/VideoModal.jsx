import styled from "styled-components"
import { Portal, Overlay, Close, Content } from "@radix-ui/react-dialog"
// import { Player } from "video-react"
import "./video-react.css"

export default function VideoModal({ video }) {
	return (
		<Portal>
			<DialogOverlay />
			<DialogContent>
				<video controls src={video}>
					<track
						default
						kind="captions"
						srcLang="en"
						src="/media/examples/friday.vtt"
					/>
				</video>
				{/* <Player>
					<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
				</Player> */}
				<Buttons>
					<StyledClose type="submit">Upload</StyledClose>
					<StyledCloseCancel>Cancel</StyledCloseCancel>
				</Buttons>
			</DialogContent>
		</Portal>
	)
}

const DialogOverlay = styled(Overlay)`
	background-color: var(--color-blurred-background);
	position: fixed;
	inset: 0;
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

const DialogContent = styled(Content)`
	background-color: var(--color-white);
	border-radius: 7px;
	/* box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px; */
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 450px;
	max-height: 100%;
	padding-left: 23px;
	padding-right: 23px;
	padding-top: 13px;
	padding-bottom: 16px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
	overflow: scroll;

	&::-webkit-scrollbar: {
		display: none;
	}

	&:focus {
		outline: none;
	}
`

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	gap: 13px;
`

const StyledClose = styled(Close)`
	cursor: pointer;
	border: none;
	display: block;
	border-radius: 7px;
	background-color: var(--color-error);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	/* padding: 8.5px 10px; */
	text-decoration: none;
	color: var(--color-white);
	font-weight: var(--font-weight-bold-600);
	font-size: 1.5rem;
	line-height: 1;
	width: 123px;
	height: 31px;
`

const StyledCloseCancel = styled(StyledClose)`
	background-color: var(--color-gray-500);
	width: 67px;
`
