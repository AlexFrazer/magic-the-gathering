import * as React from 'react';
import { Select } from '~elements';
import { useOrderByQuery } from '~/data/cards';
import { useRouter } from '~util/hooks';
import { stringify, parse } from 'querystring';

export default function OrderBy() {
  const { location, history } = useRouter();
  const value = useOrderByQuery();
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    history.replace({
      ...location,
      search: stringify({
        ...parse(location.search.replace(/^\?/, '')),
        orderBy: e.target.value,
      }),
    });
  }, [location, history]);

  return (
    <Select label="Order By" value={value} onChange={onChange}>
      <option value="name">Name</option>
      <option value="set">Set</option>
      <option value="layout">Layout</option>
      <option value="cmc">CMC</option>
      <option value="colors">Colors</option>
      <option value="colorIdentity">Color Identity</option>
      <option value="type">Type</option>
      <option value="rarity">Rarity</option>
      <option value="setName">Set Name</option>
    </Select>
  );
}
