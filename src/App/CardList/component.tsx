import * as React from 'react';
import { useCards, useRequestCards } from '~/data/cards';
import { List, ListItem } from './styles';
import Card from './Card';

export default function CardList() {
  useRequestCards();
  const { cards, loading } = useCards();

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <List>
      {cards.map(card => (
        <ListItem key={card.id}>
          <Card card={card} />
        </ListItem>
      ))}
    </List>
  );
}
