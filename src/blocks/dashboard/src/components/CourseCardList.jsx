import CourseCard from './CourseCard'
import { courses } from '../data'

export default function CourseCardList() {
	return (
		<>
			{ courses.map( ( course ) => (
				<CourseCard { ...course } key={ course.id } />
			) ) }
		</>
	)
}
