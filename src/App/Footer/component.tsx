import * as React from 'react';
import { stringify, parse } from 'querystring';
import { usePageQuery } from '~/data/cards';
import { Button } from '~elements';
import { useRouter } from '~util/hooks';
import { Container } from './styles';

export default React.memo(function CardListFooter() {
  const { history, location } = useRouter();
  const page = usePageQuery();
  const nextPage = React.useCallback(() => {
    history.replace({
      ...location,
      search: stringify({
        ...parse(location.search.replace(/^\?/, '')),
        page: page + 1,
      }),
    });
  }, [history, location, page]);
  const prevPage = React.useCallback(() => {
    history.replace({
      ...location,
      search: stringify({
        ...parse(location.search.replace(/^\?/, '')),
        page: Math.max(page - 1, 1),
      }),
    });
  }, [history, location, page]);
  return (
    <Container>
      {page > 1 && <Button type="button" onClick={prevPage}>Previous Page</Button>}
      <Button type="button" onClick={nextPage}>Next Page</Button>
    </Container>
  );
});
