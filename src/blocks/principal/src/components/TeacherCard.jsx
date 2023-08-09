import styled from "styled-components"
import SVG from "react-inlinesvg"
import TeacherChart from "./TeacherChart"
// import { getDateAsMonthYear } from "../utils"
import avatar from "../svgs/teacher/01.svg"

export default function TeacherCard({
	family,
	name,
	dep,
	timeEmployed,
	scoreHistory,
}) {
	return (
		<Wrapper>
			<Row>
				<AvatarContainer>
					<Avatar src={avatar} />
				</AvatarContainer>
				<div>
					<Name style={{ "--weight": "var(--font-weight-bold" }}>
						{family + ", " + name}
					</Name>
					<TextWrapper>
						<div>
							<P style={{ "--weight": "var(--font-weight-medium" }}>
								Expert in:
							</P>
							{/* <P style={{ "--weight": "var(--font-weight-medium" }}>
								Teacher ID:
							</P> */}
							<P style={{ "--weight": "var(--font-weight-medium" }}>
								Years Experience:
							</P>
						</div>
						<div>
							<P style={{ "--weight": "var(--font-weight-bold" }}>
								{dep}
							</P>
							{/* <P style={{ "--weight": "var(--font-weight-bold" }}>{id}</P> */}
							<P style={{ "--weight": "var(--font-weight-bold" }}>
								{/* {getDateAsMonthYear(new Date(timeEmployed))} */}
								{timeEmployed}
							</P>
						</div>
					</TextWrapper>
				</div>
			</Row>
			<TeacherChart scoreHistory={scoreHistory} />
		</Wrapper>
	)
}

const Wrapper = styled.article`
	position: relative;
	background-color: var(--color-gray-200);
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 24px;
	padding-bottom: 24px;
`

const Row = styled.div`
	display: flex;
	border-radius: 7px;
	gap: 14px;
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
const TextWrapper = styled.div`
	display: flex;
	gap: 0 20px;
`

const P = styled.p`
	font-weight: var(--weight);
	font-size: 1.3rem;
	line-height: 1.45;
`

const Name = styled.p`
	font-weight: var(--weight);
	font-size: 1.3rem;
	line-height: 1.45;
`
