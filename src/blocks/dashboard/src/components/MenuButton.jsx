import styled from "styled-components"
import SVG from "react-inlinesvg"
import { Link, useLocation } from "react-router-dom"
export default function MenuButton({ text, icon, to }) {
	const location = useLocation()
	let temp = text === "Home" ? "" : text
	if (temp.length > 0) {
		temp = temp[0].toLowerCase() + temp.slice(1)
	}
	const Button = location.pathname !== "/" + temp ? ListedButton : ActiveButton

	return (
		<Button to={to}>
			<Icon src={icon} />
			<p>{text}</p>
		</Button>
	)
}

const Icon = styled(SVG)`
	height: 28px;
	width: 28px;
	& path {
		fill: var(--color-primary);
	}
	margin-right: 23px;
`

const ActiveButton = styled(Link)`
	pointer-events: none;
	cursor: default;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 200px;
	padding-bottom: 24px;
	padding-top: 24px;
	padding-left: 29px;
	border-radius: 7px;
	background-color: var(--color-gray-100);

	& p {
		font-weight: var(--font-weight-bold-700);
		font-size: 1.9rem;
		margin-top: 7px;
		color: var(--color-gray-black);
	}
`

const ListedButton = styled(ActiveButton)`
	pointer-events: initial;
	background-color: rgba(0, 0, 0, 0);
	& p {
		color: var(--color-gray-900);
	}

	& ${Icon} path {
		fill: var(--color-gray-900);
	}

	&:hover {
		background-color: var(--color-gray-800);
		cursor: pointer;
	}

	&:hover p {
		color: var(--color-text);
	}

	&:hover ${Icon} path {
		fill: var(--color-text);
	}
`
