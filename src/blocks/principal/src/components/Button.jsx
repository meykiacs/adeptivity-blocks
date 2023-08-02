import styled from "styled-components"

const SIZES = {
	small: {
		fontWeight: "bold",
		fontSize: "1.5rem",
		padding: "3.75px 10px",
	},
	large: {
		fontWeight: "normal",
		fontSize: "1.7rem",
		padding: "15px 15px",
	},
}

export default function Button({
	variant,
	size,
	width = 155,
	children,
	color="--color-accent",
	...delegated
}) {
	const styles = SIZES[size]

	const Component = variant === "ghost" ? GhostButton : BaseButton

	return (
		<Component
			fontWeight={styles.fontWeight}
			fontSize={styles.fontSize}
			width={width}
			padding={styles.padding}
			color={color}
			{...delegated}
		>
			{children}
		</Component>
	)
}

const BaseButton = styled.button`
	display: block;
	font-weight: ${(p) => "var(--font-weight-" + p.fontWeight + ")"};
	font-size: ${(p) => p.fontSize};
	padding: ${(p) => p.padding};
	width: ${(p) => p.width + "px"};
	border-radius: 7px;
	background-color: ${p => `var(${p.color})`};
	color: var(--color-white);
	border: none;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: var(--color-secondary-dark);
		cursor: pointer;
	}

	&:active {
		background-color: var(--color-secondary);
		cursor: pointer;
	}
`

const GhostButton = styled(BaseButton)`
	background-color: var(--color-gray-500);
	&:hover {
		background-color: var(--color-gray-500);
	}

	&:active {
		background-color: var(--color-gray-500);
	}
`


export const UnstyledButton = styled.button`
	display: ${(props) => props.display || "block"};
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
	text-align: left;
	font: inherit;
	color: inherit;

	&:focus {
		outline-offset: 2px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`
