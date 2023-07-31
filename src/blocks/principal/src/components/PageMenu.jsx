import styled from "styled-components"
import { menuBottons } from "../data"
import MenuButton from "./MenuButton"
import SiteLogo from "./SiteLogo"

export default function PageMenu() {
	return (
		<Wrapper>
			<ul>
				<li>
					<SiteLogo />
				</li>
				{menuBottons.map((menuButton) => (
					<li key={menuButton.id}>
						<MenuButton {...menuButton} />
					</li>
				))}
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	background-color: var(--color-gray-1000);
	/* background-color: var('--color-gray-1000'); */
	width: 230px;
	padding-top: 15px;
	padding-bottom: 300px;

	& ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* padding-left: 14px; */
		justify-content: flex-start;
		gap: 20px;
	}
`
