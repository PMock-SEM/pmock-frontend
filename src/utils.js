const utils = {
  convertTimeStamp(timestamp) {
    const date = new Date(timestamp);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '-' + mm + '-' + yyyy;
  },

  convertTimeStampToHour(timestamp) {
    const date = new Date(timestamp);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hour}:${minutes}:${seconds}`;
  }
}

export default utils;