import styled from "styled-components"
import SVG from "react-inlinesvg"
import TeacherChart from "./TeacherChart"
import { getDateAsMonthYear } from "../utils"
export default function TeacherCard({
	avatar,
	family,
	name,
	dep,
	qualification,
	id,
	timeEmployed,
}) {
	return (
		<Wrapper>
			<Row>
				<AvatarContainer>
					<Avatar src={avatar} />
				</AvatarContainer>
				<TextWrapper flex="start">
					<P style={{ "--weight": "var(--font-weight-bold-700" }}>
						{family + ", " + name}
					</P>
					<P style={{ "--weight": "var(--font-weight-medium" }}>
						Dep., Qualification:
					</P>
					<P style={{ "--weight": "var(--font-weight-medium" }}>Teacher ID:</P>
					<P style={{ "--weight": "var(--font-weight-medium" }}>
						Employed Since:
					</P>
				</TextWrapper>
				<TextWrapper flex="end">
					<P>
						<br />
					</P>
					<P style={{ "--weight": "var(--font-weight-bold-700" }}>
						{dep + ", " + qualification}
					</P>
					<P style={{ "--weight": "var(--font-weight-bold-700" }}>{id}</P>
					<P style={{ "--weight": "var(--font-weight-bold-700" }}>
						{getDateAsMonthYear(new Date(timeEmployed))}
					</P>
				</TextWrapper>
			</Row>
			<TeacherChart />
		</Wrapper>
	)
}

const Wrapper = styled.article`
	position: relative;
	background-color: var(--color-gray-100);
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 24px;
	padding-bottom: 24px;
`

const Row = styled.div`
	display: flex;
	border-radius: 7px;
	gap: 14px;
	justify-content: space-between;
	margin-bottom: 30px;
	justify-content: flex-start;
`

const AvatarContainer = styled.div`
	width: 70px;
	height: 75px;
	text-align: center;
	background-color: var(--color-white);
	position: relative;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
`

const Avatar = styled(SVG)`
	width: 54px;
	height: 54px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const TextWrapper = styled.div``

const P = styled.p`
	font-weight: var(--weight);
	font-size: 1.3rem;
	line-height: 1.45;
`
