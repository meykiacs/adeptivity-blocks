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
