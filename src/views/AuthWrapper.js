import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from 'assets/preloader.gif';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="loading spinner" />
      </Wrapper>
    );
  } else if (error) {
    return (
      <Wrapper>
        <h2>{error.message}</h2>
      </Wrapper>
    );
  }
  return <Fragment>{children}</Fragment>;
};

export default AuthWrapper;
