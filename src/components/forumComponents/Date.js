function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
export const Time = () => {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let day = addZero(today.getDay());
  let hour = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());
  return year + "." + month + "." + day + " " + hour + ":" + minutes + ":" + seconds;
};
