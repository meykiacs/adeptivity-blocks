import styled from "styled-components"
import { Portal, Overlay, Close, Content } from "@radix-ui/react-dialog"
import { Cross1Icon } from "@radix-ui/react-icons"
// import SiteLogo from "./SiteLogo"
import { menuBottons } from "../data"
import MenuButton from "./MenuButton"
import { UnstyledButton } from "./Buttons"

export default function MobileMenu() {
  return (
    <Portal>
      <DialogOverlay />
      <DialogContent>
        <Close asChild>
          <StyledButton>
            <Cross1Icon />
          </StyledButton>
        </Close>
        <ul>
          {/* <li>
          <SiteLogo />
        </li> */}
          {menuBottons.map((menuButton) => (
            <li key={menuButton.id}>
              <MenuButton {...menuButton} />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Portal>
  )
}

const DialogOverlay = styled(Overlay)`
  background-color: var(--color-blurred-background);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

const DialogContent = styled(Content)`
  background-color: var(--color-white);
  border-radius: 7px;
  /* box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px; */
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 90px;
  left: 0;
  max-width: 80%;
  max-height: 100%;
  min-height: 55%;
  padding-left: 23px;
  padding-right: 40px;
  padding-top: 75px;
  padding-bottom: 16px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  /* overflow: scroll; */

  &::-webkit-scrollbar: {
    display: none;
  }

  &:focus {
    outline: none;
  }
`

const StyledButton = styled(UnstyledButton)`
  display: block;
  position: absolute;
  top: 21px;
  right: 15px;
  width: 27px;
  height: 27px;
  pointer: cursor;

  & svg {
    width: 100%;
    height: 100%;
  }
`