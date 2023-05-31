import Uploaded from './Uploaded'
import { uploadedClasses } from '../data'

export default function UploadedClassList() {
	return (
		<>
			{ uploadedClasses.map( ( uploadedClass ) => (
				<Uploaded { ...uploadedClass } key={ uploadedClass.id } />
			) ) }
		</>
	)
}
