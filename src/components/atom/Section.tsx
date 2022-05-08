import React from "react";
import styled from "styled-components";
import background from "../../media/img_hero.jpg"

const StyledSection = styled.section`
  background-image: url(${background});
  color: #fff;
  height: 65vh;
  background-position: right;
  background-size: cover;
`

interface SectionProps {
    children: React.ReactNode;
}

const Section = (props: SectionProps) => {
    return <StyledSection>{props.children}</StyledSection>
}

export default Section;