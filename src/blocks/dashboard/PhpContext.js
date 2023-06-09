import { createContext } from "react"

const PhpContext = createContext()

export const PhpProvider = ({ children }) => {
	const root = document.getElementById("root")
	const assetDir = root.dataset.assetdir

	return <PhpContext.Provider value={{assetDir}}>{children}</PhpContext.Provider>
}

export default PhpContext
