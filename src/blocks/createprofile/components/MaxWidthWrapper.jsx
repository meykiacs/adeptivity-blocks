import React from "react"
import styled from "styled-components"

export default function MaxWidthWrapper({ maxWidth=350, children, ...delegated }) {
  return <Wrapper maxWidth={maxWidth} {...delegated}>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: ${p => p.maxWidth + 'px'};
  margin-left: auto;
  margin-right: auto;
`
