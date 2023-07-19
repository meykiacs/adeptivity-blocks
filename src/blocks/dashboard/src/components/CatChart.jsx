import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

export default function CatChart({ data, color }) {
	data.reverse()
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={data}
				width={400}
				height={200}
				margin={{
					top: 5,
					right: 30,
					left: -20,
					bottom: 20,
				}}
			>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<XAxis dataKey="createdAt" tick={<CustomAxixTick />} tickSize={5} />
				<YAxis tick={false} type="number" domain={[0, 10]} />
				<Tooltip />
				<Line
					type="monotone"
					dataKey="score"
					stroke={`var(--color-${color})`}
					strokeWidth={5}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}

const CustomAxixTick = (props) => {
	const { x, y, payload } = props

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#666"
				transform="rotate(-90)"
			>
				{payload.value}
			</text>
		</g>
	)
}
