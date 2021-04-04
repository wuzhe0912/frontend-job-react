import React, { Fragment } from 'react';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import CardInfo from 'components/CardInfo';
import Area from 'components/Area';
import Transparency from 'components/Transparency';
import Range from 'components/Range';
import RangeMode from 'components/RangeMode';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Wrapper>
        <Layout>
          <Section>
            <Title># 雙平台 前端工程師職缺 資料視覺化</Title>
            <CardInfo></CardInfo>
          </Section>
          <Section>
            <Title>
              # 平台地區職缺數量對比
              <i>若縣市職缺數低於 5，暫時劃入邊緣區</i>
            </Title>
            <Area></Area>
          </Section>
          <Section>
            <Title># 平台待遇透明度結構</Title>
            <Transparency></Transparency>
          </Section>
          <Section>
            <Title># 平台薪資範圍(上下限)中位數</Title>
            <Range></Range>
          </Section>
          <Section>
            <Title># 平台薪資範圍(上下限)眾數</Title>
            <RangeMode></RangeMode>
          </Section>
          <Section>
            <Title># 平台各薪資範圍職缺數</Title>
          </Section>
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

const Section = styled.section`
  margin-top: 60px;

  ${MEDIA_QUERY_MD} {
    margin: 20px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  i {
    display: block;
    font-size: 14px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export default Dashboard;
