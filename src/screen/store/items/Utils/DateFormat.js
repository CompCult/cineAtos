export function dateToString(date) {
    const data = new Date(date)
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
}