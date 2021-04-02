import React from 'react';
import styled from 'styled-components';
import BottomBgImg from 'assets/bg-pattern-bottom.svg';
import CardImg from 'assets/bg-pattern-card.svg';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <Card>
        <img src={CardImg} alt=""></img>
        <div>
          <h2>Frontend Jobs</h2>
          <span>Data Visualization</span>
        </div>
        <LoginBtn onClick={loginWithRedirect}>Login / Sign in</LoginBtn>
      </Card>
      <BottomBg>
        <img src={BottomBgImg} alt="" />
      </BottomBg>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #19a1ae;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const BottomBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 400px;
  height: 400px;
  transform: rotate(0.3turn);

  ${MEDIA_QUERY_MD} {
    width: 300px;
    height: 300px;
  }
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 50px 100px -20px rgba(8, 70, 94, 0.504835);
  z-index: 2;

  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2e3349;
    border-bottom: 1px solid #e8e9ec;
    width: 100%;
    height: 135px;
  }

  ${MEDIA_QUERY_MD} {
    width: 290px;
    height: 320px;
  }
`;

const LoginBtn = styled.button`
  margin-top: 20px;
  color: #19a1ae;
  border: 2px solid #19a1ae;
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #fff;
    background: #19a1ae;
  }

  ${MEDIA_QUERY_MD} {
    margin-top: 10px;
  }
`;

export default Login;
