import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { filterRange } from 'components/RangeData';
import BarChart from 'components/BarChart';
import { getMedian } from 'components/Math';

const Range = () => {
  const [barChartData, setBarChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeMonth = await filterRange();
    const monthDown104Median = getMedian(rangeMonth.monthDownArray104);
    const monthDownCakeMedian = getMedian(rangeMonth.monthDownArrayCake);
    const monthUp104Median = getMedian(rangeMonth.monthUpArray104);
    const monthUpCakeMedian = getMedian(rangeMonth.monthUpArrayCake);
    const monthDown104 = [monthDown104Median, monthUp104Median];
    const monthDownCake = [monthDownCakeMedian, monthUpCakeMedian];

    // const rangeYear = await filterYearRange();

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
  };

  return (
    <RangeWrapper>
      <Card>
        <BarChart data={barChartData}></BarChart>
      </Card>
      <Card>{/* <BarChart data={barChartData}></BarChart> */}</Card>
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
