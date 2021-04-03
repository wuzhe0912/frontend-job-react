import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const PieChart = ({ data }) => {
  return (
    <PieWrapper>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      ></Pie>
    </PieWrapper>
  );
};

const PieWrapper = styled.div``;

export default PieChart;
