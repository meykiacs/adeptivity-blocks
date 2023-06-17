import styled from "styled-components"
import Button from "./Buttons"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import ToolList from "./ToolList"

import { tools } from "../data"
import { QUERIES } from "../constants"

export default function ToolsInMyArsenal() {
	return (
		<Section>
			<SectionHeader title="Tools in My Arsenal" hasRow>
				<Button content="Go to My Toolshed" color="primary" />
			</SectionHeader>
			<Wrapper>
				<ToolList tools={tools} />
			</Wrapper>
		</Section>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 55px;

	& > * {
		flex-basis: 150px;
		flex-grow: 1;
		max-width: 170px;
		@media ${QUERIES.laptopAndSmaller} {
			/* max-width: 275px; */
		}
	}
	@media ${QUERIES.laptopAndSmaller} {
		flex-wrap: wrap;
	}

	@media ${QUERIES.phoneAndSmaller} {
		justify-content: center;
	}
`
