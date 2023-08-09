import usePhp from "../../usePhp"
import TeacherCard from "./TeacherCard"

export default function TeacherGrid() {
	const {teachers} = usePhp()
	console.log(teachers)
	return (
		<>
			{teachers.map((t) => (
				<TeacherCard key={t.id} {...t} />
			))}
		</>
	)
}
