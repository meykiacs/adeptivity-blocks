import usePhp from "../../usePhp"
import Home from "./Home"
import Classes from "./Classes"
import Journey from "./Journey"
import Toolshed from "./Toolshed"
import { QUERIES } from "../constants"
import styled from "styled-components"

export default function MainWrapper() {
	const { page } = usePhp()
	return (
		<Main>
			{page === "Home" && <Home />}
			{page === "Classes" && <Classes />}
			{page === "Journey" && <Journey />}
			{page === "Toolshed" && <Toolshed />}
		</Main>
	)
}

const Main = styled.main`
	padding-left: 50px;
	padding-right: 50px;

	@media ${QUERIES.tabletAndSmaller} {
		padding-right: 30px;
		padding-left: 30px;
	}
`
