import SVG from "react-inlinesvg"
import styled from "styled-components"
import usePhp from "../../usePhp"

export default function CourseCard({ img, title, icon, color }) {
	const assetDir = usePhp()
	const image = img === "" ? assetDir + "img/course-placeholder.png" : img
	return (
		<Wrapper>
			<ImageWrapper color={color}>
				<Image src={image} alt="course image" />
			</ImageWrapper>
			<Footer>
				<Title>{title}</Title>
				<Icon color={color} src={icon} />
			</Footer>
		</Wrapper>
	)
}

const Wrapper = styled.article`
	background-color: var(--color-gray-200);
	padding: 12px 10px;
	border-radius: 7px;
	/* flex: 1; */
	flex-basis: 220px;
	overflow: hidden;
`

const ImageWrapper = styled.div`
	border: 1px solid var(${(props) => "--color-" + props.color});
	border-radius: 7px;
	overflow: hidden;
`

const Image = styled.img`
	filter: grayscale(1);
	width: 100%;
`

const Footer = styled.footer`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h3`
	font-size: 1.7rem;
	font-weight: var(--font-weight-medium);
	line-height: 1.45;
`

const Icon = styled(SVG)`
	height: 32px;
	width: 32px;
	& path {
		fill: var(${(props) => "--color-" + props.color});
	}
	flex-shrink: 0;
`
