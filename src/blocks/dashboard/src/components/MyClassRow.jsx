import styled from "styled-components"
import { QUERIES } from "../constants"
import ScoreChart from "./ScoreChart"
import { getLocalDateTime } from "../utils"

export default function MyClassRow({ myClass }) {
	const { createdAt, course, title, attendees, grade, date } = myClass
	const createdAtDate = getLocalDateTime(createdAt)
	return (
		<>
			<LessImportantTd>
				<time dateTime={createdAtDate.dateTime}>
					{createdAtDate.localDateTime}
				</time>
			</LessImportantTd>
			<LeastImportantTd>{grade}</LeastImportantTd>
			<LeastImportantTd>{course}</LeastImportantTd>
			<Td>{title}</Td>
			<LessImportantTd>{attendees}</LessImportantTd>
			<YetLeesImportantTd><time>{date}</time></YetLeesImportantTd>
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
