import styled from "styled-components"

import PageMenu from "./components/PageMenu"
import TopMenu from "./components/TopMenu"

import { QUERIES } from "./constants"
import { PhpProvider } from "../PhpContext"
import MainWrapper from "./components/MainWrapper"

function App({ providerValues }) {
	return (
		<PhpProvider providerValues={providerValues}>
			<Wrapper>
				<SideWrapper>
					<PageMenu />
				</SideWrapper>
				<MidWrapper>
					<TopWrapper>
						<TopMenu />
					</TopWrapper>
					<MainWrapper />
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

const TopWrapper = styled.header`
	padding-left: 0;
	padding-right: 0;
`
