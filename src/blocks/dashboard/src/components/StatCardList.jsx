import StatCard from "./StatCard"
import { categories } from "../data"
import usePhp from "../../usePhp"

export default function StatCardList() {
  const {scoreByCat, analyzedClasses} = usePhp()
  const data = categories.map(
    cat => (
      {...cat,
        score: scoreByCat[cat.name],
        history: analyzedClasses.map(cl => {
          return {
            createdAt: new Date(cl.createdAt).toISOString().slice(2, 10),
            score: cl[cat.name]
          }
        })
      }
    )
  )
          
  return (
    <>
      {data.map(d => (
        <StatCard
          key={d.name}
          {...d}
        />
      ))}
    </>
  )
}
