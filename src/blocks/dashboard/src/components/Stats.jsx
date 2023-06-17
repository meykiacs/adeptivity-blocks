import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import StatCardList from "./StatCardList"
import { QUERIES } from "../constants"

export default function Stats() {
	return (
		<StyledSection>
			<SectionHeader title="Stats & Growth" />
			<Main>
				<StatCardList />
			</Main>
		</StyledSection>
	)
}

const Main = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 80px;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: center;
	}
	& > * {
		flex-basis: 400px;
		flex-grow: 0.2;
		@media ${QUERIES.tabletAndSmaller} {
			flex-grow: 0;
			flex-basis: 70%;
		}
		@media ${QUERIES.phoneAndSmaller} {
			flex-grow: 1;
			flex-basis: 90%;
		}
	}
`

// the background color is different from that of the main
// main has paddings so:
const StyledSection = styled(Section)`
	background-color: var(--color-gray-100);
	margin-left: -50px;
	margin-right: -50px;
	@media ${QUERIES.tabletAndSmaller} {
		margin-right: -30px;
		margin-left: -30px;
	}

	& > * {
		padding-left: 50px;
		padding-right: 50px;

		@media ${QUERIES.tabletAndSmaller} {
			padding-right: 30px;
			padding-left: 30px;
		}
	}
`
