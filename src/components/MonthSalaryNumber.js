import React, { useEffect, useState } from 'react';
import { filterRange } from 'components/CountSalary';
import LineChart from 'components/LineChart';
import { Wrapper, Card } from 'constant/ShareStyle';
import { getMonthSalaryRange } from 'components/CountSalary';

const MonthSalaryNumber = () => {
  const [monthDownLineChart, setMonthDownLineChart] = useState({});
  const [monthUpLineChart, setMonthUpLineChart] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeSalary = await filterRange();
    const monthDown104 = getMonthSalaryRange(rangeSalary.monthDownArray104);
    const monthDownCake = getMonthSalaryRange(rangeSalary.monthDownArrayCake);
    const monthUp104 = getMonthSalaryRange(rangeSalary.monthUpArray104);
    const monthUpCake = getMonthSalaryRange(rangeSalary.monthUpArrayCake);

    setMonthDownLineChart({
      labels: [
        '3萬以下',
        '3萬-4萬',
        '4萬-5萬',
        '5萬-6萬',
        '6萬-7萬',
        '7萬-8萬',
        '8萬-9萬',
        '9萬-10萬',
        '超過10萬',
      ],
      datasets: [
        {
          label: '104(下限)',
          data: monthDown104,
          backgroundColor: '#ff9100',
          borderColor: '#ff9100',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'Cakeresume(下限)',
          data: monthDownCake,
          backgroundColor: '#13ab67',
          borderColor: '#13ab67',
          borderWidth: 1,
          fill: false,
        },
      ],
    });

    setMonthUpLineChart({
      labels: [
        '3萬以下',
        '3萬-4萬',
        '4萬-5萬',
        '5萬-6萬',
        '6萬-7萬',
        '7萬-8萬',
        '8萬-9萬',
        '9萬-10萬',
        '超過10萬',
      ],
      datasets: [
        {
          label: '104(上限)',
          data: monthUp104,
          backgroundColor: '#ff9100',
          borderColor: '#ff9100',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'Cakeresume(上限)',
          data: monthUpCake,
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
        <LineChart data={monthDownLineChart}></LineChart>
      </Card>
      <Card>
        <LineChart data={monthUpLineChart}></LineChart>
      </Card>
    </Wrapper>
  );
};

export default MonthSalaryNumber;
