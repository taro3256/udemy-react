import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions'

class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderField(field) {
        const { input, label, type, meta: {touched, error } } = field

        return (
        <TextField 
        hintText={label}
        floatingLabelText={label}
        type={type} errorText={touched && error}
        {...input}
        fullWidth={true} />
        )
    }

    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        // pristineでボタンを押せない状態にできる
        // submittingはsubmitボタンが押されるとTrueになる
        // invalidはバリデーションエラーがあるとき、Trueになる
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>

                <RaisedButton label="submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
            </form>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "Enter a title, please."
    if (!values.body) errors.body = "Enter a body, please."

    return errors
}
const mapDispatchProps = ({ postEvent })

export default connect(null, mapDispatchProps)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
