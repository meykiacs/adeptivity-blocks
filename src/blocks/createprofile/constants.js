export const BREAKPOINTS = {
	phone: 600,
	tablet: 950,
	laptop: 1300,
}

export const QUERIES = {
	phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
	tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
	laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}

export const PAGEINFO = {
	school: {
		avatarPath: "/school/",
		fields: [
			{ type: "text", name: "name", label: "Name" },
			{ type: "number", name: "stucount", label: "Student Count" },
			{ type: "date", name: "dateofbirth", label: "Date of Birth" },
			{ type: "tel", name: "phone", label: "Phone / Fax" },
			{ type: "text", name: "address", label: "address" },
			{ type: "text", name: "city", label: "City" },
			{ type: "text", name: "state", label: "State" },
			{ type: "text", name: "country", label: "Country" },
			{ type: "text", name: "school", label: "School" },
			{ type: "text", name: "job", label: "Job Title" },
		],
	},
	teacher: {
		avatarPath: "/teacher/",
		fields: [
			{ type: "text", name: "name", label: "First Name" },
			{ type: "text", name: "family", label: "Last Name" },
			{ type: "date", name: "estdate", label: "Establishment Date" },
			{ type: "tel", name: "phone", label: "Phone / Fax" },
      { type: "text", name: "address", label: "address" },
			{ type: "text", name: "city", label: "City" },
			{ type: "text", name: "state", label: "State" },
			{ type: "text", name: "country", label: "Country" },
			{ type: "text", name: "principal", label: "Principal Name" },
			{ type: "text", name: "principalphone", label: "Principal Phone no" },
		],
	},
}
