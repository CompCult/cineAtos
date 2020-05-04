export function transformData(date) {
    if (!data) {
        return '...'
    }
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)
    const year = date.slice(0, 4)
    return day + '/' + month + '/' + year
}

export function getHourFromDate(date) {
    if (!data) {
        return '...'
    }
    return date.slice(11, 19)
}