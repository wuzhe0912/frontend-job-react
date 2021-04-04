import Data104 from 'crawler/result-104.json';
import DataCakeMonth from 'crawler/cake-month.json';
import DataCakeYear from 'crawler/cake-year.json';

export const Data104Info = Data104;
export const DataCakeMonthInfo = DataCakeMonth;
export const DataCakeYearInfo = DataCakeYear;

export const filterInfo104 = () => {
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

  const hsinchuLength =
    parseInt(hsinchu.length) + parseInt(hsinchuCounty.length);

  const changhuaLength = parseInt(changhua.length);
  const yunlinLength = parseInt(yunlin.length);
  const chiayiLength = parseInt(chiayi.length);
  const yilanLength = parseInt(yilan.length);
  const hualienLength = parseInt(hualien.length);

  const lost =
    changhuaLength + yunlinLength + chiayiLength + yilanLength + hualienLength;

  const data = [
    taipei.length,
    newTaipei.length,
    taoyuan.length,
    hsinchuLength,
    taichung.length,
    tainan.length,
    kaohsiung.length,
    lost,
    other.length,
  ];

  return data;
};

export const filterInfoCake = () => {
  const taipei = [];
  const newTaipei = [];
  const taoyuan = [];
  const hsinchu = [];
  const taichung = [];
  const changhua = [];
  const Nantou = [];
  const tainan = [];
  const kaohsiung = [];
  const sea = [];
  const other = [];

  const cakeData = DataCakeMonth.concat(DataCakeYear);
  cakeData.forEach((node) => {
    if (
      node.companyAddress.indexOf('台北市', 0) !== -1 ||
      node.companyAddress.indexOf('台北', 0) !== -1 ||
      node.companyAddress.indexOf('內湖', 0) !== -1 ||
      node.companyAddress.indexOf('信義', 0) !== -1 ||
      node.companyAddress.indexOf('大同', 0) !== -1 ||
      node.companyAddress.indexOf('大安', 0) !== -1 ||
      node.companyAddress.indexOf('南港', 0) !== -1 ||
      node.companyAddress.indexOf('中山', 0) !== -1 ||
      node.companyAddress.indexOf('松山', 0) !== -1 ||
      node.companyAddress.indexOf('Taipei', 0) !== -1 ||
      node.companyAddress.indexOf('北投', 0) !== -1
    ) {
      taipei.push(node);
    } else if (
      node.companyAddress.indexOf('新北市', 0) !== -1 ||
      node.companyAddress.indexOf('新北', 0) !== -1 ||
      node.companyAddress.indexOf('中和', 0) !== -1 ||
      node.companyAddress.indexOf('湯城', 0) !== -1
    ) {
      newTaipei.push(node);
    } else if (
      node.companyAddress.indexOf('台中市', 0) !== -1 ||
      node.companyAddress.indexOf('台中', 0) !== -1
    ) {
      taichung.push(node);
    } else if (
      node.companyAddress.indexOf('高雄市', 0) !== -1 ||
      node.companyAddress.indexOf('高雄', 0) !== -1
    ) {
      kaohsiung.push(node);
    } else if (node.companyAddress.indexOf('台南', 0) !== -1) {
      tainan.push(node);
    } else if (node.companyAddress.indexOf('桃園', 0) !== -1) {
      taoyuan.push(node);
    } else if (
      node.companyAddress.indexOf('新竹', 0) !== -1 ||
      node.companyAddress.indexOf('竹北', 0) !== -1
    ) {
      hsinchu.push(node);
    } else if (
      node.companyAddress.indexOf('歐洲', 0) !== -1 ||
      node.companyAddress.indexOf('菲律賓', 0) !== -1 ||
      node.companyAddress.indexOf('廈門', 0) !== -1
    ) {
      sea.push(node);
    } else if (node.companyAddress.indexOf('彰化', 0) !== -1) {
      changhua.push(node);
    } else if (node.companyAddress.indexOf('南投', 0) !== -1) {
      Nantou.push(node);
    } else {
      other.push(node);
    }
  });

  const taoyuanLength = parseInt(taoyuan.length);
  const changhuaLength = parseInt(changhua.length);
  const NantouLength = parseInt(Nantou.length);
  const tainanLength = parseInt(tainan.length);
  const lost = taoyuanLength + changhuaLength + NantouLength + tainanLength;

  const data = [
    taipei.length,
    newTaipei.length,
    hsinchu.length,
    taichung.length,
    kaohsiung.length,
    lost,
    sea.length,
    other.length,
  ];

  return data;
};
