import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
  }))`
  height: 200px;
  border-radius: 50%;
  width: 200px;
`

interface PhotoProps {
    children: React.ReactNode;
}

const Photo = (props: PhotoProps) => {
    return <StyledPhoto>{props.children}</StyledPhoto>
}

export default Photo;