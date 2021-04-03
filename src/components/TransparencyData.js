import Data104 from 'crawler/result-104.json';
import DataCakeMonth from 'crawler/cake-month.json';
import DataCakeYear from 'crawler/cake-year.json';

export const filter104Salary = () => {
  const negotiable = [];
  const monthSalary = [];
  const yearSalary = [];

  Data104.forEach((node) => {
    if (node.salary === '待遇面議') {
      negotiable.push(node);
    } else if (node.salary.indexOf('月薪', 0) !== -1) {
      monthSalary.push(node);
    } else {
      yearSalary.push(node);
    }
  });

  const data = [negotiable.length, monthSalary.length, yearSalary.length];
  return data;
};

export const filterCakeSalary = () => {
  const negotiable = [];
  const monthSalary = [];
  const yearSalary = [];

  const concatData = DataCakeMonth.concat(DataCakeYear);
  concatData.forEach((node) => {
    if (node.salary.indexOf('month', 0) !== -1) {
      monthSalary.push(node);
    } else if (node.salary.indexOf('year', 0) !== -1) {
      yearSalary.push(node);
    } else {
      negotiable.push(node);
    }
  });

  const data = [negotiable.length, monthSalary.length, yearSalary.length];
  return data;
};
