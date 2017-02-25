import React from 'react';

export default class SubmitButton extends React.Component {
    render() {
        return <button type="submit" className="btn btn-default">{this.props.text}</button>
    }
}