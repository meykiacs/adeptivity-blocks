import styled from "styled-components"
import SVG from "react-inlinesvg"
import usePhp from "../../usePhp"

export default function StatCard({
  scoreHistory,
  currentScore,
  groupIcon,
  groupColor,
  courseDuration,
  courseThumbnail,
  courseName,
  groupTitle,
}) {
	const assetDir = usePhp()
	const image = courseThumbnail === "" ? assetDir + "img/course-placeholder.png" : courseThumbnail

  return (
    <Article>
      <Header>
        <Icon src={groupIcon} color={groupColor} />
        <h3>{groupTitle}</h3>
      </Header>
      <Wrapper>
        <Main color={groupColor}>
          <Chart data={scoreHistory} />
        </Main>
        <Aside>
          <p>{currentScore}/10</p>
          <ScoreBar>
            <InnerDiv score={currentScore} color={groupColor} />
          </ScoreBar>
        </Aside>
      </Wrapper>
      <Footer>
        <p>Based of your Stats We recommend this Course:</p>
        <CourseWrapper>
          <ImageWrapper color={groupColor}>
            <Image src={image} alt="course image" />
          </ImageWrapper>
          <CourseDetails>
            <h3>{courseName}</h3>
            <p>Duration: {courseDuration} hourse</p>
          </CourseDetails>
        </CourseWrapper>
      </Footer>
    </Article>
  )
}

const Article = styled.article``

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 11.7px;
  margin-bottom: 20px;

  & h3 {
    font-weight: var(--font-weight-medium);
    font-size: 2.3rem;
  }
`

const Icon = styled(SVG)`
  height: 32px;
  width: 32px;
  & path {
    fill: var(${(props) => "--color-" + props.color});
  }
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-start;
  gap: 45px;
  align-items: flex-start;
`

const Main = styled.div`
  width: 285px;
  height: 180px;
  background-color: var(${(props) => "--color-" + props.color});
`
const Aside = styled.aside`
  transform: translateY(-17px);
  & p {
    font-size: 1.2rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-900);
    transform: translate(-3px, -23px);
  }
`

const ScoreBar = styled.div`
  width: 15px;
  border-radius: 4px;
  height: 180px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--color-gray-200);
`

const InnerDiv = styled.div`
  background-color: var(${(props) => "--color-" + props.color});
  height: ${(props) => parseInt(props.score) * 10 + "%"};
`

const Footer = styled.footer`
  & p {
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
    font-size: 1.6rem;
    margin-bottom: 13px;
  }
`

const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6.6px;

  & h3 {
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
    color: var(--color-text);
  }
  
  & p{
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
    font-size: 1.2rem;
  }
`

const ImageWrapper = styled.div`
  border: 3px solid var(${(props) => "--color-" + props.color});
  border-radius: 7px;
  overflow: hidden;
  line-height: 0;
  flex-basis: 171px;
  height: auto;
  flex-shrink: 0;
  flex-grow: 0;
  
`

const Image = styled.img`
  filter: grayscale(1);
  width: 100%;
`

const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

const Chart = styled.div``
