import React from 'react';
import styled from 'styled-components';
import { GoRepo } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import {
  Data104Info,
  DataCakeMonthInfo,
  DataCakeYearInfo,
} from 'components/AreaData';

const CardInfo = () => {
  const list = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: '資料來源：104',
      value: `${Data104Info.length}(筆)`,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: '資料來源：cakeresume(月薪)',
      value: `${DataCakeMonthInfo.length}(筆)`,
      color: 'purple',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: '資料來源：cakeresume(年薪)',
      value: `${DataCakeYearInfo.length}(筆)`,
      color: 'yellow',
    },
  ];

  return (
    <CardWrap>
      {list.map((node) => {
        return <Item key={node.id} {...node}></Item>;
      })}
    </CardWrap>
  );
};

const Item = ({ icon, value, label, color }) => {
  return (
    <article>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const CardWrap = styled.section`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-content: space-around;

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 104px;
    background: #fff;
    border-radius: 6px;
  }

  span {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 28px;
  }

  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default CardInfo;
