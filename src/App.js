import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {alert("aaaaburi")}} />
    </React.Fragment>
  )
}

export default App;
