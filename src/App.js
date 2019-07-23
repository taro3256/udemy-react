import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "taro", age: 10},
    {name: "hanako", age: 5},
    {name: "noname", age: 100}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
