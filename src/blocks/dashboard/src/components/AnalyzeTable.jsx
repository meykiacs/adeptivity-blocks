import styled from 'styled-components'
import { myClasses } from '../data'
import MyClassRow from './MyClassRow'

export default function AnalyzeTable() {
	return (
		<Table>
			<Thead>
				<Tr>
					<th>Uploaded At</th>
					<th>Grade</th>
					<th>Course</th>
					<th>Subject</th>
					<th>Attendees</th>
					<th>Date</th>
					<th>Analyzed Score</th>
				</Tr>
			</Thead>
			<tbody>
				{ myClasses.map( ( myClass ) => (
					<Tr key={ myClass.id }>
						<MyClassRow myClass={ myClass } />
					</Tr>
				) ) }
			</tbody>
		</Table>
	)
}

const Table = styled.table`
	display: flex;
	flex-direction: column;
	padding-left: 8px;
	padding-right: 8px;
	gap: 16px;
`

const Thead = styled.thead`
	background-color: var( --color-decorative );
`

const Tr = styled.tr`
	display: flex;
	padding-left: 25px;
	padding-right: 25px;
	justify-content: space-between;
`
