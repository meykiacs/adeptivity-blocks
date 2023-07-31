import { useContext } from "@wordpress/element"
import PhpContext from "./PhpContext"

const usePhp = () => {
	const context = useContext(PhpContext)
	if (context === undefined) {
		throw new Error("usePhp must be used inside a PhpProvider")
	}

	return context
}

export default usePhp
