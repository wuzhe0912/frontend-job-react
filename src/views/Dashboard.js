import React, { Fragment } from 'react';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import CardInfo from 'components/CardInfo';
import Area from 'components/Area';

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Wrapper>
        <Layout>
          <CardInfo></CardInfo>
          <AreaTitle>
            <h2># 地區職缺數量對比</h2>
          </AreaTitle>
          <Area></Area>
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

const AreaTitle = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default Dashboard;
