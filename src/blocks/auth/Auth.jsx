import { useState } from "@wordpress/element"
import styled from "styled-components"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Footer from "./components/Footer"
import { WPProvider } from "./WPContext"

export default function Auth({ providedValues }) {
	const [mode] = useState("login")
	return (
		<WPProvider providedValues={providedValues}>
			<Wrapper>
				{mode === "login" ? <Login /> : <Register />}
				<Footer />
			</Wrapper>
		</WPProvider>
	)
}

const Wrapper = styled.div`
	flex-direction: column;
	display: flex;
	min-height: 100vh;
`
