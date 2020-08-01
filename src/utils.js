export function sortList(list, key) {
  list.sort(function (a, b) {
    var keyA = new Date(a[key]),
      keyB = new Date(b[key]);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  return list;
}

export function addDays(dateFrom, days) {
  var date = new Date(dateFrom.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export function getDateTimeYMD(date_ob) {
  // adjust 0 before single digit date
  let date = ('0' + date_ob.getDate()).slice(-2);
  // current month
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  let year = date_ob.getFullYear();

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  return year + '-' + month + '-' + date;
}

export const getEncodedString = data => {
  let encodedString = '';
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (encodedString.length > 0) {
        encodedString += '&';
      }
      encodedString += encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]);
    }
  }
  return encodedString;
};

export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
