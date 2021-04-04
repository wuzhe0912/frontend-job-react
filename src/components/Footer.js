import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
const url = `https://github.com/wuzhe0912/frontend-job-react`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>2021 &copy; by Pitt Wu</span>
      <Link href={url}>
        <AiFillGithub className="icon"></AiFillGithub>
        <span>GitHub</span>
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;

  span {
    margin-left: 4px;
  }
`;

export default Footer;
