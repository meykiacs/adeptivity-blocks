import styled from "styled-components"
import logo from "../svgs/adeptivity-logo.svg"
import SVG from "react-inlinesvg"
import { Link } from "react-router-dom"

export default function SiteLogo() {
	return (
		<Wrapper to="/">
			<Icon src={logo} />
		</Wrapper>
	)
}

const Wrapper = styled(Link)`
	display: block;
`
const Icon = styled(SVG)``
