import styled from "styled-components"
import CourseCardList from "./CourseCardList"
import Button from "./Buttons"
import Section from "./Section"
import SectionHeader from "./SectionHeader"

import { courses } from "../data"
import { QUERIES } from "../constants"

export default function MyCourses() {
	return (
		<Section>
			<SectionHeader hasRow title="My Courses">
				<SortCritera>Sorted by Date</SortCritera>
				<Change href="">Change</Change>
				<Button content="See All..." color="primary" variant='Link' to='journey#all-courses' />
			</SectionHeader>
			<CourseCardWrapper>
				<CourseCardList courses={courses} />
			</CourseCardWrapper>
		</Section>
	)
}

const SortCritera = styled.p`
	margin-right: 10px;
	font-size: 1.4rem;
	font-weight: var(--font-weight-lighter);
	margin-top: 3px;
`

const Change = styled.a`
	font-weight: var(--font-weight-lighter);
	color: var(--color-secondary);
	font-size: 1.2rem;
	text-transform: capitalize;
	display: inline-block;
	margin-right: 28px;
	margin-top: 3px;
`

const CourseCardWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 40px;

	@media ${QUERIES.laptopAndSmaller} {
		flex-wrap: wrap;
	}

	& > * {
		flex-basis: 200px;
		flex-grow: 1;
		max-width: 220px;
		@media ${QUERIES.laptopAndSmaller} {
			max-width: 250px;
		}
		@media ${QUERIES.tabletAndSmaller} {
			max-width: 220px;
		}
		@media ${QUERIES.phoneAndSmaller} {
			max-width: 300px;
		}
	}

	@media ${QUERIES.phoneAndSmaller} {
		justify-content: center;
	}
`
