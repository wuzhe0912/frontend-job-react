import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const BarChat = ({ data }) => {
  return (
    <BarWrapper>
      <Bar
        className="bar"
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      ></Bar>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  .chartjs-render-monitor {
    /* height: 300px !important; */
  }
`;

export default BarChat;
