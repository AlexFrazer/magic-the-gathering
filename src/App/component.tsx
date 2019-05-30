import * as React from 'react';
import { Container, Content, Header } from './styles';
import CardList from './CardList';
import CardSearch from './CardSearch';

export default React.memo(function App() {
  return (
    <Container>
      <Header>
        <CardSearch />
      </Header>
      <Content>
        <CardList />
      </Content>
    </Container>
  );
});
