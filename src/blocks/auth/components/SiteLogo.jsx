import styled from "styled-components"
import logo from "../svg/adeptivity-logo.svg"
import SVG from "react-inlinesvg"

export default function SiteLogo() {
  return (
    <Icon src={logo} />
  )
}

const Icon = styled(SVG)`

`
