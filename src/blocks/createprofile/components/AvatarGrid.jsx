import styled from "styled-components"
import SVG from "react-inlinesvg"

export default function AvatarGrid({ avatars, setAvatarId, avatarId }) {
	const handleClick = (e) => {
		setAvatarId(e.currentTarget.id)
	}
	return (
		<Wrapper>
			{avatars.map((a) => (
				<Div
					key={a.id}
					id={a.id}
					style={{
						"--border": a.id === avatarId ? "var(--color-accent) 2px solid" : "none",
					}}
					onClick={(e) => handleClick(e)}
				>
					<Avatar src={a.src} />
				</Div>
			))}
		</Wrapper>
	)
}

const Avatar = styled(SVG)`
	width: 62px;
	display: block;
	height: 62px;
`

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 17px 15px;
	justify-content: center;
`

const Div = styled.div`
	display: block;
	border-radius: 50%;
	cursor: pointer;
	border: var(--border);
`
