import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChat = ({ data }) => {
  useEffect(() => {
    console.log('bar component', data);
  });

  return (
    <div>
      <Bar
        className="bar"
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      ></Bar>
    </div>
  );
};

export default BarChat;
