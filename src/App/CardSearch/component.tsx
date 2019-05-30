import * as React from 'react';
import { Input } from '~elements';
import { useInput } from '~util/hooks';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

export default function CardSearch() {
  const dispatch = useDispatch();
  const [search, onChangeSearch] = useInput();

  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  }, [search]);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          value={search}
          label="search"
          type="search"
          placeholder="search"
          autoComplete="off"
          onChange={onChangeSearch}
        />
      </form>
    </Container>
  );
}
