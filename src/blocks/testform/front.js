import { render } from "@wordpress/element"
import TestForm from "./TestForm"

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("adeptivity-testform")
	const nonce = root.dataset.nonce
	render(<TestForm nonce={nonce} />, root)
})
