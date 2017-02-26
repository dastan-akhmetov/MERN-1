import React from 'react';

export default class Button extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let message = this.props.message;
        if (message) {
            console.log(message);
        } else {
            console.log('I have not received a message');
        }
    }
    render() {
        return <button className={this.props.className} onClick={this.handleClick}>{this.props.title}</button>
    }
}