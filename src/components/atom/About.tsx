import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  margin: 0;
  text-align: center;
`

interface AboutProps {
    children: React.ReactNode;
}

const About = (props: AboutProps) => {
    return <StyledAbout>{props.children}</StyledAbout>
}

export default About;