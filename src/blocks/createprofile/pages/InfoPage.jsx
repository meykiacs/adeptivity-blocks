import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input from "../components/Input"
import Button from "../components/Button"
import useWPContext from "../useWPContext"
import { PAGEINFO } from "../constants"

export default function InfoPage() {
	const { createProfileErrors, createProfileNonce, mode } = useWPContext()
	const fields = PAGEINFO[mode].fields
	return (
		<Main>
			<MaxWidthWrapper maxWidth={550}>
				<Heading>Create Account</Heading>

				{createProfileErrors.length > 0 &&
					createProfileErrors.map((er) => (
						<ErrorMessage key={er}>{er}</ErrorMessage>
					))}
				<Form method="post">
					{fields.map((f) => (
						<Input
							key={f.name}
							placeholder={f.label}
							label={f.label}
							type={f.type}
							name={f.name}
						/>
					))}
					<input
						type="hidden"
						name="create_profile_nonce"
						value={createProfileNonce}
					/>
					<input type="hidden" name="action" value="register" />
					<p style={{ fontSize: "1.25rem" }}>Already Have an Account?</p>

					<Button variant="base" size="large" type="submit">
						Create Account
					</Button>
				</Form>
			</MaxWidthWrapper>
		</Main>
	)
}

const Main = styled.main`
	background-color: var(--color-gray-200);
	flex: 1;
`

const Heading = styled.p`
	margin-top: 155px;
	text-align: center;
	font-weight: var(--font-weight-bold);
	font-size: 1.7rem;
	color: var(--color-text);
`

const Form = styled.form`
	margin-top: 33px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	align-items: center;
	height: 285px;
`

const ErrorMessage = styled.p`
	color: var(--color-white);
	margin-top: 20px;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: -10px;
`
