import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"

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
            <li>Tips To Teach</li>
            <li>Arts & Crafts projects</li>
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
`

const Main = styled.div`
  flex: 2;
  flex-grow: 2;
  font-size: 1.5rem;
  font-weight: var(--font-weight-light);
  padding-right: 80px;

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
