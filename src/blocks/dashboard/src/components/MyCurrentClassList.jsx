import { myClasses } from '../data'
import MyClassDetail from './MyClassDetail'

export default function MyCurrentClassList() {
	return (
		<>
			{ myClasses.map( ( myClass ) => (
				<MyClassDetail myClass={ myClass } key={ myClass.id } />
			) ) }
		</>
	)
}
