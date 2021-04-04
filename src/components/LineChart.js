import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  return (
    <div>
      <Line
        className="line"
        data={data}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      ></Line>
    </div>
  );
};

export default LineChart;
