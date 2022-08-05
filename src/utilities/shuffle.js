const shuffle = (array) => {
  let nArr = [...array];
  for (var i = nArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = nArr[i];
    nArr[i] = nArr[j];
    nArr[j] = temp;
  }
  return nArr;
};

export default shuffle;

