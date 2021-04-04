import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <span>2021 &copy; by Pitt Wu</span>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export default Footer;
