import SVG from "react-inlinesvg"
import styled from "styled-components"

export default function ObtainedTokens({ obtainedTokens }) {
  return (
    <Wrapper>
      <h3>Obtained Tokens</h3>
      <ul>
        {obtainedTokens.map((i) => (
          <li key={i.id}>
            {i.number} <Icon src={i.icon} color={i.color}></Icon>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  
  & h3 {
    font-weight: var()(--font-weight-bold-600);
    font-size: 1.7rem;
    color: var(--color-black);
  }

  & ul {
    display: flex;
    gap: 17.5px;
  }

  & li {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.4rem;
    font-weight: var()(--font-weight-bold-600);
    color: var(--color-black);

  }
`

const Icon = styled(SVG)`
  width: 27px;
  height: 27px;
  & path {
    fill: var(${(props) => "--color-" + props.color});
  }
`
