import styled from 'styled-components'
import playGray from '../svgs/play-gray.svg'
import rectVideo from '../svgs/rect-video.svg'
import play from '../svgs/play.svg'

export default function Uploaded( { title } ) {
	return (
		<Wrapper>
			<Header>
				<Image src={playGray} alt="video" />
				<Image src={rectVideo} alt="video" />
			</Header>
			<Footer>
				<Text>{ title }</Text>
				<Icon src={play} alt="play" />
			</Footer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex-basis: 235px;
	/* min-width: 235px; */
	/* flex: 1; */
	border-radius: 7px;
	box-shadow: 0px 0px 7px rgba( 32, 34, 36, 0.25 );
`

const Header = styled.header`
	background-color: var( --color-gray-200 );
	height: 180px;
	width: 100%;
	display: flex;
	position: relative;
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
`

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
`
