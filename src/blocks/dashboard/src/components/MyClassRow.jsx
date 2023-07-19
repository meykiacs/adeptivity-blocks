import styled from "styled-components"
import { QUERIES } from "../constants"
import ScoreChart from "./ScoreChart"

export default function MyClassRow({ myClass }) {
	// const { uploadedAt, grade, course, subject, attendees, date } = myClass
	const { createdAt, course, title, attendees } = myClass
	const date = new Date(createdAt + ' UTC')
	// const newDate =  new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
	return (
		<>
			<LessImportantTd>{date.toLocaleString()}</LessImportantTd>
			<LeastImportantTd>Not Specified</LeastImportantTd>
			<LeastImportantTd>{course}</LeastImportantTd>
			<Td>{title}</Td>
			<LessImportantTd>{attendees}</LessImportantTd>
			<YetLeesImportantTd>Not Specified</YetLeesImportantTd>
			<Td>
				<ScoreChart myClass={myClass} />
			</Td>
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
