import oxygen from "./svgs/oxygen.svg"
import sun from "./svgs/sun.svg"
import water from "./svgs/water.svg"
import soil from "./svgs/soil.svg"
import kick from "./svgs/kick.svg"
import home from "./svgs/home.svg"
import journey from "./svgs/journey.svg"
import classes from "./svgs/classes.svg"
import toolshed from "./svgs/toolshed.svg"

const bars = [
	{
		id: "divergent",
		icon: oxygen,
		title: "Divergent Thinking",
		score: "2",
		color: "divergent",
	},
	{
		id: "lateral",
		icon: sun,
		title: "Lateral Thinking",
		score: "5",
		color: "lateral",
	},
	{
		id: "aesthetic",
		icon: water,
		title: "Aesthetic Thinking",
		score: "7",
		color: "aesthetic",
	},
	{
		id: "system",
		icon: soil,
		title: "System Thinking",
		score: "3",
		color: "system",
	},
	{
		id: "inspirational",
		icon: kick,
		title: "Inspirational Thinking",
		score: "10",
		color: "inspirational",
	},
]

const courses = [
	{
		id: 1,
		title: "Brainstorming Techniques",
		icon: oxygen,
		img: "",
		color: "divergent",
	},
	{
		id: 2,
		title: "Creating Harmony in Classroom",
		icon: water,
		img: "",
		color: "aesthetic",
	},
	{
		id: 3,
		title: "Wisdom of not Following the Crowd",
		icon: sun,
		img: "",
		color: "lateral",
	},
	{
		id: 4,
		title: "Coloring Outside the Lines",
		icon: sun,
		img: "",
		color: "lateral",
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

export { bars, courses, uploadedClasses, tools, menuBottons, myClasses }
