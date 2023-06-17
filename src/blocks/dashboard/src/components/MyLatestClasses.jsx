import styled from "styled-components"
import Upload from "./Upload"
import UploadedClassList from "./UploadedClassList"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import { QUERIES } from "../constants"

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
	justify-content: flex-start;
	gap: 40px;

	@media ${QUERIES.laptopAndSmaller} {
		flex-wrap: wrap;
	}

	& > * {
		flex-basis: 200px;
		flex-grow: 1;
		max-width: 235px;
		@media ${QUERIES.phoneAndSmaller} {
			max-width: 275px;
		}
	}

	@media ${QUERIES.phoneAndSmaller} {
		justify-content: center;
	}
`
