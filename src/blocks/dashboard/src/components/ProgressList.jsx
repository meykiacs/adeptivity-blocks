import { useEffect, useRef } from "react"
import ProgressBar from "./ProgressBar"

export default function ProgressList(props) {
	const { bars, setTotalScore, setMaxScore } = props

	function arrayEqual(a1, a2) {
		if (a1.length !== a2.length) return false
		for (let i = 0; i < a1.length; i++) {
			if (a1[i].score !== a2[i].score) {
				return false
			}
		}
		return true
	}

	const barsRef = useRef(bars)
	if (!arrayEqual(bars, barsRef.current)) {
		barsRef.current = bars
	}

	useEffect(() => {
		const [totalScore, maxScore] = bars.reduce(
			(a, b) => [a[0] + parseInt(b.score), a[1] + 10],
			[0, 0]
		)
		setTotalScore(totalScore)
		setMaxScore(maxScore)
	}, [setTotalScore, setMaxScore, bars])

	return (
		<>
			{bars.map((bar) => (
				<ProgressBar {...bar} key={bar.id} />
			))}
		</>
	)
}
