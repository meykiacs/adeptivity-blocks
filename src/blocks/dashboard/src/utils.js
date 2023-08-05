export function getLocalDateTime(dateString) {
	const date = new Date(dateString + 'Z')
	if (isNaN(date.getTime())) {
		return {
			datetime: dateString,
			localDateTime: dateString,
		}
	}
	return {
		datetime: date.toISOString(),
		localDateTime: date.toLocaleString(),
	}
}
