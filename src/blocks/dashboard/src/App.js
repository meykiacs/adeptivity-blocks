import styled from "styled-components"

import PageMenu from "./components/PageMenu"
import TopMenu from "./components/TopMenu"
import Home from "./components/Home"
import Classes from "./components/Classes"
import Journey from "./components/Journey"
import Toolshed from "./components/Toolshed"
import { QUERIES } from "./constants"
import { PhpProvider } from "../PhpContext"
import { useState, useEffect } from "@wordpress/element"

function App({ providerValues }) {
	const [page, setPage] = useState("Home")
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [page])

	return (
		<PhpProvider providerValues={providerValues}>
			{/* <GlobalStyles /> */}
			<Wrapper>
				<SideWrapper>
					<PageMenu setPage={setPage} page={page} />
				</SideWrapper>
				<MidWrapper>
					<TopWrapper>
						<TopMenu />
					</TopWrapper>
					<MainWrapper>
						{page === "Home" && <Home setPage={setPage} />}
						{page === "Classes" && <Classes />}
						{page === "Journey" && <Journey />}
						{page === "Toolshed" && <Toolshed />}
					</MainWrapper>
				</MidWrapper>
				<Side />
			</Wrapper>
		</PhpProvider>
	)
}

export default App
const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	isolation: isolate;
`
const MidWrapper = styled.div`
	max-width: 1136px;
	flex-grow: 1;
`

const SideWrapper = styled.header`
	flex: 1;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: row-reverse;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`
const Side = styled.div`
	flex: 1;
`

const MainWrapper = styled.main`
	padding-left: 50px;
	padding-right: 50px;

	@media ${QUERIES.tabletAndSmaller} {
		padding-right: 30px;
		padding-left: 30px;
	}
`

const TopWrapper = styled.header`
	padding-left: 0;
	padding-right: 0;
`
