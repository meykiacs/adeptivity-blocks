import styled from "styled-components"

export default function ClassTable({ myClass }) {
	// const { grade, course, subject, attendees, date, uploadedAt } = myClass
	const { course, title, createdAt, attendees } = myClass
	const date = new Date(createdAt + ' UTC')

	return (
		<Dl>
			<Dt>Grade:</Dt>
			<Dd>Not specified</Dd>
			<Dt>Course:</Dt>
			<Dd>{course}</Dd>
			<Dt>Subject:</Dt>
			<Dd>{title}</Dd>
			<Dt>Attendees:</Dt>
			<Dd>{attendees}</Dd>
			<Dt>Date:</Dt>
			<Dd>Not Specified</Dd>
			<Dt>Uploaded at:</Dt>
			<Dd>{date.toLocaleString()}</Dd>
		</Dl>
	)
}

const Dl = styled.dl`
	display: flex;
	flex-wrap: wrap;
	max-width: 300px;
	align-items: baseline;
	margin-top: -15px;
`

const Dt = styled.dt`
	color: var(--color-black);
	flex-basis: 80px;
	font-weight: var(--font-weight-bold-700);
	font-size: 1.2rem;
	line-height: 2.4;
	margin-right: 15px;
`

const Dd = styled.dd`
	flex-basis: 200px;
	font-size: 1.5rem;
	font-weight: var(--font-weight-medium);
	line-height: 2.4;
`
