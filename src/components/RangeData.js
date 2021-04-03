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

  const _yearRangUp104 = [];
  _tempYearRangUp104.forEach((node) => {
    let target = node.replace('元', '');
    let subTarget = target.split(',').join('');
    _yearRangUp104.push(subTarget);
  });

  // 整理並清除 cake 年薪面議
  const _DataCakeYear = DataCakeYear.filter((node) => {
    return node.salary !== '';
  });

  const _tempDataCakeYear = [];
  _DataCakeYear.forEach((node) => {
    let target = node.salary.replace(' TWD/year', '');
    _tempDataCakeYear.push(target);
  });

  // 分離 cake 年薪上下限
  _tempDataCakeYear.forEach((node) => {
    let target = node.split('~');
    yearRangeDownCake.push(target[0]);
    yearRangeUpCake.push(target[1]);
  });

  console.log(yearRangeDownCake);

  const data = {
    monthDownArray104: _monthRangeDown104,
    monthUpArray104: _monthRangeUp104,
    monthDownArrayCake: _monthRangeDownCake,
    monthUpArrayCake: _monthRangeUpCake,
    yearDownArray104: _yearRangeDown104,
    yearUpArray104: _yearRangUp104,
    yearDownArrayCake: [],
    yearUpArrayCake: [],
  };
  return data;
};
