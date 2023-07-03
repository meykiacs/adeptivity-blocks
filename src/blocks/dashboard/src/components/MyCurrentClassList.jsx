// import { myClasses } from "../data"
import MyClassDetail from "./MyClassDetail"
import usePhp from "../../usePhp"

export default function MyCurrentClassList() {
	const { allClasses } = usePhp()
	return (
		<>
			{allClasses.length === 0 ? (
				<p style={{ fontSize: "1.6rem" }}>
					You have not submitted any classes yet.
				</p>
			) : (
				allClasses.map((myClass) => (
					<MyClassDetail myClass={myClass} key={myClass.id} />
				))
			)}
		</>
	)
}
