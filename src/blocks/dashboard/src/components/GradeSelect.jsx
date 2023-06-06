import {forwardRef} from '@wordpress/element'
import * as Select from "@radix-ui/react-select"
import classnames from "classnames"
import chevrondown from '../svgs/chevron-down.svg'
import SVG from 'react-inlinesvg'

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import styled from "styled-components"

export default function GradeSelect() {
  return (
    <Select.Root id="grade" name="grade">
      <SelectTrigger aria-label="grade">
        <Select.Value />
        <SelectIcon className="SelectIcon">
          <Icon src={chevrondown} />
        </SelectIcon>
      </SelectTrigger>
        <SelectContent className="SelectContent">
          <SelectScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport className="SelectViewport">
            <Select.Group>
              <StyledSelectItem value="pre-kindergarten">Pre-Kindergarten</StyledSelectItem>
              <StyledSelectItem value="kindergarten">Kindergarten</StyledSelectItem>
              <StyledSelectItem value="1st-grade">1st Grade</StyledSelectItem>
              <StyledSelectItem value="2nd-grade">2nd Grade</StyledSelectItem>
              <StyledSelectItem value="3rd-grade">3rd Grade</StyledSelectItem>
              <StyledSelectItem value="5th-grade">5th Grade</StyledSelectItem>
              <StyledSelectItem value="6th-grade">6th Grade</StyledSelectItem>
              <StyledSelectItem value="7th-grade">7th Grade</StyledSelectItem>
              <StyledSelectItem value="8th-grade">8th Grade</StyledSelectItem>
              <StyledSelectItem value="9th-grade">9th Grade</StyledSelectItem>
              <StyledSelectItem value="10th-grade">10th Grade</StyledSelectItem>
              <StyledSelectItem value="11th-grade">11th Grade</StyledSelectItem>
              <StyledSelectItem value="12th-grade">12th Grade</StyledSelectItem>
            </Select.Group>

          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
    </Select.Root>
  )
}

const SelectItem = forwardRef(
  function SelectItem({ children, className, ...props }, forwardedRef) {
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
  }
)

const SelectTrigger = styled(Select.Trigger)`
  border: none !important;
  display: flex;
  width: 300px;
  height: 40px !important;
  padding-left: 16px;
  padding-right: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  font-size: 1.5rem;
  height: 35px;
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
  height: 40px;
  line-height: 0;
`

const SelectIcon = styled(Select.Icon)`
  width: 40px;
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