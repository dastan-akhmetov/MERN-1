import React from 'react';
import LinkWithAnchor from './LinkWithAnchor.jsx';

export default class NavbarRight extends React.Component {
    render() {
        return  <ul className="nav navbar-nav navbar-right">
                    <LinkWithAnchor href="#" linkText="Right 1"/>
                </ul>
    }
}