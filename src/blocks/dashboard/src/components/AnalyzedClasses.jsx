import styled from "styled-components"
import AnalyzeTable from "./AnalyzeTable"
import Section from "./Section"
import SectionHeader from "./SectionHeader"

export default function AnalyzedClasses() {
	return (
		<StyledSection>
			<SectionHeader title="Analyzed Classes" />
			<AnalyzeTable />
		</StyledSection>
	)
}

const StyledSection = styled(Section)`
	margin-bottom: 75px;
`