export const getDateTime = () => {
  const date = new Date();
  console.log('1')
  console.log(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds()
  const fullDate = `${year}-${month}-${day} ${hours}:${min}:${sec}`
  return fullDate;
}