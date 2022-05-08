import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #4f4d53;
  border-top: 12px solid #e8be02;
  height: 320px;
`
interface FooterProps {
    children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
    return <StyledFooter>{props.children}</StyledFooter>
}

export default Footer;