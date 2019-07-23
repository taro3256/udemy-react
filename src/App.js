import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {alert("aaaaburi")}} />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>こんにちは！</div>
}

export default App;
