import { useBlockProps } from "@wordpress/block-editor"

import styled from "styled-components"

export default function Edit() {
	return (
		<header {...useBlockProps()}>
			<Wrapper>Auth</Wrapper>
		</header>
	)
}

const Wrapper = styled.div`
	color: white;
	width: 230px;
`
