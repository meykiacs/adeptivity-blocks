import first from "../svg/teacher/01.svg"
import second from "../svg/teacher/02.svg"
import third from "../svg/teacher/03.svg"
import fourth from "../svg/teacher/04.svg"
// import fifth from "../svg/teacher/05.svg"
import sixth from "../svg/teacher/06.svg"
import seventh from "../svg/teacher/07.svg"
import eighth from "../svg/teacher/08.svg"
import nineth from "../svg/teacher/09.svg"
import AvatarGrid from "./AvatarGrid"
import { useState } from "@wordpress/element"
const avatars = [
	{ id: "1", src: first },
	{ id: "2", src: second },
	{ id: "3", src: third },
	{ id: "4", src: fourth },
	// {id: "5", src:fifth},
	{ id: "6", src: sixth },
	{ id: "7", src: seventh },
	{ id: "8", src: eighth },
	{ id: "9", src: nineth },
]

export default function TeacherAvatarGrid({ setAvatarSvg }) {
	const [avatarId, setAvatarId] = useState("0")
	const avatar = avatars.filter((a) => a.id === avatarId)
	if (avatar.length > 0) {
		setAvatarSvg(avatar[0].src)
	}
	return (
		<AvatarGrid
			avatars={avatars}
			setAvatarId={setAvatarId}
			avatarId={avatarId}
		/>
	)
}
