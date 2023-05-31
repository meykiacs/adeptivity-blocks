export default function MyClassRow( { myClass } ) {
	const { uploadedAt, grade, course, subject, attendees, date } = myClass
	return (
		<>
			<td>{ uploadedAt }</td>
			<td>{ grade }</td>
			<td>{ course }</td>
			<td>{ subject }</td>
			<td>{ attendees }</td>
			<td>{ date }</td>
		</>
	)
}
