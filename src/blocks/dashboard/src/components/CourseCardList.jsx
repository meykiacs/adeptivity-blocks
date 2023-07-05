import CourseCard from "./CourseCard"

export default function CourseCardList({
	withDuration,
	sortCoursesBy,
	coursesInfo
}) {
	let key = "id"
	if (sortCoursesBy === "newest") {
		key = "id"
	} else if (sortCoursesBy === "oldest") {
		key = "url"
	} else {
		key = "title"
	}

	return (
		<>
			{coursesInfo.map((course) => (
				<CourseCard {...course} key={course[key]} withDuration={withDuration} />
			))}
		</>
	)
}
