import styled from 'styled-components'
import Upload from './Upload'
import UploadedClassList from './UploadedClassList'
import Section from './Section'
import SectionHeader from './SectionHeader'

export default function MyLatestClasses() {
	return (
		<Section>
			<SectionHeader title="My Latest Classes" />
			<ClassesWrapper>
				<Upload />
				<UploadedClassList />
			</ClassesWrapper>
		</Section>
	)
}

const ClassesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 40px;
`
