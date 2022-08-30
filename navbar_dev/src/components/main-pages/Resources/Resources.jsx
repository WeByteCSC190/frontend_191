import React, { Component, useState, useEffect } from 'react';

/* Renders the content of the Resources page */
export default function ResourcesPage() {
    const [count, setCount] = useState(0);

  React.useEffect(() => {
    document.title = 'Count' + count;
    return () => {

    };
  }, [count]);

  return (
    <div>
      <h1>Resources</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Me + {count}
      </button>
    </div>
  );
}