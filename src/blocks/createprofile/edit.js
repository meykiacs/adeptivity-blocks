import { useBlockProps } from "@wordpress/block-editor"

import styled from "styled-components"

export default function Edit() {
	return (
		<header {...useBlockProps()}>
			<Wrapper>Create Profile</Wrapper>
		</header>
	)
}

const Wrapper = styled.div`
	color: green;
	width: 230px;
`
