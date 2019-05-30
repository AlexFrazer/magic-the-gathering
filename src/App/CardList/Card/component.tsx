import * as React from 'react';
import { constant } from 'lodash/fp';
import styled from '@emotion/styled';

export interface Props {
  readonly card: Card;
}

const Container = styled.div`
  cursor: pointer;
  height: 310px;
  margin: 12px;
  width: 223px;
  border-radius: 12px;
  box-shadow: 0 6px 6px rgba(0,0,0,0.3);
  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease-in;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &::after {
    content: " ";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
    transition-property: opacity transform;
    transition-duration: 100ms;
    transition-timing-function: ease-in;
  }
  &:hover::after {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:hover, &:focus {
    transform: scale(1.01);
    transition-timing-function: ease-in-out;
    transition-delay: 100ms;
  }
`;

export default function Card({
  card: {
    imageUrl,
  },
}: Props) {
  const style = React.useMemo(constant({
    backgroundImage: `url(${imageUrl})`,
  }), [imageUrl]);

  return <Container style={style} />;
}
