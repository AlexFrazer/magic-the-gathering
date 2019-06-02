import * as React from 'react';
import { Container, Form } from './styles';
import OrderBy from './OrderBy/component';
import Search from './Search';

export default function CardSearch() {
  return (
    <Container>
      <Form>
        <Search />
        <OrderBy />
      </Form>
    </Container>
  );
}
