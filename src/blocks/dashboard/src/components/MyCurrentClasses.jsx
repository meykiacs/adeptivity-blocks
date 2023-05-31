import React from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Button from './Buttons'
import MyCurrentClassList from './MyCurrentClassList'
import styled from 'styled-components'

export default function MyCurrentClasses() {
	return (
		<Section>
			<SectionHeader title="My Current Classes" hasRow>
				<Button content="Upload New" color="error" />
			</SectionHeader>
			<Main>
				<MyCurrentClassList />
			</Main>
		</Section>
	)
}

const Main = styled.main`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: start;
`
