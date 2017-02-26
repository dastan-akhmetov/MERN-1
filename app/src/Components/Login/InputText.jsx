import React from 'react';

export default class InputText extends React.Component {
    render() {
        return <input type={this.props.type} name={this.props.name} id={this.props.id} className={this.props.className} placeholder={this.props.placeholder} value={this.props.value}/>
    }
}