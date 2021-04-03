import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const LineChart = () => {
  return (
    <LineWrapper>
      <Line></Line>
    </LineWrapper>
  );
};

const LineWrapper = styled.div``;

export default LineChart;
