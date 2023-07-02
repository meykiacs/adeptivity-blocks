export default function TestForm({ nonce }) {
	const uploadFile = async (file) => {
		const data = new FormData()
		data.append("file", file)
		for (let key of data.entries()) {
			console.log(key[0] + ", " + key[1])
		}
		const res = await fetch("http://127.0.0.1:8000/?rest_route=/adeptivity/v1/video", {
			method: "POST",
			body: data,
			credentials: "same-origin",
			headers: {
				"X-WP-Nonce": nonce,
			},
		})

		console.log(res.json())
	}

	return (
		<div>
			<form>
				<div>
					<label htmlFor="class_name">Class Name</label>
					<input type="text" id="class_name" name="class_name" />
				</div>
				<div>
					<label htmlFor="file">Video File</label>
					<input
						type="file"
						name="file"
						id="file"
						onChange={(e) => uploadFile(e.target.files[0])}
					/>
				</div>
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
		</div>
	)
}
