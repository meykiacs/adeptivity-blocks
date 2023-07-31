import { teachersList } from "../data"
import TeacherCard from "./TeacherCard"

export default function TeacherGrid() {
	return (
		<>
			{teachersList.map((t) => (
				<TeacherCard key={t.id} {...t} />
			))}
		</>
	)
}
