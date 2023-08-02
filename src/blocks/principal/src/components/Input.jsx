import styled from "styled-components"
import VisuallyHidden from "./VisuallyHidden"

export default function Input({
	label,
	width = "254",
	placeholder,
	...delegated
}) {
	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<BaseInput
				placeholder={placeholder}
				{...delegated}
				style={{
					"--width": width + "px",
				}}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.label`
	display: block;
	position: relative;
	color: var(--color-gray-700);

	&:hover {
		color: var(--color-black);
	}
`

const BaseInput = styled.input`
	width: var(--width);
	height: 45px;
	font-size: 1.2rem;
	border: none;
	padding-left: 16px;
	color: inherit;
	font-weight: var(--font-weight-medium);
	outline-offset: 2px;
	border-radius: 7px;
	background-color: var(--color-gray-200);

	&::placeholder {
		font-weight: 400;
		color: var(--color-gray-700);
	}

	&[disabled] {
		background-color: var(--color-gray-300);
	}
`

export const TextArea = ({ label, placeholder, width="254", ...delegated }) => {
	return (
		<Wrapper>
			<VisuallyHidden>
				{label}
			</VisuallyHidden>
			<BaseTextArea
				placeholder={placeholder}
				{...delegated}
				style={{
					"--width": width + "px",
				}}
			/>
		</Wrapper>
	)
}

const BaseTextArea = styled.textarea`
	width: var(--width);
	font-size: 1.2rem;
	border: none;
	padding-left: 16px;
	color: inherit;
	font-weight: var(--font-weight-medium);
	outline-offset: 2px;
	border-radius: 7px;
	background-color: var(--color-gray-200);
	height: 110px;
	padding-top: 10px;

	&::placeholder {
		font-weight: 400;
		color: var(--color-gray-700);
	}

	&[disabled] {
		background-color: var(--color-gray-300);
	}	
`