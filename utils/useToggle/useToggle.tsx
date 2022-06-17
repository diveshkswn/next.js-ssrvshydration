/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const useToggle = (defaultValue : boolean):[value : boolean, toggleValue : ((toggleVal?:boolean) => void)] => {
  const [value, setValue] = useState(defaultValue);
  function toggleValue(toggleVal? : boolean) {
    setValue((preVal) => (typeof toggleVal === 'boolean' ? toggleVal : !preVal));
  }
  return [value, toggleValue];
};
