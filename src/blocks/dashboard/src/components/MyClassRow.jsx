import styled from "styled-components"

export default function MyClassRow({ myClass }) {
	const { uploadedAt, grade, course, subject, attendees, date } = myClass
	return (
		<>
			<Td>{uploadedAt}</Td>
			<Td>{grade}</Td>
			<Td>{course}</Td>
			<Td>{subject}</Td>
			<Td>{attendees}</Td>
			<Td>{date}</Td>
			<Td>stuff</Td>
		</>
	)
}

const Td = styled.div`
	display: table-cell;
`
