import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

//const mapDispatchProps = ({ postEvents })

export default connect(null, null)(EventsNew)
