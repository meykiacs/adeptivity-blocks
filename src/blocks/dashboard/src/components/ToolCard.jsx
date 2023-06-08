import SVG from "react-inlinesvg"
import styled from "styled-components"
import Button from "./Buttons"
import usePhp from "../../usePhp"

export default function ToolCard({ title, img, category, scores }) {
	const assetDir = usePhp()
	const image = img ? img : assetDir + "img/course-placeholder.png"
	return (
		<Wrapper>
			<Header>
				<Image src={image} alt={title + " image"} />
				<StyledButton content={category} variant="label" />
			</Header>
			<Footer>
				<Title>{title}</Title>
				<ScoreWrapper>
					<Score>{scores[0][2]}</Score>
					<Icon color={scores[0][0]} src={scores[0][1]} />
					<Score>+</Score>
					<Score>{scores[1][2]}</Score>
					<Icon color={scores[1][0]} src={scores[1][1]} />
				</ScoreWrapper>
			</Footer>
		</Wrapper>
	)
}

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	flex-basis: 150px;
`

const Header = styled.header`
	background-color: var(--color-gray-200);
	padding: 28px;
	padding-bottom: 10px;
	border-radius: 7px;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
	text-align: center;
`

const Image = styled.img`
	display: block;
	width: 95px;
	height: 95px;
	margin: 0 auto;
	margin-bottom: 5px;
	border-radius: 7px;
`

const Footer = styled.footer`
	background-color: var(--color-gray-700);
	display: flex;
	flex-direction: column;
	padding-top: 7px;
	padding-bottom: 13px;
	justify-content: space-between;
	align-items: center;
	border-radius: 0 0 7px 7px;
`

const Title = styled.p`
	color: var(--color-gray-200);
	font-size: 1.6rem;
	font-weight: var(--font-weight-bold-600);
`

const Score = styled.p`
	font-size: 1.2rem;
	font-weight: var(--font-weight-medium);
	color: var(--color-gray-200);
`

const Icon = styled(SVG)`
	height: 16px;
	width: 16px;
	& path {
		fill: var(${(props) => "--color-" + props.color});
	}
`

const ScoreWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 8.5px;
	align-items: center;
	padding-top: 7.5px;
`
const StyledButton = styled(Button)``
