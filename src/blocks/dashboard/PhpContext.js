import { createContext, useState, useEffect } from "@wordpress/element"

const PhpContext = createContext()

// function arrayEqual(a1, a2) {
// 	if (a1.length !== a2.length) return false
// 	return true
// }


export const PhpProvider = ({ children, providerValues }) => {



	const courses = providerValues.courses

	// const coursesRef = useRef(courses)
	// if (!arrayEqual(courses, coursesRef.current)) {
	// 	coursesRef.current = courses
	// }
	

	const [coursesInfo, setCoursesInfo] = useState(courses)

	const [sortCoursesBy, setSortCoursesBy] = useState("newest")

	useEffect(() => {
		let newCourses
		switch (sortCoursesBy) {
			case "newest":
				newCourses = [...coursesInfo.sort((a, b) => a.i - b.i)]
				break
			case "oldest":
				newCourses = [...coursesInfo.sort((a, b) => b.i - a.i)]
				break
			case "title":
				newCourses = [...coursesInfo.sort((a, b) => a.title.localeCompare(b.title))]
				break
			default:
				newCourses = [...coursesInfo.sort((a, b) => a.i - b.i)]
				break
		}



		setCoursesInfo(newCourses)

		// eslint-disable-next-line
	}, [sortCoursesBy, setCoursesInfo ])

	return (
		<PhpContext.Provider
			value={{ ...providerValues, setSortCoursesBy, sortCoursesBy, coursesInfo }}
		>
			{children}
		</PhpContext.Provider>
	)
}

export default PhpContext
