import { render,  } from "@wordpress/element"
import LoginForm from "./LoginForm"

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("adeptivity-loginform")

render(<LoginForm />, root)
})