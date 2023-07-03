import styled from "styled-components"
import MyClassRow from "./MyClassRow"
import { QUERIES } from "../constants"
import usePhp from "../../usePhp"

export default function AnalyzeTable() {
	const { analyzedClasses } = usePhp()
	return (
		<Section>
			<Header>
				<LessImportantDiv>Uploaded At</LessImportantDiv>
				<LeastImportantDiv>Grade</LeastImportantDiv>
				<LeastImportantDiv>Course</LeastImportantDiv>
				<div>Subject</div>
				<LessImportantDiv>Attendees</LessImportantDiv>
				<YetLeastImportantDiv>Date</YetLeastImportantDiv>
				<div>Analyzed Score</div>
			</Header>
			{analyzedClasses.map((myClass, index) => (
				<Row key={myClass.id} row={index}>
					<MyClassRow myClass={myClass} />
				</Row>
			))}
		</Section>
	)
}

const Section = styled.section`
	display: table;
	width: 100%;
	padding-left: 8px;
	padding-right: 8px;
	/* & > *:nth-child(n) {
    transform: translateY(calc(n*16px));
  } */
`

const Header = styled.header`
	display: table-row;
	background-color: var(--color-decorative);
	& div {
		display: table-cell;
		padding: 25px;
		font-size: 1.2rem;
		font-weight: var(--font-weight-bold-700);
	}
	& div:first-child {
		border-radius: 7px 0 0 7px;
	}
	& div:last-child {
		border-radius: 0 7px 7px 0px;
	}
`

const Row = styled.div`
	display: table-row;
	background-color: var(--color-gray-200);
	transform: translateY(${(props) => (1 + parseInt(props.row)) * 16}px);
	& div {
		display: table-cell;

		padding: 25px;
		font-size: 1.4rem;
		font-weight: var(--font-weight-medium);
	}
	& div:first-child {
		border-radius: 7px 0 0 7px;
	}
	& div:last-child {
		border-radius: 0 7px 7px 0px;
	}
`

const LessImportantDiv = styled.div`
	@media ${QUERIES.laptopAndSmaller} {
		display: none !important;
	}
`

const YetLeastImportantDiv = styled.div`
	@media ${QUERIES.tabletAndSmaller} {
		display: none !important;
	}
`
const LeastImportantDiv = styled.div`
	@media ${QUERIES.phoneAndSmaller} {
		display: none !important;
	}
`
