import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { filterInfo104, filterInfoCake } from 'components/AreaData';
import BarChart from 'components/BarChart';

const Area = () => {
  const [barChartData, setBarChartData] = useState({});
  const [cakeBarChartData, setCakeBarChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res104 = await filterInfo104();
    const resCake = await filterInfoCake();

    setBarChartData({
      labels: [
        '台北',
        '新北',
        '桃園',
        '竹市',
        '竹縣',
        '台中',
        '失落的縣市們',
        '台南',
        '高雄',
        '宜花',
        '海外',
      ],
      datasets: [
        {
          label: '',
          data: res104,
          backgroundColor: [
            '#ff9100',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            '#ff9100',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });

    setCakeBarChartData({
      labels: [
        '台北',
        '新北',
        '桃園',
        '新竹',
        '台中',
        '彰化',
        '南投',
        '台南',
        '高雄',
        '海外',
        '沒寫公司地址',
      ],
      datasets: [
        {
          label: 'Cakeresume',
          data: resCake,
          backgroundColor: [
            '#13ab67',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            '#13ab67',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <AreaWrapper>
      <Card>
        <BarChart data={barChartData}></BarChart>
      </Card>
      <Card>
        <BarChart data={cakeBarChartData}></BarChart>
      </Card>
    </AreaWrapper>
  );
};

const AreaWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.article`
  width: 500px;
  height: 100%;
`;

export default Area;
