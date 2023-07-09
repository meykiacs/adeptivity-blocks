import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import GradeSelect from "./GradeSelect"
import CourseCardList from "./CourseCardList"
import { QUERIES } from "../constants"
import { useState, useEffect, useMemo } from "@wordpress/element"
import usePhp from "../../usePhp"

export default function AllCourses() {
	const { sortCoursesBy, setSortCoursesBy, coursesInfo, show, setShow } =
		usePhp()
	const [filter, setFilter] = useState("available")

	const [courses, setCourses] = useState(
		useMemo(() => coursesInfo, [coursesInfo])
	)

	useEffect(() => {
		if (filter === "in-progress")
			setCourses(coursesInfo.filter((c) => c.status === "in-progress"))
		if (filter === "available")
			setCourses(coursesInfo.filter((c) => c.status === "not-started"))
		if (filter === "passed")
			setCourses(coursesInfo.filter((c) => c.status === "completed"))
	}, [coursesInfo, filter])

	console.log(show)
	useEffect(() => {
		if (show === "all-courses") {
			const ref = document.getElementById("all-courses")
			console.log(ref)
			setTimeout(() => {
				ref.scrollIntoView({ behavior: "smooth" })
				setShow("default")
			}, 200)
		}
	}, [])

	const handleChange = (event) => {
		setFilter(event.target.value)
	}

	return (
		<Section id="all-courses">
			<SectionHeader hasRow title="All Courses">
				<form>
					<fieldset>
						<input
							type="radio"
							name="filter"
							value="in-progress"
							id="in-progress"
							checked={filter === "in-progress"}
							onChange={handleChange}
						/>
						<Label htmlFor="in-progress">In Progress</Label>
						<input
							type="radio"
							name="filter"
							value="passed"
							id="passed"
							checked={filter === "passed"}
							onChange={handleChange}
						/>
						<Label htmlFor="passed">Already Passed</Label>
						<input
							type="radio"
							name="filter"
							value="available"
							id="available"
							checked={filter === "available"}
							onChange={handleChange}
						/>
						<Label htmlFor="available">Available</Label>
					</fieldset>
				</form>
				<SortedBy>
					<Fieldset>
						<Label htmlFor="order">Sorted by:</Label>
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
					</Fieldset>
				</SortedBy>
			</SectionHeader>
			<CourseCardWrapper>
				<CourseCardList
					withDuration
					sortCoursesBy={sortCoursesBy}
					coursesInfo={courses}
				/>
			</CourseCardWrapper>
		</Section>
	)
}

const Label = styled.label`
	font-size: 1.4rem;
`

const SortedBy = styled.form`
	margin-left: auto;

	@media ${QUERIES.tabletAndSmaller} {
		margin-right: auto;
		margin-left: 20px;
	}

	@media ${QUERIES.phoneAndSmaller} {
		margin-right: auto;
		margin-left: revert;
	}
`

const Fieldset = styled.fieldset`
	display: flex;
	gap: 6px;
`

const CourseCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 33px;
	& > * {
		flex-basis: 180px;
		flex-grow: 1;
		max-width: 200px;

		@media ${QUERIES.phoneAndSmaller} {
			max-width: 280px;
		}
	}

	@media ${QUERIES.phoneAndSmaller} {
		justify-content: center;
	}
`
