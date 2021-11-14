function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
export const Time = () => {
  let today = new Date();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
  let hour = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());
  return year + "." + month +  "." + "14 " +  + hour + ":" + minutes + ":" + seconds;
};
