import styled from '@emotion/styled';

export const Container = styled.figure`
  border-radius: 12px;
  cursor: pointer;
  height: 400px;
  margin: 20px;
  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease-in;
  width: 300px;
  &:focus {
    outline: none;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  &:hover, &:focus {
    transform: scale(1.05);
    transition-timing-function: ease-in-out;
    transition-delay: 100ms;
  }
`;
