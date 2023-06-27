import { createContext } from "@wordpress/element"

const PhpContext = createContext()

export const PhpProvider = ({ children }) => {
	const root = document.getElementById("root")
	const assetDir = root.dataset.assetdir
	const scoreSummary = JSON.parse(
		document.getElementById("score-summary").innerHTML
	)
	const latestClasses = JSON.parse(
		document.getElementById("latest-classes").innerHTML
	)

	return (
		<PhpContext.Provider value={{ assetDir, scoreSummary, latestClasses }}>
			{children}
		</PhpContext.Provider>
	)
}

export default PhpContext
