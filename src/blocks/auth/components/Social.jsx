import  styled from "styled-components"
import SVG from 'react-inlinesvg'
import whatsapp from '../svg/whatsapp.svg'
import facebook from '../svg/facebook.svg'
import linkedin from '../svg/linkedin.svg'
import twitter from '../svg/twitter.svg'
import { QUERIES } from "../constants"

export default function Social() {
  return (
    <Wrapper>
      <a href="www.google.com"><SVG src={whatsapp} /></a>
      <a href="www.google.com"><SVG src={facebook} /></a>
      <a href="www.google.com"><SVG src={linkedin} /></a>
      <a href="www.google.com"><SVG src={twitter} /></a>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
  justify-content: center;

  @media ${QUERIES.tabletAndSmaller} {
    &  SVG {
      width: 44px;
      height: 44px;
    }

    transform: translateY(12px);
  }

`