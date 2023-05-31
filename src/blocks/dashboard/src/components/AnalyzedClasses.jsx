import AnalyzeTable from './AnalyzeTable'
import Section from './Section'
import SectionHeader from './SectionHeader'

export default function AnalyzedClasses() {
	return (
		<Section>
			<SectionHeader title="Analyzed Classes" />
			<AnalyzeTable />
		</Section>
	)
}
