import React, { useEffect, useState } from 'react';
import { filterRange } from 'components/CountSalary';
import LineChart from 'components/LineChart';
import { Wrapper, Card } from 'constant/ShareStyle';
import { getYearSalaryRange } from 'components/CountSalary';

const YearSalaryNumber = () => {
  const [yearDownLineChart, setYearDownLineChart] = useState({});
  const [yearUpLineChart, setYearUpLineChart] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeSalary = await filterRange();
    const yearDown104 = getYearSalaryRange(rangeSalary.yearDownArray104);
    const yearDownCake = getYearSalaryRange(rangeSalary.yearUpArray104);
    const yearUp104 = getYearSalaryRange(rangeSalary.yearDownArrayCake);
    const yearUpCake = getYearSalaryRange(rangeSalary.yearUpArrayCake);

    setYearDownLineChart({
      labels: [
        '50萬以下',
        '50萬-70萬',
        '70萬-90萬',
        '90萬-100萬',
        '100萬-110萬',
        '110萬-120萬',
        '120萬-130萬',
        '130萬-140萬',
        '140萬-150萬',
        '超過150萬',
      ],
      datasets: [
        {
          label: '104(年薪下限)',
          data: yearDown104,
          backgroundColor: '#ff9100',
          borderColor: '#ff9100',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'Cakeresume(年薪下限)',
          data: yearDownCake,
          backgroundColor: '#13ab67',
          borderColor: '#13ab67',
          borderWidth: 1,
          fill: false,
        },
      ],
    });

    setYearUpLineChart({
      labels: [
        '50萬以下',
        '50萬-70萬',
        '70萬-90萬',
        '90萬-100萬',
        '100萬-110萬',
        '110萬-120萬',
        '120萬-130萬',
        '130萬-140萬',
        '140萬-150萬',
        '超過150萬',
      ],
      datasets: [
        {
          label: '104(年薪上限)',
          data: yearUp104,
          backgroundColor: '#ff9100',
          borderColor: '#ff9100',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'Cakeresume(年薪上限)',
          data: yearUpCake,
          backgroundColor: '#13ab67',
          borderColor: '#13ab67',
          borderWidth: 1,
          fill: false,
        },
      ],
    });
  };

  return (
    <Wrapper>
      <Card>
        <LineChart data={yearDownLineChart}></LineChart>
      </Card>
      <Card>
        <LineChart data={yearUpLineChart}></LineChart>
      </Card>
    </Wrapper>
  );
};

export default YearSalaryNumber;
