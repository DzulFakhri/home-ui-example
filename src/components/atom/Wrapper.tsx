import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.property};
  align-items: center;
  height: 100%;
  text-align: ${(props) => props.theme};
  flex-wrap: ${(props) => props.about};
`

interface WrapperProps {
    children: React.ReactNode;
    justify: 'between' | 'center';
    align: 'start' | 'center';
    wrap: 'flex' | 'none';
}

const Wrapper = (props: WrapperProps) => {
    let alignment;
    let itemAlignment;
    let flexWrap = '';

    if(props.justify === 'between'){
        alignment = 'space-between'
    }

    if(props.justify === 'center'){
        alignment = 'center'
    }

    if(props.align === 'start'){
        itemAlignment = 'flex-start'
    }

    if(props.align === 'center'){
        itemAlignment = 'center'
    }

    if(props.wrap === 'flex'){
        flexWrap = 'wrap;'
    }

    return <StyledWrapper property={alignment} theme={itemAlignment} about={flexWrap}>{props.children}</StyledWrapper>
}

export default Wrapper;