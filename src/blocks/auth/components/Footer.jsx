import styled from "styled-components"
import logo from "../svg/footer-logo.svg"
import SVG from "react-inlinesvg"
import Social from "./Social"
import { BREAKPOINTS, QUERIES } from "../constants"

export default function Footer() {
  return (
    <Wrapper>
      <footer>
        <LogoWrapper href="google.com">
          <Logo src={logo} />
        </LogoWrapper>
        <P>&copy; 2023 Adeptivity creative solutions, Inc</P>
        <Social />
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-gray-900);
  border-top: 2.5px var(--color-white) solid;

  & footer {
    display: flex;
    align-items: baseline;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 34px;
    padding-top: 70px;
    gap: 15px;

    @media ${QUERIES.laptopAndSmaller} {
      max-width: ${`${BREAKPOINTS.tablet - 100}px`};
    }

    @media ${QUERIES.tabletAndSmaller} {
      max-width: ${`${BREAKPOINTS.phone - 100}px`};
      display: block;
    }
  }
`

const P = styled.p`
  color: var(--color-white);
  font-size: 1.2rem;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    transform: translateY(-25px);
  }
`

const Logo = styled(SVG)`
  transform: translateY(7px);
  @media ${QUERIES.tabletAndSmaller} {
    transform: translateY(0px);
    width: 150px;
    height: auto;
  }
`

const LogoWrapper = styled.a`
  display: block;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    transform: translateY(-40px);
  }
`
