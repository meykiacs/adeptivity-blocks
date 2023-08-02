import styled from "styled-components"
import { Trigger } from "@radix-ui/react-dialog"

export const StyledTrigger = styled(Trigger)`
	cursor: pointer;
	border: none;
	display: block;
	border-radius: 7px;
	background-color: var(--color-accent);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	padding: 8.5px 10px;
	text-decoration: none;
	color: var(--color-white);
	font-weight: var(--font-weight-bold);
	font-size: 1.5rem;
	line-height: 1;

	min-height: var(--min-tap-height, 32px);
`
