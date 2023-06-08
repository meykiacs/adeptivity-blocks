import styled from "styled-components"
import GradeSelect from "./GradeSelect"
import { useDropzone } from "react-dropzone"
import { useState, useCallback } from "@wordpress/element"
import VideoThumbnail from "react-video-thumbnail"

import { grades } from "../data"

export default function UploadForm({ children }) {
	const [files, setFiles] = useState([])
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		setFiles((prev) => [
			...prev,
			...acceptedFiles.map((file) =>
				Object.assign(file, { preview: URL.createObjectURL(file) })
			),
		])
		// eslinit-disable-next-line
		console.log(rejectedFiles)
	}, [])

	const removeFile = (filename) => {
		setFiles((prevFiles) => prevFiles.filter((f) => f.name !== filename))
	}
	// console.log(files);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"video/*": [],
		},
		maxSize: 1000 * 1000 * 100,
	})

	return (
		<Form>
			<Video {...getRootProps()}>
				<input {...getInputProps({ name: "video" })} />
				{isDragActive ? (
					<P>Drop the files here</P>
				) : (
					<P>Drag and Drop some files here</P>
				)}
			</Video>
			{files.length > 0 ? (
				<ul>
					{files.map((file) => (
						<li key={file.name}>
							<div style={{ width: "50px", height: "50px" }}>
								<VideoThumbnail
									videoUrl={file.preview}
									thumbnailHandler={(thumbnail) => console.log(thumbnail)}
									width={120}
									height={80}
								/>
							</div>
							{/* <img src={file.preview} alt="preview" width={100} height={100} onLoad={() => URL.revokeObjectURL(file.preview)}/> */}
							<button type="button" onClick={() => removeFile(file.name)}>
								close
							</button>
						</li>
					))}
				</ul>
			) : (
				""
			)}
			<Control>
				<Label htmlFor="grade">Grade:</Label>
				<GradeSelect name="grade" id="grade" s={grades} />
			</Control>
			<Control>
				<Label htmlFor="course">Course:</Label>
				<TextInput type="text" id="course" name="course" />
			</Control>
			<Control>
				<Label htmlFor="subject">Subject:</Label>
				<TextInput type="text" id="subject" name="subject" />
			</Control>
			<Control>
				<Label htmlFor="attendees">Attendees:</Label>
				<TextInput type="number" id="attendees" name="attendees" />
			</Control>
			<Control>
				<Label htmlFor="date">Date:</Label>
				<TextInput type="date" id="date" name="date" />
			</Control>
			{children}
		</Form>
	)
}

const Form = styled.form`
	font-size: 1.6rem;
`
const Control = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 15px;
`

const TextInput = styled.input`
	border: none !important;
	width: 300px;
	height: 40px !important;
	padding-left: 16px;
	padding-right: 0;
	border-radius: 7px;
	font-size: 1.5rem;
	height: 35px;
	background-color: var(--color-gray-200);
	color: var(--color-text);
	overflow: hidden;
`

const Label = styled.label`
	color: var(--color-black);
	font-size: 1.4rem;
	font-weight: var(--font-weight-bold-700);
`

const Video = styled.div`
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
