import SVG from "react-inlinesvg"
import styled from "styled-components"
import { QUERIES } from "../constants"

export default function ProgressBar({ score, icon, title, color }) {
	return (
		<Wrapper>
			<Icon color={color} src={icon} />
			<Title>{title}</Title>
			<BarAndScore>
				<ProgressBarWrapper
					role="progressbar"
					aria-valuenow={score}
					aria-valuemin="0"
					aria-valuemax="10"
				>
					<Bar score={score} color={color} />
				</ProgressBarWrapper>
				<Score>{score}/10</Score>
			</BarAndScore>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;

	@media ${QUERIES.laptopAndSmaller} {
	gap: 20px;
`

const Icon = styled(SVG)`
	height: auto;
	flex-basis: 32px;
	min-width: 32px;
	margin-right: 16px;
	flex-shrink: 0;

	& path {
		fill: var(${(props) => "--color-" + props.color});
	}
`

const Title = styled.h3`
	font-weight: var(--font-weight-medium);
	font-size: 1.9rem;
	margin-right: 32px;
	flex-basis: 200px;
	min-width: 140px;
	flex-shrink: 0;
`
const ProgressBarWrapper = styled.div`
	height: 17px;
	background-color: var(--color-gray-100);
	border-radius: 4px;
	margin-right: 20px;
	padding-top: 1px;
	padding-bottom: 1px;
	flex: 1;
`

const Bar = styled.div`
	width: ${(props) => parseInt(props.score) * 10 + "%"};
	background-color: var(${(props) => "--color-" + props.color});
	height: 100%;
	border-radius: 4px;
`

const Score = styled.div`
	color: var(--color-gray-500);
	font-size: 1.3rem;
`
const BarAndScore = styled.div`
  display: flex;
  min-width; 400px;
  flex-grow: 1;
  flex-basis: 300px;
`
