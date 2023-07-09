import SVG from "react-inlinesvg"
import styled from "styled-components"
import usePhp from "../../usePhp"
import {categories as cats} from '../data'

export default function CourseCard({
	image,
	title,
	categories,
	withDuration,
	url,
}) {
	const category = categories[0] ?? categories[0]
	const color = category ? category : 'white'
	const icon =  category ? cats.find(c => c.name === category).icon : null
	const { assetDir } = usePhp()
	const img = image === false ? assetDir + "img/course-placeholder.png" : image
	return (
		<Wrapper>
			<ImageWrapper color={color} href={url} target="_blank">
				<Image src={img} alt={`${title} image`} />
			</ImageWrapper>
			<Footer>
				{withDuration ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
						}}
					>
						<Title>{title}</Title>
						<p style={{ fontSize: "12px", marginTop: "auto" }}>
							Duration: 4 hours
						</p>
					</div>
				) : (
					<Title>{title}</Title>
				)}
				<Icon color={color} src={icon} />
			</Footer>
		</Wrapper>
	)
}

const Wrapper = styled.article`
	background-color: var(--color-gray-200);
	padding: 12px 10px;
	border-radius: 7px;
	overflow: hidden;
`

const ImageWrapper = styled.a`
	border: 1px solid var(${(props) => "--color-" + props.color});
	border-radius: 7px;
	overflow: hidden;
	line-height: 0;
	display: block;
	height: 150px;

`

const Image = styled.img`
	filter: grayscale(1);
	width: 100%;
	height: 100%;
`

const Footer = styled.footer`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
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
