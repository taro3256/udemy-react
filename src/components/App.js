import React, {Component} from 'react';
//import PropTypes from 'prop-types';

/*function App() {
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
}*/

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

handlePlusButton = () => {
  this.setState({count: this.state.count + 1})
}

handleMinusButton = () => {
  this.setState({count: this.state.count - 1})
}

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    )
  }
}

export default App;
