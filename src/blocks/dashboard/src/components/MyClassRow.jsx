import styled from "styled-components"
import { QUERIES } from "../constants"

export default function MyClassRow({ myClass }) {
	const { uploadedAt, grade, course, subject, attendees, date } = myClass
	return (
		<>
      <LessImportantTd>{uploadedAt}</LessImportantTd>
      <LeastImportantTd>{grade}</LeastImportantTd>
      <LeastImportantTd>{course}</LeastImportantTd>
      <Td>{subject}</Td>
      <LessImportantTd>{attendees}</LessImportantTd>
      <YetLeesImportantTd>{date}</YetLeesImportantTd>
      <Td>stuff</Td>
		</>
	)
}

const Td = styled.div`
	display: table-cell;
`

const LessImportantTd = styled(Td)`
    @media ${QUERIES.laptopAndSmaller} {
    display: none !important;
  }
`

const YetLeesImportantTd = styled(Td)`
  @media ${QUERIES.tabletAndSmaller} {
    display: none !important;
  }
`
const LeastImportantTd = styled(Td)`
  @media ${QUERIES.phoneAndSmaller} {
    display: none !important;
  }
`
