import React from 'react';
import LinkWithAnchor from './LinkWithAnchor.jsx';
import SearchForm from './SearchForm.jsx';
import NavbarRight from './Navbar-Right.jsx';

export default class Collapse extends React.Component {
    render() {
        return  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <LinkWithAnchor className="active" href="#" linkText="Somewhere" SpanCurrent="true"/>
                        <LinkWithAnchor href="#" linkText="Somewhere 2"/>
                        <LinkWithAnchor className="dropdown" href="#" linkText="Somewhere 3"/>
                    </ul>
                    <SearchForm/>
                    <NavbarRight/>
                </div>
    }
}