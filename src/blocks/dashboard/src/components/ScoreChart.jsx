import { Bar, Cell, BarChart } from "recharts"
import { categories } from "../data"
import styled from "styled-components"

export default function ScoreChart({ myClass }) {
	const data = categories.map((cat) => ({ ...cat, score: myClass[cat.name] }))

	return (
		<StyledBarChart data={data} width={40} height={30} style={{ padding: "0" }}>
			<Bar dataKey="score">
				{data.map((entry) => (
					<Cell key={entry.name} fill={`var(--color-${entry.name})`} />
				))}
			</Bar>
		</StyledBarChart>
	)
}

const StyledBarChart = styled(BarChart)`
	transform: scale(2.5) translateX(10px);
	& svg {
		/* transform: scale(1.5); */
	}
`
