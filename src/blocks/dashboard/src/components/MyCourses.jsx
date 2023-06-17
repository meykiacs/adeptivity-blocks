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
				<Button href="" content="See All..." color="primary" />
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
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 40px;

	@media ${QUERIES.laptopAndSmaller} {
    flex-wrap: wrap;
    /* justify-content: center; */
  }
  
  @media ${QUERIES.tabletAndSmaller} {
    /* justify-content: center; */
  }
  
  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
  }
`
