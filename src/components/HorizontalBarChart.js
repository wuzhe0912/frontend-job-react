import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const HorizontalBarChart = ({ data }) => {
  return (
    <div>
      <HorizontalBar
        data={data}
        options={{
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      ></HorizontalBar>
    </div>
  );
};

export default HorizontalBarChart;
