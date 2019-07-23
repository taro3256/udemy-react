import React from 'react';

function App() {
  const profiles = [
    {name: "taro", age: 10},
    {name: "hanako", age: 5},
    {name: "noname"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>こんにちは！ {props.name}！ 君は{props.age}歳！</div>
}

User.defaultProps = {
  age: 1
}

export default App;
