import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import infoIcon from '../svgs/info.svg'
import SVG from 'react-inlinesvg'
import { Tooltip } from "react-tooltip"
import { QUERIES } from "../constants"

const cet = 'With participating in our online community you will earn some tokens. For each comment you get a token of your choosing and answering to a survey also gives you 1 complete set of tokens.'

const det = 'There are charities that work with youth and we like them. with every donation you will receive a complete set of tokens. You can find their list in your profile.'

export default function TIMASection() {
  return (
    <Section>
      <SectionHeader title="Tools In My Arsenal" />
      <Wrapper>
        <Main>
          <p>
            There are 4 types of tools that can be used to help you grow as a
            creative teacher. The most important one is a creativity course that
            you pass. For each course you will receive tokens that can be spend
            to gain access to the other 3 types of tool. This part is more fun!
          </p>
          <p>The remaining 3 Tools are:</p>
          <ul>
            <li>Games & Puzzles</li>
            <li>Be active in the online community <Icon src={infoIcon} data-tooltip-id="cet" data-tooltip-content={cet} />
            <StyledTooltip id="cet" />
            </li>
            <li>Donate Money <Icon data-tooltip-id='det' data-tooltip-content={det} src={infoIcon} />
            <StyledTooltip id="det" />
            </li>
          </ul>
          <p>Have Fun!</p>
        </Main>
        <Aside>
          <p>Ways to earn More Tokens:</p>
          <ul>
            <li>Learn a Course</li>
            <li>Be active in the online community</li>
            <li>Donate Money</li>
          </ul>
        </Aside>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }

`

const Main = styled.div`
  flex: 2;
  flex-grow: 2;
  font-size: 1.5rem;
  font-weight: var(--font-weight-light);
  padding-right: 80px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: 20px;
  }
  
  & > p {
    margin-bottom: 5px;
  }

  & > ul {
    margin-bottom: 5px;
  }

  & li {
    list-style: initial;
    transform: translateX(23px);
  }
`

const Aside = styled.aside`
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  font-weight: var(--font-weight-medium);
  font-size: 1.4rem;
  padding-left: 20px;
  border-left: dashed 1px var(--color-gray-500);

  & > p {
    margin-bottom: 17.5px;
  }

  & li {
    list-style: initial;
    transform: translateX(17px);
    font-size: 1.2rem;
    font-weight: var(--font-weight-light);
    line-height: 2;
  }
`

const Icon = styled(SVG)`
  margin-bottom: -1px;
`

const StyledTooltip = styled(Tooltip)`
  background-color: var(--color-gray-1000);
  color: var(--color-black);
  font-size: 1.1rem;
  font-weight: var(--font-weight-light);
  max-width: 200px;
  padding: 10px;
  border-radius: 5px;
`