import { forwardRef } from "@wordpress/element"
import * as S from "@radix-ui/react-select"
import classnames from "classnames"
import chevrondown from "../svgs/chevron-down.svg"
import SVG from "react-inlinesvg"

import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons"
import styled from "styled-components"

export default function Select({ id, name, s, height, width, onValueChange, value, placeholder }) {
	return (
		<S.Root id={id} name={name} onValueChange={onValueChange} value={value}>
			<SelectTrigger aria-label={name} height={height} width={width}>
				<S.Value placeholder={placeholder}  />
				<SelectIcon className="SelectIcon" width={width} height={height}>
					<Icon src={chevrondown} width={width} height={height} />
				</SelectIcon>
			</SelectTrigger>
			<S.Portal>
				<SelectContent className="SelectContent">
					<SelectScrollUpButton className="SelectScrollButton">
						<ChevronUpIcon />
					</SelectScrollUpButton>
					<SelectViewport className="SelectViewport">
						<S.Group>
							{s.map((i) => (
								<StyledSelectItem value={i.value} key={i.value} disabled={i.disabled}>
									{i.display}
								</StyledSelectItem>
							))}
						</S.Group>
					</SelectViewport>
					<SelectScrollDownButton className="SelectScrollButton">
						<ChevronDownIcon />
					</SelectScrollDownButton>
				</SelectContent>
			</S.Portal>
		</S.Root>
	)
}

const SelectItem = forwardRef(function SelectItem(
	{ children, className, ...props },
	forwardedRef
) {
	return (
		<S.Item
			className={classnames("SelectItem", className)}
			{...props}
			ref={forwardedRef}
		>
			<S.ItemText>{children}</S.ItemText>
			<SelectItemIndicator className="SelectItemIndicator">
				<CheckIcon />
			</SelectItemIndicator>
		</S.Item>
	)
})

const SelectTrigger = styled(S.Trigger)`
	border: none !important;
	display: flex;
	width: ${(props) => (props.width ? props.width : "300px")};
	height: ${(props) => (props.height ? props.height : "40px")} !important;
	padding-left: 16px;
	padding-right: 0;
	align-items: center;
	justify-content: space-between;
	border-radius: 7px;
	font-size: 1.2rem;
	background-color: var(--color-gray-200);
	color: var(--color-gray-700);
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

const SelectIcon = styled(S.Icon)`
	width: ${(props) => (props.height ? props.height : "40px")};
	line-height: 0;
	&:hover {
		background-color: var(--color-gray-300);
	}
`

const SelectContent = styled(S.Content)`
	overflow: hidden;
	background-color: white;
	border-radius: 7px;
	/* box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2); */
`

const SelectViewport = styled(S.Viewport)`
	/* padding: 5px; */
	padding-top: 5px;
`

const StyledSelectItem = styled(SelectItem)`
	font-size: 1.2rem;
	color: var(--color-gray-700);
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

const SelectItemIndicator = styled(S.ItemIndicator)`
	position: absolute;
	left: 0;
	width: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`

const SelectScrollUpButton = styled(S.ScrollUpButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: white;
	color: violet;
	cursor: default;
`
const SelectScrollDownButton = styled(S.ScrollDownButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: white;
	color: violet;
	cursor: default;
`
