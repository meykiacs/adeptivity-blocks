import { render } from "react-dom"
import Auth from "./components/Auth"

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("adeptivity-auth")
	render(<Auth />, root)
})
