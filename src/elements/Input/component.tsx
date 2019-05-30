import * as React from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';

export interface Props extends React.HTMLProps<HTMLInputElement> {
  readonly label: string;
}

const useId = () => React.useMemo<string>(v4, []);

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: "roboto", sans-serif;
`;

const Label = styled.label`
  margin-right: 12px;
`;

const InputElement = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  position: relative;
  border: 2px solid #ccc;
  &:focus {
    outline: none;
  }
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default React.forwardRef<HTMLInputElement, Props>(
  function Input({ label, ...props }, ref) {
    const id = useId();
    return (
      <Container>
        <Label htmlFor={id}>{label}</Label>
        <InputElement {...props} id={id} ref={ref} />
      </Container>
    );
  },
);
