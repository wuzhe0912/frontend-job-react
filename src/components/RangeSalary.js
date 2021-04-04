import React, { useEffect, useState } from 'react';
import { filterRange } from 'components/RangeData';
import LineChart from 'components/LineChart';
import { Wrapper, Card } from 'constant/ShareStyle';

const RangeSalary = () => {
  const [monthLineChart, setMonthLineChart] = useState({});
  const [yearLineChart, setYearLineChart] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rangeSalary = await filterRange();
  };

  return (
    <Wrapper>
      <Card>
        <LineChart></LineChart>
      </Card>
      <Card>
        <LineChart></LineChart>
      </Card>
    </Wrapper>
  );
};

export default RangeSalary;
