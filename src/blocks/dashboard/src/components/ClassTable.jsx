import styled from "styled-components"
import { getLocalDateTime } from "../utils"

export default function ClassTable({ myClass }) {
	// const { grade, course, subject, attendees, date, uploadedAt } = myClass
	const { course, title, createdAt, attendees, date, grade } = myClass
	const createdAtDate = getLocalDateTime(createdAt)
	const classDate = getLocalDateTime(date)
	return (
		<Dl>
			<Dt>Grade:</Dt>
			<Dd>{grade}</Dd>
			<Dt>Course:</Dt>
			<Dd>{course}</Dd>
			<Dt>Subject:</Dt>
			<Dd>{title}</Dd>
			<Dt>Attendees:</Dt>
			<Dd>{attendees}</Dd>
			<Dt>Date:</Dt>
			<Dd>
				<time dateTime={classDate.dateTime}>
					{classDate.localDateTime}
				</time>
			</Dd>
			<Dt>Uploaded at:</Dt>
			<Dd>
				<time dateTime={createdAtDate.datetime}>
					{createdAtDate.localDateTime}
				</time>
			</Dd>
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
