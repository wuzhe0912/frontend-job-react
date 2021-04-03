// 中位數
export const getMedian = (arr) => {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let median;
  // 要考慮目錄是從 0 開始算
  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    median = arr[(arr.length - 1) / 2];
  }
  return median;
};

// 眾數
export const getMode = (arr) => {
  let countList = {};
  for (let value of arr) {
    value = value.toString();
    if (!countList[value]) countList[value] = 0;
    countList[value]++;
  }

  let maxCount = 0;
  let mode = [];
  for (let prop in countList) {
    if (maxCount < countList[prop]) {
      maxCount = countList[prop];
      mode = [prop];
    } else if (maxCount === countList[prop]) {
      mode.push(prop);
    }
  }

  if (mode.length === Object.keys(countList).length) {
    mode = [];
  }

  return mode;
};
