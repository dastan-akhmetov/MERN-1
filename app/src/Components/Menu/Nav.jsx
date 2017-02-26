import React from 'react';
import NavbarBrand from './Navbar-Brand.jsx';
import Collapse from './Collapse.jsx';

export default class Nav extends React.Component {
    render() {
        return  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" 
                            className="navbar-toggle collapsed" 
                            data-toggle="collapse" 
                            data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavbarBrand href="#" name="MERN APP"/>
                        </div>
                        <Collapse/>
                    </div>
                </nav>
    }
}