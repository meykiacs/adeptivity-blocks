import styled from "styled-components"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Input, { DateInput } from "../components/Input"
import Button from "../components/Button"
import useWPContext from "../useWPContext"
import { PAGEINFO, QUERIES } from "../constants"

export default function InfoPage() {
	const { createProfileErrors, createProfileNonce, mode } = useWPContext()
	const fields = PAGEINFO[mode].fields
	return (
		<Main>
			<MaxWidthWrapper maxWidth={539}>
				<Heading>Create Account</Heading>

				{createProfileErrors.length > 0 &&
					createProfileErrors.map((er) => (
						<ErrorMessage key={er}>{er}</ErrorMessage>
					))}
				<Form method="post">
					{fields.map((f) =>
						f.type === "date" ? (
							<DateInput key={f.id} label={f.label} width="257" />
						) : (
							<Input
								width="257"
								key={f.name}
								placeholder={f.label}
								label={f.label}
								type={f.type}
								name={f.name}
							/>
						)
					)}
					<input
						type="hidden"
						name="create_profile_nonce"
						value={createProfileNonce}
					/>
					<input type="hidden" name="action" value="createprofile" />
					<ButtonWrapper>
						<Button size="small" width="110" type="submit">
							Save Profile
						</Button>
						<Button size="small" width="67" variant="ghost">
							Cancel
						</Button>
					</ButtonWrapper>
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

	@media ${QUERIES.tabletAndSmaller} {
		margin-top: 50px;
	}
`

const Form = styled.form`
	margin-top: 33px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px 25px;
	align-items: center;
	/* height: 285px; */
	justify-content: space-between;

	& > label:nth-child(5) {
		width: 100%;
		> input {
			width: 100%;
		}
	}

	& > label:nth-child(6),
	label:nth-child(7),
	label:nth-child(8) {
		width: 160px;
		> input {
			width: 100%;
		}

		@media ${QUERIES.phoneAndSmaller} {
			width: 100%;
		}
	}

	@media ${QUERIES.tabletAndSmaller} {
		height: initial;
		margin-bottom: 50px;
	}

	@media ${QUERIES.phoneAndSmaller} {
		& label {
			width: 100%;
		}
		& input {
			width: 100%;
		}

		& div:first-of-type {
			width: 100% !important;
		}

		padding-left: 25px;
		padding-right: 25px;
	}
`

const ErrorMessage = styled.p`
	color: var(--color-white);
	margin-top: 20px;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: -10px;
`

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 23px;
`
