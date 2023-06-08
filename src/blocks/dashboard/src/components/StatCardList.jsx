import { courseOfGroups } from "../data"
import StatCard from "./StatCard"

export default function StatCardList() {
  return (
    <>
      {courseOfGroups.map((c) => (
        <StatCard
          key={c.id}
          scoreHistory={c.group.history}
          currentScore={c.group.score}
          groupIcon={c.group.icon}
          groupColor={c.group.color}
          courseDuration={c.duration}
          courseName={c.name}
          courseThumbnail={c.thumbnail}
          groupTitle={c.group.title}
        />
      ))}
    </>
  )
}
