import CourseCard from './CourseCard'
import { courses } from '../data'

export default function CourseCardList({imageDir}) {
	return (
		<>
			{ courses.map( ( course ) => (
				<CourseCard imageDir={imageDir} { ...course } key={ course.id } />
			) ) }
		</>
	)
}
