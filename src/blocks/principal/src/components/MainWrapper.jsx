import usePhp from "../../usePhp"
import { QUERIES } from "../constants"
import styled from "styled-components"
import Teachers from "../pages/Teachers"
import Manage from "../pages/Manage"

export default function MainWrapper() {
	const { page } = usePhp()
	return (
		<Main>
			{page === "Teachers" && <Teachers />}
			{page === "Manage" && <Manage />}
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
