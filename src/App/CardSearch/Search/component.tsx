import * as React from 'react';
import { Input } from '~elements';
import { useSearchQuery } from '~/data/cards';
import { useRouter } from '~util/hooks';
import { stringify, parse } from 'querystring';

export default function Search() {
  const { location, history } = useRouter();
  const value = useSearchQuery();
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = parse(location.search.replace(/^\?/, ''));
    if (!e.target.value) {
      delete query.q;
    } else {
      query.q = e.target.value;
    }
    history.replace({
      ...location,
      search: stringify(query),
    });
  }, [location, history]);

  return (
    <Input
      value={value}
      label="Search"
      type="search"
      placeholder="search"
      autoComplete="off"
      onChange={onChange}
    />
  );
}
