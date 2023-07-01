import { createContext } from "@wordpress/element"

const PhpContext = createContext()

export const PhpProvider = ({ children }) => {
	const root = document.getElementById("root")
	const assetDir = root.dataset.assetdir
	const logoutUrl = root.dataset.logouturl
	const scoreSummary = JSON.parse(
		document.getElementById("score-summary").innerHTML
	)
	const latestClasses = JSON.parse(
		document.getElementById("latest-classes").innerHTML
	)
	const allClasses = JSON.parse(
		document.getElementById("all-classes").innerHTML
	)
	const analyzedClasses = JSON.parse(
		document.getElementById("analyzed-classes").innerHTML
	)
	const scoreByCat = JSON.parse(
		document.getElementById("score-by-cat").innerHTML
	)

	return (
		<PhpContext.Provider value={{ assetDir, scoreSummary, latestClasses, allClasses, analyzedClasses, scoreByCat, logoutUrl }}>
			{children}
		</PhpContext.Provider>
	)
}

export default PhpContext
