import React, { useLayoutEffect, useEffect, useState } from 'react';
import styled from 'styled-components';
import { filterInfo104 } from 'components/Data';
import BarChart from 'components/BarChart';

const Area = () => {
  const [barChartData, setBarChartData] = useState({});

  useEffect(() => {
    console.log('who1');
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await filterInfo104();

    console.log(1, res);

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
          label: '# Jobs',
          data: res,
        },
      ],
    });

    console.log(3, barChartData);
  };

  return (
    <AreaWrapper>
      <AreaCard>
        <BarChart data={barChartData}></BarChart>
      </AreaCard>
      <AreaCard></AreaCard>
    </AreaWrapper>
  );
};

const AreaWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const AreaCard = styled.article`
  width: 450px;
  height: 300px;
  border-radius: 6px;
`;

export default Area;
