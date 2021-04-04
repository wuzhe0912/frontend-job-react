// 中位數
export const getMedian = (arr) => {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let median;
  // 要考慮目錄是從 0 開始算
  if (arr.length % 2 === 0) {
    median =
      (parseInt(arr[arr.length / 2]) + parseInt(arr[arr.length / 2 - 1])) / 2;
  } else {
    median = parseInt(arr[(arr.length - 1) / 2]);
  }
  return median;
};

// 眾數
export const getMode = (arr) => {
  const map = new Map();
  let maxFreq = 0;
  let mode;

  for (const item of arr) {
    let freq = map.has(item) ? map.get(item) : 0;
    freq++;

    if (freq > maxFreq) {
      maxFreq = freq;
      mode = item;
    }

    map.set(item, freq);
  }

  return parseInt(mode);
};
