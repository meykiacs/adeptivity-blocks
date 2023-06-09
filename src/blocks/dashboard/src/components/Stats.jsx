import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import StatCardList from "./StatCardList"

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
`

const StyledSection = styled(Section)`
	background-color: var(--color-gray-100);
	margin-left: -50px;
	margin-right: -50px;

	& > * {
		padding-left: 50px;
		padding-right: 50px;
	}
`
