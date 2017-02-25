import React from 'react';
import SpanCurrent from './SpanCurrent.jsx';

export default class LinkWithAnchor extends React.Component {
    render() {
        if (this.props.className == 'active') {
            return  <li className={this.props.className}>
                        <a href={this.props.href}>{this.props.linkText} <SpanCurrent/></a> 
                    </li>
        } else if (this.props.className == 'dropdown') {
            return  <li className={this.props.className}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{this.props.linkText} <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
        } else {
            return  <li className={this.props.className}>
                        <a href={this.props.href}>{this.props.linkText}</a>
                    </li>
        }
    }
}