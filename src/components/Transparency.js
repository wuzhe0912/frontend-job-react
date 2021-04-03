import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PieChart from 'components/PieChart';
import { filter104Salary, filterCakeSalary } from 'components/TransparencyData';

const Transparency = () => {
  const [pieChartData, setPieChartData] = useState({});
  const [cakePieChartData, setCakePieChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res104Salary = await filter104Salary();
    const resCakeSalary = await filterCakeSalary();

    setPieChartData({
      labels: ['待遇面議', '明確列出月薪範圍', '明確列出年薪範圍'],
      datasets: [
        {
          label: '# Jobs(104)',
          data: res104Salary,
          backgroundColor: ['#8f4f4f', '#78c4d4', '#f25287'],
        },
      ],
    });

    setCakePieChartData({
      labels: ['待遇面議', '明確列出月薪範圍', '明確列出年薪範圍'],
      datasets: [
        {
          label: '# Jobs(104)',
          data: resCakeSalary,
          backgroundColor: ['#8f4f4f', '#78c4d4', '#f25287'],
        },
      ],
    });
  };

  return (
    <TransparencyWrapper>
      <TransparencyCard>
        <PieChart data={pieChartData}></PieChart>
      </TransparencyCard>
      <TransparencyCard>
        <PieChart data={cakePieChartData}></PieChart>
      </TransparencyCard>
    </TransparencyWrapper>
  );
};

const TransparencyWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const TransparencyCard = styled.article`
  width: 500px;
  height: 100%;
`;

export default Transparency;
