import styled from "styled-components"
import GradeSelect from "./GradeSelect"
import { useDropzone } from "react-dropzone"
import { useState, useCallback, useEffect, useRef } from "@wordpress/element"
import VideoThumbnail from "react-video-thumbnail"
import { QUERIES } from "../constants"
import { grades } from "../data"
import usePhp from "../../usePhp"

// const MAX_FILES = 1

export default function UploadForm({ children }) {
	const { nonce, videoEndpoint, lectureEndpoint } = usePhp()
	const [entry, setEntry] = useState("")
	const [files, setFiles] = useState([])
	const [uploading, setUploading] = useState(false)
	const form = useRef(null)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = new FormData(form.current)
		data.append('entry', entry)
		console.log(data)
		const res = await fetch(
			lectureEndpoint,
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

	const deleteVideo = async () => {
		if (entry !== "") {
			const res = await fetch(videoEndpoint, {
				method: "DELETE",
				body: JSON.stringify({ entry }),
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					"X-WP-Nonce": nonce,
				},
			})

			console.log(res)
			const jsonData = await res.json()
			console.log(jsonData)

			if (res.status === 200 && "entry" in jsonData) {
				setFiles([])
				setEntry("")
			}
		}
	}

	useEffect(() => {
		const uploadFirstFile = async () => {
			const data = new FormData()
			if (!files.length) return

			data.append("file", files[0])

			setUploading(true)
			const res = await fetch(
				videoEndpoint,
				// "http://127.0.0.1:8000/?rest_route=/adeptivity/v1/video",
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
			const jsonData = await res.json()
			console.log(jsonData)
			setUploading(false)

			if (res.status === 201 && "entry" in jsonData) {
				setEntry(jsonData.entry)
			}
		}

		uploadFirstFile()
	}, [files, nonce, videoEndpoint])

	const onDrop = useCallback((acceptedFiles) => {
		// (acceptedFiles, rejectedFiles) => {
		setFiles((prev) => [
			...prev,
			...acceptedFiles.map((file) =>
				Object.assign(file, { preview: URL.createObjectURL(file) })
			),
		])
		// console.log(rejectedFiles)
	}, [])

	// const removeFile = (filename) => {
	// 	setFiles((prevFiles) => prevFiles.filter((f) => f.name !== filename))
	// }
	// console.log(files);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"video/*": [],
		},
		maxSize: 1000 * 1000 * 100,
		maxFiles: 1,
	})

	return (
		<Div>
			<Div>
				{uploading && <H2>Uploading Your Video... </H2>}
				<VideoDiv {...getRootProps()}>
					<input {...getInputProps({ name: "video" })} />
					{isDragActive ? (
						<P>Drop the files here</P>
					) : (
						<P>Drag and Drop some files here</P>
					)}
				</VideoDiv>
				{files.length > 0 && !uploading ? (
					<ul>
						{files.map((file) => (
							<Li key={file.name}>
								<div style={{ width: "70px", height: "50px" }}>
									<VideoThumbnail
										videoUrl={file.preview}
										thumbnailHandler={(thumbnail) => console.log(thumbnail)}
										// width={70}
										// height={50}
									/>
								</div>
								{/* <img src={file.preview} alt="preview" width={100} height={100} onLoad={() => URL.revokeObjectURL(file.preview)}/> */}
								<CloseButton
									type="button"
									onClick={() => deleteVideo()}
								></CloseButton>
							</Li>
						))}
					</ul>
				) : (
					""
				)}
			</Div>
			<Form ref={form} onSubmit={e => handleSubmit(e)}>
				<Control>
					<Label htmlFor="grade">Grade:</Label>
					<GradeSelect name="grade" id="grade" s={grades} />
				</Control>
				<Control>
					<Label htmlFor="course">Course:</Label>
					<TextInput type="text" id="course" name="course_name" required />
				</Control>
				<Control>
					<Label htmlFor="subject">Subject:</Label>
					<TextInput type="text" id="subject" name="class_name" required />
				</Control>
				<Control>
					<Label htmlFor="attendees">Attendees:</Label>
					<TextInput type="number" id="attendees" name="num_of_stu" required />
				</Control>
				<Control>
					<Label htmlFor="date">Date:</Label>
					<TextInput type="date" id="date" name="date" />
				</Control>
				{children}
			</Form>
		</Div>
	)
}

const Div = styled.div`
	font-size: 1.6rem;
`
const Form = styled.form`
	font-size: 1.6rem;
`
const Control = styled.div`
	display: flex;
	align-items: baseline;
	margin-bottom: 15px;
`

const TextInput = styled.input`
	border: none !important;
	flex-basis: 300px;
	height: 40px !important;
	padding-left: 16px;
	padding-right: 0;
	border-radius: 7px;
	font-size: 1.5rem;
	height: 35px;
	background-color: var(--color-gray-200);
	color: var(--color-text);
	overflow: hidden;
	@media ${QUERIES.phoneAndSmaller} {
		flex-shrink: 1;
	}
`

const Label = styled.label`
	color: var(--color-black);
	font-size: 1.4rem;
	font-weight: var(--font-weight-bold-700);
	flex-basis: 90px;
	flex-shrink: 0;
`

const VideoDiv = styled.div`
	width: 200px;
	height: 150px;
	margin-left: auto;
	margin-right: auto;
	background-color: var(--color-gray-200);
	padding: 15px 16px;
	margin-bottom: 23px;
	border-radius: 7px;
	box-shadow: 0px 0px 7px rgba(32, 34, 36, 0.25);
`

const P = styled.p`
	cursor: pointer;
	border: dashed 2px var(--color-gray-300);
	border-radius: 17px;
	font-size: 1.4rem;
	font-weight: var(--font-weight-medium);
	line-height: 1.9;
	color: var(--color-gray-500);
	text-align: center;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	&:hover: {
		text-decoration: none;
	}
`

const CloseButton = styled.button`
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	position: relative;
	width: 20px;
	height: 20px;
	cursor: pointer;

	&:hover {
		color: var(--color-primary);
	}

	&:before,
	&:after {
		content: "";
		position: absolute;
		top: (20px - 1px) / 2;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--color-black);
		border-radius: 1px;
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}
`

const Li = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding-bottom: 10px;

	& img {
		width: 100%;
		height: auto;
	}
`

const H2 = styled.h2`
	font-size: 2rem;
	color: var(--color-error);
	text-align: center;
	margin-bottom: 50px;
`
