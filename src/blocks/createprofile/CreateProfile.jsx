import styled from "styled-components"
import { useState } from "@wordpress/element"

import { WPProvider } from "./WPContext"
import Footer from "./components/Footer"
import AvatarPage from "./pages/AvatarPage"
import InfoPage from "./pages/InfoPage"

export default function CreateProfile({ providedValues }) {
	const [file, setFile] = useState(null)
	const [avatarSvg, setAvatarSvg] = useState(null)
	return (
		<WPProvider providedValues={providedValues}>
			<Wrapper>
				<MainContentWrapper>
					<AvatarPage setFile={setFile} setAvatarSvg={setAvatarSvg} />
					<InfoPage file={file} avatarSvg={avatarSvg} />
				</MainContentWrapper>
				<Footer />
			</Wrapper>
		</WPProvider>
	)
}

const Wrapper = styled.div`
	flex-direction: column;
	display: flex;
	min-height: 100vh;

	& > * {
		flex: 1;
	}
`

const MainContentWrapper = styled.div`
	display: flex;

	& > *:first-child {
		flex: 1;
	}

	& > *:last-child {
		flex: 1.25;
	}
`
