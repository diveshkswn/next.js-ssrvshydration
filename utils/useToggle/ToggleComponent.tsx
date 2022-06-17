/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';
import Link from 'next/link';
import { useToggle } from './useToggle';
// https://usehooks-ts.com/react-hook/use-counter

export function ToggleComponent(props :any) {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <h1>Toggle Component</h1>
      <h2>{value?.toString()}</h2>
      <button onClick={() => { toggleValue(); }}>Toggle</button>
      <button onClick={() => { toggleValue(true); }}>Make True</button>
      <button onClick={() => { toggleValue(false); }}>Make False</button>
      <br />
      <br />
      <br />
      <Link href="/"><p style={{ color: 'blue', cursor: 'pointer' }}>Go to HomePage</p></Link>
    </div>

  );
}

export default React.memo(ToggleComponent);
