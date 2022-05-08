import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #4f4d53;
  height: 48px;
`

interface HeaderProps {
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return <StyledHeader>{props.children}</StyledHeader>
}

export default Header;