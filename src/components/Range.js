import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { filterRange } from 'components/RangeData';
import BarChart from 'components/BarChart';
import { getMedian } from 'components/Math';

const Range = () => {
  const [barChartData, setBarChartData] = useState({});
  const [yearBarChartData, setYearBarChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeSalary = await filterRange();
    // 月薪 中位數
    const monthDown104Median = getMedian(rangeSalary.monthDownArray104);
    const monthDownCakeMedian = getMedian(rangeSalary.monthDownArrayCake);
    const monthUp104Median = getMedian(rangeSalary.monthUpArray104);
    const monthUpCakeMedian = getMedian(rangeSalary.monthUpArrayCake);
    const monthDown104 = [monthDown104Median, monthUp104Median];
    const monthDownCake = [monthDownCakeMedian, monthUpCakeMedian];
    // 年薪 中位數
    const yearDown104Median = getMedian(rangeSalary.yearDownArray104);
    const yearDownCakeMedian = getMedian(rangeSalary.yearDownArrayCake);
    const yearUp104Median = getMedian(rangeSalary.yearUpArray104);
    const yearUpCakeMedian = getMedian(rangeSalary.yearUpArrayCake);
    const yearDown104 = [yearDown104Median, yearDownCakeMedian];
    const yearDownCake = [yearUp104Median, yearUpCakeMedian];

    setBarChartData({
      labels: ['月薪下限中位數', '月薪上限中位數'],
      datasets: [
        {
          label: '104',
          data: monthDown104,
          backgroundColor: ['#ff9100', '#ff9100'],
          borderColor: ['#ff9100', '#ff9100'],
          borderWidth: 1,
        },
        {
          label: 'Cakeresume',
          data: monthDownCake,
          backgroundColor: ['#13ab67', '#13ab67'],
          borderColor: ['#13ab67', '#13ab67'],
          borderWidth: 1,
        },
      ],
    });

    setYearBarChartData({
      labels: ['年薪下限中位數', '年薪上限中位數'],
      datasets: [
        {
          label: '104',
          data: yearDown104,
          backgroundColor: ['#ff9100', '#ff9100'],
          borderColor: ['#ff9100', '#ff9100'],
          borderWidth: 1,
        },
        {
          label: 'Cakeresume',
          data: yearDownCake,
          backgroundColor: ['#13ab67', '#13ab67'],
          borderColor: ['#13ab67', '#13ab67'],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <RangeWrapper>
      <Card>
        <BarChart data={barChartData}></BarChart>
      </Card>
      <Card>
        <BarChart data={yearBarChartData}></BarChart>
      </Card>
    </RangeWrapper>
  );
};

const RangeWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.article`
  width: 500px;
  height: 100%;
`;

export default Range;
