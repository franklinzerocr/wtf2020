export function sortList(list, key) {
  console.log(list);
  list.sort(function (a, b) {
    var keyA = new Date(a[key]),
      keyB = new Date(b[key]);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  return list[0];
}
