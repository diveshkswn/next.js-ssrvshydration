import React from 'react';

function Layout(props : {children : React.ReactNode}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Custom React Hooks</h1>
      {props.children}
    </div>
  );
}

export default React.memo(Layout);
