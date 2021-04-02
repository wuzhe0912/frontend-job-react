import Data104 from 'crawler/result-104.json';
import DataCakeMonth from 'crawler/cake-month.json';
import DataCakeYear from 'crawler/cake-year.json';

export const Data104Info = Data104;
export const DataCakeMonthInfo = DataCakeMonth;
export const DataCakeYearInfo = DataCakeYear;

const taipei = [];
const newTaipei = [];
const taichung = [];
const kaohsiung = [];
const taoyuan = [];
const hsinchu = [];
const tainan = [];
const hsinchuCounty = [];
const changhua = [];
const yunlin = [];
const chiayi = [];
const yilan = [];
const hualien = [];
const other = [];

export const filterInfo104 = () => {
  Data104.forEach((node) => {
    if (node.companyAddress.indexOf('台北市', 0) !== -1) {
      taipei.push(node);
    } else if (node.companyAddress.indexOf('新北市', 0) !== -1) {
      newTaipei.push(node);
    } else if (node.companyAddress.indexOf('台中市', 0) !== -1) {
      taichung.push(node);
    } else if (node.companyAddress.indexOf('高雄市', 0) !== -1) {
      kaohsiung.push(node);
    } else if (node.companyAddress.indexOf('桃園市', 0) !== -1) {
      taoyuan.push(node);
    } else if (node.companyAddress.indexOf('新竹市', 0) !== -1) {
      hsinchu.push(node);
    } else if (node.companyAddress.indexOf('台南市', 0) !== -1) {
      tainan.push(node);
    } else if (node.companyAddress.indexOf('新竹縣', 0) !== -1) {
      hsinchuCounty.push(node);
    } else if (node.companyAddress.indexOf('宜蘭', 0) !== -1) {
      yilan.push(node);
    } else if (node.companyAddress.indexOf('花蓮', 0) !== -1) {
      hualien.push(node);
    } else if (node.companyAddress.indexOf('嘉義', 0) !== -1) {
      chiayi.push(node);
    } else if (node.companyAddress.indexOf('雲林', 0) !== -1) {
      yunlin.push(node);
    } else if (node.companyAddress.indexOf('彰化', 0) !== -1) {
      changhua.push(node);
    } else {
      other.push(node);
    }
  });

  const changhuaLength = parseInt(changhua.length);
  const yunlinLength = parseInt(yunlin.length);
  const chiayiLength = parseInt(chiayi.length);
  const yilanLength = parseInt(yilan.length);
  const hualienLength = parseInt(hualien.length);

  const lost = changhuaLength + yunlinLength + chiayiLength;
  const east = yilanLength + hualienLength;

  const data = [
    taipei.length,
    newTaipei.length,
    taoyuan.length,
    hsinchu.length,
    hsinchuCounty.length,
    taichung.length,
    lost,
    tainan.length,
    kaohsiung.length,
    east,
    other.length,
  ];

  return data;
};
