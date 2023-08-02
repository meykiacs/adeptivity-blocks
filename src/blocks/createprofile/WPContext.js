import { createContext, useState } from "@wordpress/element"

const WPContext = createContext()

export const WPProvider = ({ children, providedValues }) => {
	const providedMode = providedValues.mode

	const [mode, setMode] = useState(providedMode)
	return (
		<WPContext.Provider value={{...providedValues, mode, setMode}}>{children}</WPContext.Provider>
	)
}

export default WPContext
