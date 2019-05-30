import { useState, useCallback, ChangeEvent } from 'react';

export function useInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);
  return [value, onChange] as const;
}
