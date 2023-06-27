import Uploaded from "./Uploaded"
// import { uploadedClasses } from "../data"
import usePhp from "../../usePhp";

export default function UploadedClassList() {
	const {latestClasses} = usePhp();
	return (
		<>
			{latestClasses.map((uploadedClass) => (
				<Uploaded {...uploadedClass} key={uploadedClass.id} />
			))}
		</>
	)
}
