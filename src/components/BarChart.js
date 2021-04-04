import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChat = ({ data }) => {
  return (
    <div>
      <Bar
        className="bar"
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
      ></Bar>
    </div>
  );
};

export default BarChat;
