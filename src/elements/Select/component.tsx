import * as React from 'react';
import styled from '@emotion/styled';
import { useId } from '~util/hooks';

export interface Props extends React.HTMLProps<HTMLSelectElement> {
  readonly label: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SelectElement = styled.select`
  padding: 8px 12px;
  font-family: 'roboto', sans-serif;
  margin-left: 8px;
`;

export default React.forwardRef<HTMLSelectElement, Props>(
  function Select({ label, ...props }, ref) {
    const id = useId();
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <SelectElement {...props} id={id} ref={ref} />
      </Container>
    );
  },
);
