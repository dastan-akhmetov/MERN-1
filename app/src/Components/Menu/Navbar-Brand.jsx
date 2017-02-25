import React from 'react';

export default class NavbarBrand extends React.Component {
    render() {
        return  <a className="navbar-brand" href={this.props.href}>
                    {this.props.name}
                </a>
    }
}