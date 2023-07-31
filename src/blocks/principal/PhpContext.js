import { createContext, useState, useEffect } from "@wordpress/element"

const PhpContext = createContext()


export const PhpProvider = ({ children, providerValues }) => {

	const [page, setPage] = useState("Teachers")
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [page])


	return (
		<PhpContext.Provider
			value={{
				...providerValues,
				page,
				setPage,
			}}
		>
			{children}
		</PhpContext.Provider>
	)
}

export default PhpContext
