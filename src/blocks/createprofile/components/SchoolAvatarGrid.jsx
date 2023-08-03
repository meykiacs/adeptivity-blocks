import first from "../svg/school/01.svg"
import second from "../svg/school/02.svg"
import third from "../svg/school/03.svg"
import fourth from "../svg/school/04.svg"
// import fifth from "../svg/teacher/05.svg"
import sixth from "../svg/school/06.svg"
import seventh from "../svg/school/07.svg"
import eighth from "../svg/school/08.svg"
import nineth from "../svg/school/09.svg"
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

export default function SchoolAvatarGrid() {
	const [avatarId, setAvatarId] = useState("0")
	return <AvatarGrid avatars={avatars} setAvatarId={setAvatarId} avatarId={avatarId} />
}

