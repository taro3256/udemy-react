import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component{
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { this.props.value }</div>
        <button onClick={this.props.increment}>+1</button>
        <button onClick={this.props.decrement}>-1</button>
      </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
/*const mapDispatchProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})*/

const mapDispatchProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchProps)(App)
