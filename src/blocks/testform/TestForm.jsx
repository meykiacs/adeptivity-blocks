import { useState, useRef } from "@wordpress/element"

export default function TestForm({ nonce }) {
	const [entry, setEntry] = useState("")
  const form = useRef(null)

	const uploadFile = async (file) => {
		const data = new FormData()
		data.append("file", file)
		for (let key of data.entries()) {
			console.log(key[0] + ", " + key[1])
		}
		const res = await fetch(
			"http://127.0.0.1:8000/?rest_route=/adeptivity/v1/video",
			{
				method: "POST",
				body: data,
				credentials: "same-origin",
				headers: {
					"X-WP-Nonce": nonce,
				},
			}
		)

		console.log(res)
		const result = await res.json()

		console.log(result)

		if (res.status === 201 && "entry" in result) {
			setEntry(result.entry)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = new FormData(form.current)
		console.log(data)
		const res = await fetch(
			"http://127.0.0.1:8000/?rest_route=/adeptivity/v1/lecture",
			{
				method: "POST",
				body: data,
		
				credentials: "same-origin",
				headers: {
					"X-WP-Nonce": nonce,
				},
			}
		)

		console.log(res)
		const result = await res.json()

		console.log(result)
	}

	return (
		<div>
			<form ref={form} onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label htmlFor="class_name">Class Name</label>
					<input type="text" id="class_name" name="class_name" />
				</div>
				<div>
					<label htmlFor="class_name">Number of Students</label>
					<input type="num" id="num_of_stu" name="num_of_stu" />
				</div>
				<div>
					<label htmlFor="course_name">Course Name</label>
					<input type="text" id="course_name" name="course_name" />
				</div>
				<input type="hidden" name="entry" value={entry} />
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
			<form onSubmit={(e) => e.preventDefault()}>
				<div>
					<label htmlFor="file">Video File</label>
					<input
						type="file"
						name="file"
						id="file"
						onChange={(e) => uploadFile(e.target.files[0])}
					/>
				</div>
			</form>
		</div>
	)
}
