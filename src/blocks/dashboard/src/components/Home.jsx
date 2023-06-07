import MyCourses from "./MyCourses"
import MyLatestClasses from "./MyLatestClasses"
import Progress from "./Progress"
import ToolsInMyArsenal from "./ToolsInMyArsenal"

export default function Home() {
  return (
    <>
      <Progress />
      <MyCourses />
      <MyLatestClasses />
      <ToolsInMyArsenal />
    </>
  )
}
