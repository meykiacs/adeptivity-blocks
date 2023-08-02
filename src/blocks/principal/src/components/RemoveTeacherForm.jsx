import styled from "styled-components"
import Input, { TextArea } from "./Input"
import Button from "./Button"
import Select from "./Select"

const grades = [
	{ value: "pre-kindergarten", display: "Pre-Kindergarten" },
	{ value: "kindergarten", display: "Kindergarten" },
	{ value: "1st-grade", display: "1st Grade" },
	{ value: "2nd-grade", display: "2nd Grade" },
	{ value: "3rd-grade", display: "3rd Grade" },
	{ value: "4th-grade", display: "4th Grade" },
	{ value: "5th-grade", display: "5th Grade" },
	{ value: "6th-grade", display: "6th Grade" },
	{ value: "7th-grade", display: "7th Grade" },
	{ value: "8th-grade", display: "8th Grade" },
	{ value: "9th-grade", display: "9th Grade" },
	{ value: "10th-grade", display: "10th Grade" },
	{ value: "11th-grade", display: "11thGrade" },
	{ value: "12th-grade", display: "12th Grade" },
]

export default function RemoveTeacherForm() {
	return (
		<Form>
			<Select id="id" name="name" s={grades} width="257px" height="45px" placeholder="Choose a teacher" />
				<Input
					placeholder="Institute Id Code"
					label="Institute Id Code"
					type="text"
					name="institute"
					disabled
				/>
			<TextArea
				placeholder="Reason for removing the teacher"
				label="Reason for removing the teacher"
				name="reason"
				required
			/>
			<ButtonWrapper>
				<Button size="small" width="77" type="submit">
					Remove
				</Button>
				<Button size="small" width="67" variant="ghost">
					Cancel
				</Button>
			</ButtonWrapper>
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: flex-start;
	border-left: dashed 1px var(--color-gray-500);
  padding-left: 50px;
`

const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 23px;
`

