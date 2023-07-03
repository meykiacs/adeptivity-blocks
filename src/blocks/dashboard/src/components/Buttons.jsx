import styled, { css } from "styled-components"

export default function Button({
	content,
	color,
	variant,
	className,
	onClick,
}) {
	color = color ? color : "primary"
	if (variant === "label") {
		return (
			<Label className={className} onClick={onClick}>
				{content}
			</Label>
		)
	}
	// if (variant === "Link") {
	// 	return <StyledLink color={color} className={className} to={to}>{content}</StyledLink>
	// }
	return (
		<Btn color={color} className={className} onClick={onClick}>
			{content}
		</Btn>
	)
}

const buttonCss = css`
	border: none;
	display: block;
	border-radius: 7px;
	background-color: var(--color-${(props) => props.color});
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	padding: 8.5px 10px;
	text-decoration: none;
	color: var(--color-white);
	font-weight: var(--font-weight-bold-600);
	font-size: 1.5rem;
	line-height: 1;
	cursor: pointer;

	min-height: var(--min-tap-height, 32px);
`

const Btn = styled.button`
	${buttonCss}
`

export const Label = styled.span`
	border: none;
	border-radius: 7px;
	text-decoration: none;
	font-weight: var(--font-weight-bold-600);
	line-height: 1;

	background-color: var(--color-tertiary);
	padding: 3px 7px;
	box-shadow: none;
	color: var(--color-text);
	font-size: 1.1rem;
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
