import oxygen from "./svgs/oxygen.svg"
import sun from "./svgs/sun.svg"
import water from "./svgs/water.svg"
import soil from "./svgs/soil.svg"
import kick from "./svgs/kick.svg"
import teachers from "./svgs/teachers.svg"
import manage from "./svgs/manage.svg"
import avatar01 from './svgs/teacher/01.svg'


const menuBottons = [
	{ id: 1, text: "Teachers", icon: teachers, variant: "selected" },
	{ id: 2, text: "Manage", icon: manage, variant: "selected" },
]

const teachersList = [
	{ id: 1, family: "Smith", name: 'John', dep: "Mathematics", qualification: "BSc", timeEmployed: "2015-01-05", avatar:  avatar01},
	{ id: 2, family: "Doe", name: 'Jane', dep: "Art", qualification: "MA", timeEmployed: "2020-08-08", avatar: avatar01 },
	{ id: 3, family: "Blake", name: 'Lily Rose', dep: "Chemistry", qualification: "MSc", timeEmployed: "2014-05-05", avatar: avatar01 },
	{ id: 4, family: "Sheffield", name: 'Adam', dep: "Literature", qualification: "BA", timeEmployed: "2022-03-03", avatar: avatar01 },

]

const scoreHistory = [
  { date: '2023-01-04', divergent: 3, lateral: 5, aesthetic: 4, system: 5, inspirational: 5 },
  { date: '2023-02-03', divergent: 3, lateral: 5, aesthetic: 2, system: 3, inspirational: 7 },
  { date: '2023-05-02', divergent: 3, lateral: 3, aesthetic: 6, system: 3, inspirational: 4 },
  { date: '2023-09-01', divergent: 3, lateral: 4, aesthetic: 2, system: 2, inspirational: 2 },
];

export {
	menuBottons,
	teachersList,
	scoreHistory,
	oxygen,
	kick,
	water,
	sun,
	soil
}
