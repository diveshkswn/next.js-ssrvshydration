/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Link from 'next/link';
import { useTimeout } from './useTimeout';
// https://usehooks-ts.com/react-hook/use-counter

export function TimeoutComponent(props :any) {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 3000);
  return (
    <div>
      <h1>TimeoutComponent</h1>
      <h2>{count}</h2>
      <button onClick={() => { setCount((pre) => pre + 1); }}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Remove Timeout</button>
      <br />
      <br />
      <br />
      <Link href="/"><p style={{ color: 'blue', cursor: 'pointer' }}>Go to HomePage</p></Link>
    </div>

  );
}

export default React.memo(TimeoutComponent);
