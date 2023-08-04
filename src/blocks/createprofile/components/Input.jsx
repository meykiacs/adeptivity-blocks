import styled from "styled-components"
import VisuallyHidden from "./VisuallyHidden"
import { useState } from "@wordpress/element"
import SVG from "react-inlinesvg"
import calander from "../svg/calendar-fill.svg"

export default function Input({
	label,
	width = "254",
	placeholder,
	variant = null,
	...delegated
}) {
	return (
		<>
			{variant === "date" ? (
				<DateInput />
			) : (
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
			)}
		</>
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
	font-weight: var(--font-weight-bold);
	outline-offset: 2px;
	border-radius: 7px;

	&::placeholder {
		font-weight: 400;
		color: var(--color-gray-500);
	}
`

export const DateInput = ({ label, width = "254" }) => {
	const [displayValue, setDisplayValue] = useState(label)
	const toggleFocus = (e) => {
		e.currentTarget.querySelector("input").showPicker()
	}
	return (
		<DateWrapper
			style={{
				"--width": width + "px",
			}}
			onClick={toggleFocus}
		>
			<NativeDateInput
				type="date"
				onChange={(e) => {
					setDisplayValue(e.currentTarget.value)
				}}
			/>
			<PresentationalBit>
				<p>{displayValue}</p>
				<IconWrapper style={{ "--size": 24 + "px" }}>
					<SVG src={calander} />
				</IconWrapper>
			</PresentationalBit>
		</DateWrapper>
	)
}

const DateWrapper = styled.div`
	position: relative;
	width: var(--width);
	height: 45px;
`

const NativeDateInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	/* Allow the input to span the full height in Safari */
	-webkit-appearance: none;
`

const PresentationalBit = styled.div`
	display: flex;
	padding-right: 12px;
	justify-content: space-between;
	height: 100%;
	color: var(--color-gray-500);
	background-color: #fff;
	font-size: 1.2rem;
	padding-left: 16px;
	border-radius: 7px;
	padding-top: 14.5px;

	${NativeDateInput}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeDateInput}:hover + & {
		/* color: black; */
	}
`

const IconWrapper = styled.div`
	text-align: center;
	flex-basis: 0;
	margin-top: -5px;
	/* position: absolute; */
	/* top: 0;
	bottom: 5px;
	right: 15px; */
	/* margin: auto; */
	/* width: var(--size); */
	/* height: var(--size); */
	/* pointer-events: none; */
`
