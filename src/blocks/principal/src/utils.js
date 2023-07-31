const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

// Define a function that takes a Date object as a parameter
export function getDateAsMonthDay(date) {
  let month = date.getMonth();
  let day = date.getDate();
  return monthNames[month] + " " + day;
}

export function getDateAsMonthYear(date) {
  let month = date.getMonth();
  let year = date.getFullYear();
  return monthNames[month] + " " + year;
}

export function getLocalDateTime(dateString) {
	const date = new Date(dateString)
	if (isNaN(date.getTime())) {
		return {
			datetime: "",
			localDateTime: "",
		}
	}
	return {
		datetime: date.toISOString(),
		localDateTime: date.toLocaleString(),
	}
}
