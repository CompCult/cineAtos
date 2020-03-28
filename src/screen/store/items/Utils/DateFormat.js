export function dateToString(date) {
  const data = new Date(date);
  return `${data.getDate() < 10 ? '0' + data.getDate() : data.getDate()}/${
    data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1
  }/${data.getFullYear()}`;
}

export function getHourFromDate(date) {
  const data = new Date(date)
  return `${data.getHours()}:${data.getMinutes()}`
}