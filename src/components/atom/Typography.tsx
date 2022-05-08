import React from 'react';
import styled from 'styled-components';

interface StyledHeadingProps {
  size: string;
}

const Heading = styled.p<StyledHeadingProps>`
  font-size: ${(props) => props.size};
  font-weight: 900;
  color: ${(props) => props.color};
  margin: ${(props) => props.property}
`;

interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h4' | 'p1' | 'p2';
  hue: 'grey' | 'yellow' | 'white';
  space: 'overlap' | 'medium' | 'none';
}

const Typography = (props: TypographyProps) => {
  const { variant = 'h1' } = props;
  const { hue = 'grey' } = props;
  const { space = 'none' } = props;
  
  let fontsize = '';
  let fontcolor = '';
  let margin = '';

  if (variant === 'h1') {
    fontsize = '100px';
  }

  if (variant === 'h2') {
    fontsize = '64px';
  }

  if (variant === 'h4') {
    fontsize = '14px';
  }

  if (variant === 'p1') {
    fontsize = '20px';
  }

  if (hue === 'grey') {
    fontcolor = '#4f4d53'
  }

  if (hue === 'yellow') {
    fontcolor = '#e8be02'
  }

  if (hue === 'white') {
    fontcolor = '#fff'
  }

  if(space === 'overlap'){
      margin = '-50px 0 0 0'
  }

  if(space === 'medium'){
    margin = '5px 0'
  }

  return <Heading color={fontcolor} size={fontsize} property={margin}>{props.children}</Heading>;
};

export default Typography;