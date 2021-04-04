import React, { useEffect, useState } from 'react';
import { filterInfo104, filterInfoCake } from 'components/AreaData';
import BarChart from 'components/BarChart';
import { Wrapper, Card } from 'constant/ShareStyle';

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
        '新竹',
        '台中',
        '台南',
        '高雄',
        '邊緣縣市集散地',
        '海外',
      ],
      datasets: [
        {
          label: '104',
          data: res104,
          backgroundColor: [
            '#ff9100',
            '#112d4e',
            '#3f72af',
            '#61c0bf',
            '#ffc7c7',
            '#f08a5d',
            '#ffd460',
            '#d4a5a5',
            '#13ab67',
          ],
          borderColor: [
            '#ff9100',
            '#112d4e',
            '#3f72af',
            '#61c0bf',
            '#ffc7c7',
            '#f08a5d',
            '#ffd460',
            '#d4a5a5',
            '#13ab67',
          ],
          borderWidth: 1,
        },
      ],
    });

    setCakeBarChartData({
      labels: [
        '台北',
        '新北',
        '新竹',
        '台中',
        '高雄',
        '邊緣縣市集散地',
        '海外',
        '沒寫公司地址',
      ],
      datasets: [
        {
          label: 'Cakeresume',
          data: resCake,
          backgroundColor: [
            '#13ab67',
            '#112d4e',
            '#3f72af',
            '#61c0bf',
            '#ffc7c7',
            '#f08a5d',
            '#ffd460',
            '#d4a5a5',
          ],
          borderColor: [
            '#13ab67',
            '#112d4e',
            '#3f72af',
            '#61c0bf',
            '#ffc7c7',
            '#f08a5d',
            '#ffd460',
            '#d4a5a5',
          ],
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
        <BarChart data={cakeBarChartData}></BarChart>
      </Card>
    </Wrapper>
  );
};

export default Area;
