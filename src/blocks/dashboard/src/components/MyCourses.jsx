import styled from "styled-components"
import CourseCardList from "./CourseCardList"
import Button, { UnstyledButton } from "./Buttons"
import Section from "./Section"
import SectionHeader from "./SectionHeader"

import { QUERIES } from "../constants"
import { useState } from "@wordpress/element"
import GradeSelect from "./GradeSelect"
import usePhp from "../../usePhp"

export default function MyCourses() {
	const { sortCoursesBy, setSortCoursesBy, coursesInfo, setPage, setShow } = usePhp()
	const courses = coursesInfo.slice(0, 4)
	const [changeSort, setChangeSort] = useState(false)
	return (
		<Section>
			<SectionHeader hasRow title="My Courses">
				{!changeSort ? (
					<>
						<SortCritera>Sorted by Date</SortCritera>
						<Change onClick={() => setChangeSort(true)}>Change</Change>
					</>
				) : (
					<div style={{ marginRight: "20px" }}>
						<GradeSelect
							value={sortCoursesBy}
							name="order"
							id="order"
							s={[
								{
									value: "last-viewed",
									display: "Last Viewed",
									disabled: true,
								},
								{ value: "newest", display: "Newest" },
								{ value: "oldest", display: "Oldest" },
								{ value: "title", display: "Title" },
								{ value: "duration", display: "Duration", disabled: true },
							]}
							height="25px"
							width="110px"
							onValueChange={(v) => {
								setSortCoursesBy(v)
							}}
						/>
					</div>
				)}
				<Button
					content="See All..."
					color="primary"
					onClick={() => {
						setPage("Journey")
						setShow('all-courses')
					}}
				/>
			</SectionHeader>
			<CourseCardWrapper>
				<CourseCardList coursesInfo={courses} />
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

const Change = styled(UnstyledButton)`
	font-weight: var(--font-weight-lighter);
	color: var(--color-secondary);
	font-size: 1.2rem;
	text-transform: capitalize;
	display: inline-block;
	margin-right: 28px;
	margin-top: 3px;
	text-decoration: underline;
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
