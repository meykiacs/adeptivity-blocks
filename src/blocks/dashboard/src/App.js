import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/300.css'

import Progress from './components/Progress'
import styled from 'styled-components'
import MyCourses from './components/MyCourses'
import MyLatestClasses from './components/MyLatestClasses'
import ToolsInMyArsenal from './components/ToolsInMyArsenal'
import AnalyzedClasses from './components/AnalyzedClasses'

import PageMenu from './components/PageMenu'
import TopMenu from './components/TopMenu'
import MyCurrentClasses from './components/MyCurrentClasses'
import GlobalStyles from './Global'

function App({imageDir}) {
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
					<Progress imageDir={imageDir} />
					<MyCourses imageDir={imageDir} />
					<MyLatestClasses />
					<ToolsInMyArsenal imageDir={imageDir} />
					<MyCurrentClasses />
					<AnalyzedClasses />
				</MainWrapper>
			</MidWrapper>
			<Side />
			<GlobalStyles />
		</Wrapper>
	)
}

export default App
const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
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
