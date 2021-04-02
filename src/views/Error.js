import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: hsl(186, 100%, 94%);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h2>404</h2>
        <h3>oops, the page can't be found.</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
