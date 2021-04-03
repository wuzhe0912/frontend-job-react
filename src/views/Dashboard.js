import React, { Fragment } from 'react';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import CardInfo from 'components/CardInfo';
import Area from 'components/Area';
import Transparency from 'components/Transparency';
import Range from 'components/Range';

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Wrapper>
        <Layout>
          <Title>
            <h2># 雙平台 前端工程師職缺 資料視覺化</h2>
          </Title>
          <CardInfo></CardInfo>
          <Title>
            <h2># 平台地區職缺數量對比</h2>
          </Title>
          <Area></Area>
          <Title>
            <h2># 平台待遇透明度結構</h2>
          </Title>
          <Transparency></Transparency>
          <Title>
            <h2># 平台薪資中位數</h2>
          </Title>
          <Range></Range>
        </Layout>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #f1f5f8;
  color: #617d98;
`;

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 30px 0;
  text-align: center;
`;

export default Dashboard;
