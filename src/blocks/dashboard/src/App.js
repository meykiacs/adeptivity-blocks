import styled from "styled-components"

import PageMenu from "./components/PageMenu"
import TopMenu from "./components/TopMenu"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Classes from "./components/Classes"
import Journey from "./components/Journey"
import Toolshed from "./components/Toolshed"

function App() {
	return (
		<Wrapper>
			<SideWrapper>
				<PageMenu />
			</SideWrapper>
			<MidWrapper>
				<TopWrapper>
					<TopMenu />
				</TopWrapper>
				<MainWrapper>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="classes" element={<Classes />} />
						<Route path='journey' element={<Journey />} />
						<Route path='toolshed' element={<Toolshed />} />
					</Routes>
				</MainWrapper>
			</MidWrapper>
			<Side />
		</Wrapper>
	)
}

export default App
const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	isolation: isolate;
`
const MidWrapper = styled.div``

const SideWrapper = styled.header`
	flex: 1;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: row-reverse;
`
const Side = styled.div`
	flex: 1;
`

const MainWrapper = styled.main`
	max-width: 1136px;
	/* margin-left: auto; */
	/* margin-right: auto; */
	padding-left: 50px;
	padding-right: 50px;
`

const TopWrapper = styled.header`
	padding-left: 0;
	padding-right: 0;
	max-width: 1136px;
`
