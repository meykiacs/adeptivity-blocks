import Section from "./Section"
import SectionHeader from "./SectionHeader"
import MyCurrentClassList from "./MyCurrentClassList"
import styled from "styled-components"
import { Root } from "@radix-ui/react-dialog"
import UploadModal from "./UploadModal"
import { StyledTrigger } from "./TriggerButtons"
import { useState } from '@wordpress/element'

export default function MyCurrentClasses() {
	const [open, setOpen] = useState(false)

	return (
		<Section>
			<SectionHeader title="My Current Classes" hasRow>
				<Root open={open} onOpenChange={setOpen}>
					<StyledTrigger>Upload New</StyledTrigger>
					<UploadModal setOpen={setOpen} />
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
	justify-content: flex-start;
	margin-bottom: 40px;

	& > * {
		margin-bottom: 50px;
	}
`
