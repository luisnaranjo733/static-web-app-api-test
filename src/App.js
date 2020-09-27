import React, { useEffect } from 'react';

function App() {
  const value = 'World';
  useEffect(() => {
    console.log('running effect');
    const result = fetch(`/api/message`);
    console.log(result);
    result
      .then(r => r)
      .then(console.log)
      .catch(console.warn)
  });
  return <div>Hello {value}</div>;
}

export default App;
