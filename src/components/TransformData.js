export function transformData(date) {
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)
    const year = date.slice(0, 4)
    return day + '/' + month + '/' + year
}

export function getHourFromDate(date) {
    return date.slice(11, 19)
}