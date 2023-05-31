import styled from 'styled-components'
import logo from '../svgs/adeptivity-logo.svg'
import SVG from 'react-inlinesvg'

export default function SiteLogo() {
	return (
		<Wrapper href="#">
			<Icon src={ logo } />
		</Wrapper>
	)
}

const Wrapper = styled.a`
	display: block;
`
const Icon = styled( SVG )``
