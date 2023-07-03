import CourseCard from "./CourseCard"

export default function CourseCardList({ courses, withDuration }) {
	return (
		<>
			{courses.map((course) => (
				<CourseCard {...course} key={course.id} withDuration={withDuration} />
			))}
		</>
	)
}
