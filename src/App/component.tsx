import * as React from 'react';
import { useDispatch } from 'react-redux';
import { requestCards } from '~/data/cards/actions';
import { useSearchQuery, usePageQuery, useOrderByQuery } from '~/data/cards';
import { useDebouncedValue } from '~util/hooks';
import { Container, Content, Header } from './styles';
import CardList from './CardList';
import CardSearch from './CardSearch';
import Footer from './Footer';

export default React.memo(function App() {
  const q = useSearchQuery();
  const dispatch = useDispatch();
  const page = usePageQuery();
  const orderBy = useOrderByQuery();
  const search = useDebouncedValue(q);

  React.useEffect(() => {
    const query = { page, orderBy };
    if (search) {
      // @ts-ignore
      query.name = search;
    }
    dispatch(requestCards(query));
  }, [search, page, orderBy, dispatch]);

  return (
    <Container>
      <Header>
        <CardSearch />
      </Header>
      <Content>
        <CardList />
      </Content>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
});
