import Section from "./Section"
import SectionHeader from "./SectionHeader"
import MyCurrentClassList from "./MyCurrentClassList"
import styled from "styled-components"
import { Root } from "@radix-ui/react-dialog"
import UploadModal from "./UploadModal"
import { StyledTrigger } from "./TriggerButtons"

export default function MyCurrentClasses() {
	return (
		<Section>
			<SectionHeader title="My Current Classes" hasRow>
				<Root>
					<StyledTrigger>Upload New</StyledTrigger>
					<UploadModal />
				</Root>
			</SectionHeader>
			<Main>
				<MyCurrentClassList />
			</Main>
		</Section>
	)
}

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: start;
	margin-bottom: 40px;

	  
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }

`
