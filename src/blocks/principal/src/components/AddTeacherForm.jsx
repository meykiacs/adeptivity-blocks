import styled from "styled-components"
import Input from "./Input"
import Button from "./Button"

export default function AddTeacherForm() {
	return (
		<Form>
			<Input
				placeholder="Username/Email"
				label="Username/Email"
				type="text"
				name="user"
				required
				// eslint-disable-next-line
				autoFocus
			/>
			<InstituteInputWrapper>
				<Input
					placeholder="Institute Id Code"
					label="Institute Id Code"
					type="text"
					name="institute"
					required
				/>
				<Button size="small" width="85" color="--color-primary-dark">
					Generate
				</Button>
			</InstituteInputWrapper>
			<Input
				placeholder="Teacher Phone No."
				label="Teacher Phone No."
				type="tel"
				name="institute"
				required
			/>
			<TextWrapper>
				<Span>*</Span>
				<P>
					Enter teacher e-mail address and cell phone number. The Id code will
					be sent to them for creating a profile. After they finished setting up
					their profile, you can follow their journey in your dashboard
				</P>
			</TextWrapper>
			<ButtonWrapper>

			<Button size="small" width="50" type="submit">
				Add
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
`

const InstituteInputWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`

const P = styled.p`
	font-size: 1.2rem;
	font-weight: var(--font-weight-medium);
	color: var(--color-text);
	padding-right: 150px;
`

const TextWrapper = styled.div`
	display: flex;
	gap: 11px;
	margin-top: 12.5px;
`

const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 23px;
`

const Span = styled.span`
	color: var(--color-accent);
	font-size: 1.2rem;
	font-weight: var(--font-weight-bold);
`
