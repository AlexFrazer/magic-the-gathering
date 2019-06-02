import * as React from 'react';
import { useCards } from '~/data/cards';
import { Container, List, ListItem } from './styles';
import Card from './Card';

function Loading({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  }
  return <h1>Loading...</h1>;
}

export default React.memo(function CardList() {
  const { cards, loading } = useCards();

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Container>
      <List>
        <Loading loading={loading} />
        {cards.map(card => (
          <ListItem key={card.id}>
            <Card card={card} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
});
