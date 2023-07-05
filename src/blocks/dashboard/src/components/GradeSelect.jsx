import { forwardRef } from "@wordpress/element"
import * as Select from "@radix-ui/react-select"
import classnames from "classnames"
import chevrondown from "../svgs/chevron-down.svg"
import SVG from "react-inlinesvg"

import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons"
import styled from "styled-components"

export default function GradeSelect({ id, name, s, height, width, onValueChange, value }) {
	return (
		<Select.Root id={id} name={name} onValueChange={onValueChange} value={value}>
			<SelectTrigger aria-label={name} height={height} width={width}>
				<Select.Value />
				<SelectIcon className="SelectIcon" width={width} height={height}>
					<Icon src={chevrondown} width={width} height={height} />
				</SelectIcon>
			</SelectTrigger>
			<Select.Portal>
				<SelectContent className="SelectContent">
					<SelectScrollUpButton className="SelectScrollButton">
						<ChevronUpIcon />
					</SelectScrollUpButton>
					<SelectViewport className="SelectViewport">
						<Select.Group>
							{s.map((i) => (
								<StyledSelectItem value={i.value} key={i.value} disabled={i.disabled}>
									{i.display}
								</StyledSelectItem>
							))}
						</Select.Group>
					</SelectViewport>
					<SelectScrollDownButton className="SelectScrollButton">
						<ChevronDownIcon />
					</SelectScrollDownButton>
				</SelectContent>
			</Select.Portal>
		</Select.Root>
	)
}

const SelectItem = forwardRef(function SelectItem(
	{ children, className, ...props },
	forwardedRef
) {
	return (
		<Select.Item
			className={classnames("SelectItem", className)}
			{...props}
			ref={forwardedRef}
		>
			<Select.ItemText>{children}</Select.ItemText>
			<SelectItemIndicator className="SelectItemIndicator">
				<CheckIcon />
			</SelectItemIndicator>
		</Select.Item>
	)
})

const SelectTrigger = styled(Select.Trigger)`
	border: none !important;
	display: flex;
	width: ${(props) => (props.width ? props.width : "300px")};
	height: ${(props) => (props.height ? props.height : "40px")} !important;
	padding-left: 16px;
	padding-right: 0;
	align-items: center;
	justify-content: space-between;
	border-radius: 7px;
	font-size: 1.5rem;
	background-color: var(--color-gray-200);
	color: var(--color-text);
	overflow: hidden;

	/* box-shadow: 0 2px 10px black; */
	&:hover {
		/* background-color: var(--color-gray-1000); */
	}
	&:focus {
		/* box-shadow: 0 0 0 2px black; */
	}
`

const Icon = styled(SVG)`
	width: 100%;
	height: ${(props) => (props.height ? props.height : "40px")};
	line-height: 0;
`

const SelectIcon = styled(Select.Icon)`
	width: ${(props) => (props.height ? props.height : "40px")};
	line-height: 0;
	&:hover {
		background-color: var(--color-gray-300);
	}
`

const SelectContent = styled(Select.Content)`
	overflow: hidden;
	background-color: white;
	border-radius: 7px;
	/* box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2); */
`

const SelectViewport = styled(Select.Viewport)`
	/* padding: 5px; */
	padding-top: 5px;
`

const StyledSelectItem = styled(SelectItem)`
	font-size: 1.4rem;
	color: var(--color-text);
	border-radius: 3px;
	display: flex;
	align-items: center;
	height: 32px;
	padding-left: 25px;
	position: relative;
	user-select: none;
	&[data-highlighted] {
		outline: none;
		background-color: var(--color-primary);
		color: var(--color-white);
	}

	&[data-disabled] {
		color: var(--color-gray-500);
		/* background-color: black; */
	}
`

const SelectItemIndicator = styled(Select.ItemIndicator)`
	position: absolute;
	left: 0;
	width: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`

const SelectScrollUpButton = styled(Select.ScrollUpButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: white;
	color: violet;
	cursor: default;
`
const SelectScrollDownButton = styled(Select.ScrollDownButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: white;
	color: violet;
	cursor: default;
`
