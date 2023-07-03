import oxygen from "./svgs/oxygen.svg"
import sun from "./svgs/sun.svg"
import water from "./svgs/water.svg"
import soil from "./svgs/soil.svg"
import kick from "./svgs/kick.svg"
import home from "./svgs/home.svg"
import journey from "./svgs/journey.svg"
import classes from "./svgs/classes.svg"
import toolshed from "./svgs/toolshed.svg"

const categories = [
	{
		name: "divergent",
		title: "Divergent Thinking",
		icon: oxygen,
	},
	{
		name: "lateral",
		title: "Lateral Thinking",
		icon: sun,
	},
	{
		name: "aesthetic",
		title: "Aesthetic Thinking",
		icon: water,
	},
	{
		name: "system",
		title: "System Thinking",
		icon: soil,
	},
	{
		name: "inspirational",
		title: "Inspirational Thinking",
		icon: kick,
	},
]

const bars = [
	{
		id: "divergent",
		icon: oxygen,
		title: "Divergent Thinking",
		score: "2",
		color: "divergent",
		history: [
			{
				date: "2004",
				score: 1,
			},
			{
				date: "2005",
				score: 2,
			},
			{
				date: "2004=6",
				score: 3,
			},
			{
				date: "2007",
				score: 6,
			},
			{
				date: "2008",
				score: 5,
			},
		],
	},
	{
		id: "lateral",
		icon: sun,
		title: "Lateral Thinking",
		score: "5",
		color: "lateral",
		history: [
			{
				date: "2004",
				score: 1,
			},
			{
				date: "2005",
				score: 2,
			},
			{
				date: "2004=6",
				score: 3,
			},
			{
				date: "2007",
				score: 6,
			},
			{
				date: "2008",
				score: 5,
			},
		],
	},
	{
		id: "aesthetic",
		icon: water,
		title: "Aesthetic Thinking",
		score: "7",
		color: "aesthetic",
		history: [
			{
				date: "2004",
				score: 1,
			},
			{
				date: "2005",
				score: 2,
			},
			{
				date: "2004=6",
				score: 3,
			},
			{
				date: "2007",
				score: 6,
			},
			{
				date: "2008",
				score: 5,
			},
		],
	},
	{
		id: "system",
		icon: soil,
		title: "System Thinking",
		score: "3",
		color: "system",
		history: [
			{
				date: "2004",
				score: 1,
			},
			{
				date: "2005",
				score: 2,
			},
			{
				date: "2004=6",
				score: 3,
			},
			{
				date: "2007",
				score: 6,
			},
			{
				date: "2008",
				score: 5,
			},
		],
	},
	{
		id: "inspirational",
		icon: kick,
		title: "Inspirational Thinking",
		score: "7",
		color: "inspirational",
		history: [
			{
				date: "2004",
				score: 1,
			},
			{
				date: "2005",
				score: 2,
			},
			{
				date: "2004=6",
				score: 3,
			},
			{
				date: "2007",
				score: 6,
			},
			{
				date: "2008",
				score: 5,
			},
		],
	},
]

const courses = [
	{
		id: 1,
		title: "Brainstorming Techniques",
		icon: oxygen,
		img: "",
		color: "divergent",
		duration: "4",
	},
	{
		id: 2,
		title: "Creating Harmony in Classroom",
		icon: water,
		img: "",
		color: "aesthetic",
		duration: "4",
	},
	{
		id: 3,
		title: "Wisdom of not Following the Crowd",
		icon: sun,
		img: "",
		color: "lateral",
		duration: "4",
	},
	{
		id: 4,
		title: "Coloring Outside the Lines",
		icon: sun,
		img: "",
		color: "lateral",
		duration: "4",
	},
]

const uploadedClasses = [
	{ id: 1, title: "4th Grade Mathematics Prime Numbers", thumbnail: null },
	{ id: 2, title: "7th Grade Mathematics Algebra", thumbnail: null },
]

const tools = [
	{
		id: 1,
		title: "Connect the Dots",
		category: "Game",
		scores: [
			["divergent", oxygen, 3],
			["lateral", sun, 1],
		],
		img: null,
	},
	{
		id: 2,
		title: "Creative Anecdotes",
		category: "Tips",
		scores: [
			["divergent", oxygen, 1],
			["aesthetic", water, 0],
		],
		img: null,
	},
	{
		id: 3,
		title: "Cut, Fold, Paste",
		category: "Art and Crafts",
		scores: [
			["system", soil, 2],
			["aesthetic", water, 1],
		],
		img: null,
	},
	{
		id: 4,
		title: "Lorem Ipsum",
		category: "Art and Crafts",
		scores: [
			["inspirational", kick, 2],
			["system", soil, 1],
		],
		img: null,
	},
	{
		id: 5,
		title: "Lorem Ipsum",
		category: "Game",
		scores: [
			["lateral", sun, 2],
			["aesthetic", water, 1],
		],
		img: null,
	},
]

const menuBottons = [
	{ id: 1, text: "Home", icon: home, variant: "selected", to: "/" },
	{ id: 2, text: "Classes", icon: classes, variant: "listed", to: "/classes" },
	{ id: 3, text: "Journey", icon: journey, variant: "listed", to: "/journey" },
	{
		id: 4,
		text: "Toolshed",
		icon: toolshed,
		variant: "listed",
		to: "/toolshed",
	},
]

const myClasses = [
	{
		id: 1,
		grade: "7th",
		course: "Mathematics",
		subject: "Geometry and spatial sense",
		attendees: 21,
		date: "2023-03-01",
		uploadedAt: "2023-03-01 - 2:05 pm",
		analyzed: false,
	},
	{
		id: 2,
		grade: "5th",
		course: "Mathematics",
		subject: "Geometry and spatial sense",
		attendees: 21,
		date: "2023-03-01",
		uploadedAt: "2023-03-01 - 2:05 pm",
		analyzed: true,
	},
	{
		id: 3,
		grade: "6th",
		course: "Mathematics",
		subject: "Geometry and spatial sense",
		attendees: 21,
		date: "2023-03-01",
		uploadedAt: "2023-03-01 - 2:05 pm",
		analyzed: true,
	},
	{
		id: 4,
		grade: "4th",
		course: "Mathematics",
		subject: "Geometry and spatial sense",
		attendees: 21,
		date: "2023-03-01",
		uploadedAt: "2023-03-01 - 2:05 pm",
		analyzed: true,
	},
]

const courseOfGroups = [
	{
		id: "1",
		name: "Brainstorming Techniques",
		duration: "4",
		thumbnail: "",
		group: bars[0],
	},
	{
		id: "2",
		name: "Wisdom of not Following the Crowd",
		duration: "4",
		thumbnail: "",
		group: bars[1],
	},
	{
		id: "3",
		name: "Seeing through the Looking Glass",
		duration: "4",
		thumbnail: "",
		group: bars[2],
	},
	{
		id: "4",
		name: "",
		duration: "",
		thumbnail: "",
		group: bars[3],
	},
	{
		id: "5",
		name: "Failures or Stepping Stones",
		duration: "4",
		thumbnail: "",
		group: bars[4],
	},
]

const grades = [
	{ value: "pre-kindergarten", display: "Pre-Kindergarten" },
	{ value: "kindergarten", display: "Kindergarten" },
	{ value: "1st-grade", display: "1st Grade" },
	{ value: "2nd-grade", display: "2nd Grade" },
	{ value: "3rd-grade", display: "3rd Grade" },
	{ value: "4th-grade", display: "4th Grade" },
	{ value: "5th-grade", display: "5th Grade" },
	{ value: "6th-grade", display: "6th Grade" },
	{ value: "7th-grade", display: "7th Grade" },
	{ value: "8th-grade", display: "8th Grade" },
	{ value: "9th-grade", display: "9th Grade" },
	{ value: "10th-grade", display: "10th Grade" },
	{ value: "11th-grade", display: "11thGrade" },
	{ value: "12th-grade", display: "12th Grade" },
]

const courses2 = [...courses]

const obtainedTokens = [
	{
		id: bars[0].id,
		color: bars[0].color,
		icon: bars[0].icon,
		number: 8,
	},
	{
		id: bars[1].id,
		color: bars[1].color,
		icon: bars[1].icon,
		number: 3,
	},
	{
		id: bars[2].id,
		color: bars[2].color,
		icon: bars[2].icon,
		number: 14,
	},
	{
		id: bars[3].id,
		color: bars[3].color,
		icon: bars[3].icon,
		number: 10,
	},
	{
		id: bars[4].id,
		color: bars[4].color,
		icon: bars[4].icon,
		number: 5,
	},
]

const tools2 = [...tools]

export {
	categories,
	bars,
	courses,
	uploadedClasses,
	tools,
	menuBottons,
	myClasses,
	courseOfGroups,
	grades,
	courses2,
	obtainedTokens,
	tools2,
}
