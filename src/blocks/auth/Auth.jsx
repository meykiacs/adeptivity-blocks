import styled from "styled-components"
import { useState } from "@wordpress/element"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { WPProvider } from "./WPContext"
import Footer from "./components/Footer"
import LostPassword from "./pages/LostPassword"
import RP from "./pages/RP"
import Info from "./pages/Info"

export default function Auth({ providedValues }) {
	const [mode, setMode] = useState(providedValues.mode)
	return (
		<WPProvider providedValues={providedValues}>
			<Wrapper>
				{mode === "login" ? (
					<Login setMode={setMode} />
				) : mode === "lostpassword" ? (
					<LostPassword setMode={setMode} />
				) : mode === "rp" ? (
					<RP setMode={setMode} />
				) : mode === "info" ? (
					<Info setMode={setMode} />
				) : (
					<Register setMode={setMode} />
				)}
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
