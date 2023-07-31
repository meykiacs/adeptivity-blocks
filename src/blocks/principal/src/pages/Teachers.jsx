import styled from "styled-components"
import Section from "../components/Section"
import SectionHeader from "../components/SectionHeader"
import { QUERIES } from "../constants"
import TeacherGrid from "../components/TeacherGrid"
import { oxygen, soil, water, kick, sun } from "../data"
import SVG from "react-inlinesvg"
import { Tooltip } from "react-tooltip"

export default function Teachers() {
	return (
		<Section>
			<SectionHeader title="Currently Employed Teachers" />
			<Wrapper>
				<Main>
					<TeacherGrid />
				</Main>
				<Aside>
					<h3>{"Stat's indicators"}</h3>
					<ul>
						<li>
							<Icon
								src={oxygen}
								style={{ "--color": "var(--color-divergent)" }}
								data-tooltip-id="diver"
								data-tooltip-content="Divergent Thinking"
							/>
							<StyledTooltip id="diver" />
							<span>Divergent Thinking</span>
						</li>
						<li>
							<Icon
								src={sun}
								style={{ "--color": "var(--color-lateral)" }}
								data-tooltip-id="lat"
								data-tooltip-content="Lateral Thinking"
							/>
							<StyledTooltip id="lat" />
							<span>Lateral Thinking</span>
						</li>
						<li>
							<Icon
								src={water}
								style={{ "--color": "var(--color-aesthetic)" }}
								data-tooltip-id="aes"
								data-tooltip-content="Aesthetic Thinking"
							/>
							<StyledTooltip id="aes" />
							<span>Aesthetic Thinking</span>
						</li>
						<li>
							<Icon
								src={soil}
								style={{ "--color": "var(--color-system)" }}
								data-tooltip-id="sys"
								data-tooltip-content="System Thinking"
							/>
							<StyledTooltip id="sys" />
							<span>System Thinking</span>
						</li>
						<li>
							<Icon
								src={kick}
								style={{ "--color": "var(--color-inspirational)" }}
								data-tooltip-id="insp"
								data-tooltip-content="Inspirational Thinking"
							/>
							<StyledTooltip id="insp" />
							<span>Inspirational Thinking</span>
						</li>
					</ul>
				</Aside>
			</Wrapper>
		</Section>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px 30px;

	@media ${QUERIES.laptopAndSmaller} {
		flex-direction: column;
		gap: 30px 15px;
	}
`

const Main = styled.div`
	flex: 5;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	& > * {
		flex: 1;
		max-width: 395px;
		min-width: 300px;
		@media ${QUERIES.phoneAndSmaller} {
			max-width: 80vw;
		}
	}

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: center;
	}
	@media ${QUERIES.tabletAndSmaller} {
		gap: 30px 10px;
	}
`

const Aside = styled.aside`
	flex: 1;
	font-weight: var(--font-weight-medium);
	font-size: 1.4rem;
	padding-left: 20px;
	border-left: dashed 1px var(--color-gray-500);
	& > h3 {
		font-size: 1.5rem;
		font-weight: var(--font-weight-medium);
		margin-bottom: 20px;
	}

	@media ${QUERIES.laptopAndSmaller} {
		order: -1;
		padding-left: 0;
		border-left: none;
		& > ul {
			display: flex;
			gap: 20px;
		}

		margin-bottom: 15px;
	}

	& li {
		font-size: 1.3rem;
		font-weight: var(--font-weight-medium);
		line-height: 2;
		@media ${QUERIES.laptopAndSmaller} {
			& span {
				display: none;
			}
		}
	}
`

const Icon = styled(SVG)`
	width: 16px;
	height: 16px;
	margin-right: 16px;
	transform: translateY(2.5px);
	& > path {
		fill: var(--color);
	}

	@media ${QUERIES.laptopAndSmaller} {
		margin-right: 2.5px;
	}
`

const StyledTooltip = styled(Tooltip)`
	background-color: var(--color-gray-1000);
	color: var(--color-black);
	font-size: 1.1rem;
	font-weight: var(--font-weight-light);
	max-width: 200px;
	padding: 10px;
	border-radius: 5px;
`
