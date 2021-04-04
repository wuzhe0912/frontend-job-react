import React, { useEffect, useState } from 'react';
import { filterRange } from 'components/CountSalary';
import BarChart from 'components/BarChart';
import { getMode } from 'components/Math';
import { Wrapper, Card } from 'constant/ShareStyle';

const RangeMode = () => {
  const [barChartData, setBarChartData] = useState({});
  const [yearBarChartData, setYearBarChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeSalary = await filterRange();
    // 月薪 眾數
    const monthDown104Mode = getMode(rangeSalary.monthDownArray104);
    const monthDownCakeMode = getMode(rangeSalary.monthDownArrayCake);
    const monthUp104Mode = getMode(rangeSalary.monthUpArray104);
    const monthUpCakeMode = getMode(rangeSalary.monthUpArrayCake);
    const monthDown104 = [monthDown104Mode, monthUp104Mode];
    const monthDownCake = [monthDownCakeMode, monthUpCakeMode];
    // 年薪 眾數
    const yearDown104Mode = getMode(rangeSalary.yearDownArray104);
    const yearDownCakeMode = getMode(rangeSalary.yearDownArrayCake);
    const yearUp104Mode = getMode(rangeSalary.yearUpArray104);
    const yearUpCakeMode = getMode(rangeSalary.yearUpArrayCake);
    const yearDown104 = [yearDown104Mode, yearDownCakeMode];
    const yearDownCake = [yearUp104Mode, yearUpCakeMode];

    setBarChartData({
      labels: ['月薪下限眾數', '月薪上限眾數'],
      datasets: [
        {
          label: '104',
          data: monthDown104,
          backgroundColor: ['#f5c0c0', '#f5c0c0'],
          borderColor: ['#f5c0c0', '#f5c0c0'],
          borderWidth: 1,
        },
        {
          label: 'Cakeresume',
          data: monthDownCake,
          backgroundColor: ['#9fd8df', '#9fd8df'],
          borderColor: ['#9fd8df', '#9fd8df'],
          borderWidth: 1,
        },
      ],
    });

    setYearBarChartData({
      labels: ['年薪下限眾數', '年薪上限眾數'],
      datasets: [
        {
          label: '104',
          data: yearDown104,
          backgroundColor: ['#f5c0c0', '#f5c0c0'],
          borderColor: ['#f5c0c0', '#f5c0c0'],
          borderWidth: 1,
        },
        {
          label: 'Cakeresume',
          data: yearDownCake,
          backgroundColor: ['#9fd8df', '#9fd8df'],
          borderColor: ['#9fd8df', '#9fd8df'],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <Wrapper>
      <Card>
        <BarChart data={barChartData}></BarChart>
      </Card>
      <Card>
        <BarChart data={yearBarChartData}></BarChart>
      </Card>
    </Wrapper>
  );
};

export default RangeMode;
