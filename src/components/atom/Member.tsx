import React from "react";
import styled from "styled-components";

const StyledMember = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${(props) => props.property};
`

interface MemberProps {
    children: React.ReactNode;
    variant: 'overlap' | 'space'; 
}

const Member = (props: MemberProps) => {
    let margin;
    if(props.variant === 'overlap'){
        margin='-100px 0 0 0'
    }
    if(props.variant === 'space'){
        margin='80px 0'
    }
    return <StyledMember property={margin}>{props.children}</StyledMember>
}

export default Member;