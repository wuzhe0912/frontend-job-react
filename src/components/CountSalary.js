import Data104 from 'crawler/result-104.json';
import DataCakeMonth from 'crawler/cake-month.json';
import DataCakeYear from 'crawler/cake-year.json';

export const filterRange = () => {
  const month104 = [];
  const year104 = [];
  const monthRangeDown104 = [];
  const monthRangeUp104 = [];
  const yearRangeDown104 = [];
  const yearRangeUp104 = [];
  const monthRangeDownCake = [];
  const monthRangeUpCake = [];
  const yearRangeDownCake = [];
  const yearRangeUpCake = [];

  // 清除 104 待遇面議
  const _Data104 = Data104.filter((node) => {
    return node.salary !== '待遇面議';
  });

  // 將 104 的年薪和月薪分離
  _Data104.forEach((node) => {
    if (node.salary.indexOf('月薪', 0) !== -1) {
      month104.push(node);
    } else year104.push(node);
  });

  // 將 104 月薪拆分上下限
  month104.forEach((node) => {
    let target = node.salary.split('~');
    monthRangeDown104.push(target[0]);
    monthRangeUp104.push(target[1]);
  });

  // 整理 104 月薪下限
  const _monthRangeDown104 = [];
  monthRangeDown104.forEach((node) => {
    let target = node.replace('月薪', '');
    let subTarget = target.split(',');
    let item = parseInt(subTarget[0]) * 1000;
    _monthRangeDown104.push(item);
  });

  // 整理 104 月薪上限
  const _monthRangeUp104 = [];
  monthRangeUp104.forEach((node) => {
    if (node !== undefined) {
      let target = node.split(',');
      let subTarget = parseInt(target[0]) * 1000;
      _monthRangeUp104.push(subTarget);
    }
  });

  // 清除 cake 月薪中面議的部分
  const monthCake = DataCakeMonth.filter((node) => {
    return node.salary !== '';
  });

  // 將 cake 月薪拆分上下限
  monthCake.forEach((node) => {
    let target = node.salary.split('~');
    monthRangeDownCake.push(target[0]);
    monthRangeUpCake.push(target[1]);
  });

  // 整理 cake 月薪下限
  const _monthRangeDownCake = [];
  monthRangeDownCake.forEach((node) => {
    let target = node.split('K');
    let subTarget = parseInt(target[0]) * 1000;
    _monthRangeDownCake.push(subTarget);
  });

  // 整理 cake 月薪上限
  const _monthRangeUpCake = [];
  monthRangeUpCake.forEach((node) => {
    if (node !== undefined) {
      let target = node.split('K');
      let subTarget = parseInt(target[0]) * 1000;
      _monthRangeUpCake.push(subTarget);
    }
  });

  // 將 104 年薪拆分上下限
  year104.forEach((node) => {
    let target = node.salary.split('~');
    yearRangeDown104.push(target[0]);
    yearRangeUp104.push(target[1]);
  });

  // 整理 104 年薪下限
  const _tempYearRangeDown104 = [];
  yearRangeDown104.forEach((node) => {
    let target = node.replace('年薪', '');
    _tempYearRangeDown104.push(target);
  });

  const _yearRangeDown104 = [];
  _tempYearRangeDown104.forEach((node) => {
    let target = node.replace('元', '');
    let subTarget = target.split(',').join('');
    _yearRangeDown104.push(subTarget);
  });

  // 整理 104 年薪上限
  const _tempYearRangUp104 = yearRangeUp104.filter((node) => {
    return node !== undefined;
  });

  const _yearRangeUp104 = [];
  _tempYearRangUp104.forEach((node) => {
    let target = node.replace('元', '');
    let subTarget = target.split(',').join('');
    _yearRangeUp104.push(subTarget);
  });

  // 整理並清除 cake 年薪面議
  const _DataCakeYear = DataCakeYear.filter((node) => {
    return node.salary !== '';
  });

  // 將 104 的年薪和月薪分離
  _Data104.forEach((node) => {
    if (node.salary.indexOf('月薪', 0) !== -1) {
      month104.push(node);
    } else year104.push(node);
  });

  const _tempDataCakeYear = [];
  _DataCakeYear.forEach((node) => {
    // 暫時先排除美金不做
    if (node.salary.indexOf(' TWD/year', 0) !== -1) {
      let target = node.salary.replace(' TWD/year', '');
      _tempDataCakeYear.push(target);
    }
  });

  // 分離 cake 年薪上下限
  _tempDataCakeYear.forEach((node) => {
    let target = [];
    target = node.split('~');
    yearRangeDownCake.push(target[0]);
    yearRangeUpCake.push(target[1]);
  });

  // 整理 cake 年薪下限
  const _yearRangeDownCake = [];
  yearRangeDownCake.forEach((node) => {
    let target = [];
    if (node.indexOf('M', 0) !== -1) {
      target = parseFloat(node.replace('M ', '')) * 1000000;
    } else {
      target = parseFloat(node.replace('K ', '')) * 1000;
    }
    _yearRangeDownCake.push(target);
  });

  // 整理 cake 年薪上限
  const _yearRangeUpCake = [];
  const tempYearRangeUpCake = yearRangeUpCake.filter((node) => {
    return node !== undefined;
  });

  tempYearRangeUpCake.forEach((node) => {
    let target = [];
    if (node.indexOf('M', 0) !== -1) {
      target = parseFloat(node.replace('M', '')) * 1000000;
    } else {
      target = parseFloat(node.replace('K', '')) * 1000;
    }
    _yearRangeUpCake.push(target);
  });

  const data = {
    monthDownArray104: _monthRangeDown104,
    monthUpArray104: _monthRangeUp104,
    monthDownArrayCake: _monthRangeDownCake,
    monthUpArrayCake: _monthRangeUpCake,
    yearDownArray104: _yearRangeDown104,
    yearUpArray104: _yearRangeUp104,
    yearDownArrayCake: _yearRangeDownCake,
    yearUpArrayCake: _yearRangeUpCake,
  };
  return data;
};

// 職缺月薪 範圍數
export const getMonthSalaryRange = (arr) => {
  const below3 = [];
  const below4 = [];
  const below5 = [];
  const below6 = [];
  const below7 = [];
  const below8 = [];
  const below9 = [];
  const below10 = [];
  const more10 = [];

  arr.forEach((node) => {
    const IntNode = parseInt(node);
    switch (true) {
      case IntNode <= 30000:
        below3.push(IntNode);
        break;
      case IntNode >= 30001 && IntNode <= 40000:
        below4.push(IntNode);
        break;
      case IntNode >= 40001 && IntNode <= 50000:
        below5.push(IntNode);
        break;
      case IntNode >= 50001 && IntNode <= 60000:
        below6.push(IntNode);
        break;
      case IntNode >= 60001 && IntNode <= 70000:
        below7.push(IntNode);
        break;
      case IntNode >= 70001 && IntNode <= 80000:
        below8.push(IntNode);
        break;
      case IntNode >= 80001 && IntNode <= 90000:
        below9.push(IntNode);
        break;
      case IntNode >= 90001 && IntNode <= 100000:
        below10.push(IntNode);
        break;
      default:
        more10.push(IntNode);
    }
  });

  const data = [
    below3.length,
    below4.length,
    below5.length,
    below6.length,
    below7.length,
    below8.length,
    below9.length,
    below10.length,
    more10.length,
  ];

  return data;
};

export const getYearSalaryRange = (arr) => {
  const below50 = [];
  const below70 = [];
  const below90 = [];
  const below100 = [];
  const below110 = [];
  const below120 = [];
  const below130 = [];
  const below140 = [];
  const below150 = [];
  const more150 = [];

  arr.forEach((node) => {
    const IntNode = parseInt(node);
    switch (true) {
      case IntNode <= 500000:
        below50.push(IntNode);
        break;
      case IntNode >= 500001 && IntNode <= 700000:
        below70.push(IntNode);
        break;
      case IntNode >= 700001 && IntNode <= 900000:
        below90.push(IntNode);
        break;
      case IntNode >= 900001 && IntNode <= 1000000:
        below100.push(IntNode);
        break;
      case IntNode >= 1000001 && IntNode <= 1100000:
        below110.push(IntNode);
        break;
      case IntNode >= 1100001 && IntNode <= 1200000:
        below120.push(IntNode);
        break;
      case IntNode >= 1200001 && IntNode <= 1300000:
        below130.push(IntNode);
        break;
      case IntNode >= 1300001 && IntNode <= 1400000:
        below140.push(IntNode);
        break;
      case IntNode >= 1400001 && IntNode <= 1500000:
        below150.push(IntNode);
        break;
      default:
        more150.push(IntNode);
    }
  });

  const data = [
    below50.length,
    below70.length,
    below90.length,
    below100.length,
    below110.length,
    below120.length,
    below130.length,
    below140.length,
    below150.length,
    more150.length,
  ];

  return data;
};
