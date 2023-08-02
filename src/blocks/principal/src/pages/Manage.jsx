import styled from "styled-components"
import Section from "../components/Section"
import SectionHeader from "../components/SectionHeader"
import AddTeacherForm from "../components/AddTeacherForm"
import RemoveTeacherForm from "../components/RemoveTeacherForm"

export default function Manage() {
	return (
		<Section>
			<OuterWrapper>
				<InnerWrapper>
					<SectionHeader title="Add New Teacher" />
					<AddTeacherForm />
				</InnerWrapper>
				<InnerWrapper>
					<SectionHeader title="Remove A Teacher" style={{paddingLeft: '50px'}} />
					<RemoveTeacherForm />
				</InnerWrapper>
			</OuterWrapper>
		</Section>
	)
}

const OuterWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	& > * {
		flex: 1;
	}
`
const InnerWrapper = styled.div`
`
