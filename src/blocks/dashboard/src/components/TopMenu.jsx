import styled from "styled-components"
import SVG from "react-inlinesvg"

import profile from "../svgs/profile.svg"
import search from "../svgs/search.svg"
import pocket from "../svgs/pocket.svg"
import menu from "../svgs/burger-menu.svg"
import { QUERIES } from "../constants"
import { UnstyledButton } from "./Buttons"
import VisuallyHidden from "./VisuallyHidden"

export default function TopMenu() {
	return (
		<Wrapper>
			<MobileActions>
				<UnstyledButton>
					<Icon src={menu} />
					<VisuallyHidden>Open Menu</VisuallyHidden>
				</UnstyledButton>
			</MobileActions>
			<ul>
				<li>
					<a href="https://google.com">
						<Icon src={search} />
					</a>
				</li>
				<li>
					<a href="https://google.com">
						<Icon src={pocket} />
					</a>
				</li>
				<li>
					<a href="https://google.com">
						<Icon src={profile} />
					</a>
				</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 50px;
	padding-right: 56px;
	background-color: var(--color-gray-900);
	height: 90px;
	
  @media ${QUERIES.tabletAndSmaller} {
    padding-right: 30px;
    padding-left: 30px;
  }

	& ul {
		display: flex;
		justify-content: flex-start;
		margin-left: auto;
		gap: 55px;
		align-items: center;
		height: 100%;
	}
`

const Icon = styled(SVG)`
	height: 40px;
	width: 40px;

	& path {
		stroke: #d0d0d0;
	}
`

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		display: block;
	}
`
