import styled from "styled-components"
import Button from "./Buttons"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import ToolList from "./ToolList"

export default function ToolsInMyArsenal() {
	return (
		<Section>
			<SectionHeader title="Tools in My Arsenal" hasRow>
				<Button content="Go to My Toolshed" color="primary" />
			</SectionHeader>
			<Wrapper>
				<ToolList />
			</Wrapper>
		</Section>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 55px;
`
