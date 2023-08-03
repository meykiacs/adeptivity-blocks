import { useState } from "@wordpress/element"
import styled from "styled-components"

const UploadImageInput = ({setFile}) => {
	const [image, setImage] = useState(null)

	const handleChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]))
			setFile(e.target.files[0])
		}
	}

	return (
		<Wrapper>
			<CircleInput
				type="file"
				id="image-input"
				accept="image/*"
				onChange={handleChange}
			/>
			<CircleLabel htmlFor="image-input">
				{image ? (
					<img src={image} alt="uploaded" width="145" height="145" />
				) : (
					<CircleText>Click to Upload A New Picture</CircleText>
				)}
			</CircleLabel>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const CircleInput = styled.input`
	display: none;
`

const CircleLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 145px;
	height: 145px;
	border-radius: 50%;
	border: 3px solid var(--color-white);
	cursor: pointer;
	overflow: hidden;
	background-color: var(--color-gray-300);
	padding-left: 20px;
	padding-right: 20px;
`

const CircleText = styled.p`
	font-size: 1.4rem;
	text-align: center;
	line-height: 1.5;
`

export default UploadImageInput
