import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import styled from "styled-components"
import usePhp from "../../usePhp"

export default function DropDownMenu({ children }) {
	const { logoutUrl } = usePhp()

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<StyledItem>
						<A href={`${logoutUrl}`}>Logout</A>
					</StyledItem>
					<StyledItem disabled>Profile</StyledItem>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
}

const StyledItem = styled(DropdownMenu.Item)`
	display: block;
	width: 152px;
	height: 50px;
	background-color: var(--color-gray-200);
	font-size: 2rem;
	text-align: center;
	cursor: pointer;
	padding-top: 15px;
	margin-top: 10px;
	margin-bottom: -10px;

	&[data-disabled] {
		color: var(--color-gray-500);
		cursor: default;
	}
`

const A = styled.a`
	display: block;
	&:focus {
		outline: revert;
	}
`