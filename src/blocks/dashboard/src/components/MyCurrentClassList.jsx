// import { myClasses } from "../data"
import MyClassDetail from "./MyClassDetail"
import usePhp from '../../usePhp'

export default function MyCurrentClassList() {
	const {allClasses}  = usePhp()
	return (
		<>
			{allClasses.map((myClass) => (
				<MyClassDetail myClass={myClass} key={myClass.id} />
			))}
		</>
	)
}
