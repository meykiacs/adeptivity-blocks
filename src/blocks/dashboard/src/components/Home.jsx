import MyCourses from "./MyCourses"
import MyLatestClasses from "./MyLatestClasses"
import Progress from "./Progress"
import ToolsInMyArsenal from "./ToolsInMyArsenal"

export default function Home({ setPage }) {
	return (
		<>
			<Progress />
			<MyCourses setPage={setPage} />
			<MyLatestClasses />
			<ToolsInMyArsenal />
		</>
	)
}
