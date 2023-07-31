import React from "react"
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	ReferenceLine,
} from "recharts"

import { scoreHistory } from "../data"
scoreHistory.reverse()

import styled from "styled-components"

export default function TeacherChart() {
	return (
		<Wrapper>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={scoreHistory}
					style={{ backgroundColor: "white" }}
					margin={{ bottom: 25, left: 20, top: 20 }}
				>
					<XAxis
						dataKey="date"
						angle={-90}
						textAnchor="end"
						tick={{ fontSize: "75%", color: "black" }}
						tickFormatter={(value) => value.slice(2)}
					/>
					<YAxis domain={[0, 10]} orientation="right" />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="divergent"
						stroke="var(--color-divergent)"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="lateral"
						stroke="var(--color-lateral)"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="aesthetic"
						stroke="var(--color-aesthetic)"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="system"
						stroke="var(--color-system)"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="inspirational"
						stroke="var(--color-inspirational)"
						strokeWidth={3}
					/>
					<ReferenceLine
						x={scoreHistory[0].date}
						stroke="black"
						strokeWidth={1}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 210px;
`
