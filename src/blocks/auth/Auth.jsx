import { useState } from "@wordpress/element"
import styled from "styled-components"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Footer from "./components/Footer"

export default function Auth() {
  const [mode] = useState("login")
  return (
    <Wrapper>
      {mode === "login" ? <Login /> : <Register />}
      <Footer />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
`