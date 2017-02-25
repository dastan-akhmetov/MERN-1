import React from 'react';
import ReactDOM from 'react-dom';
import NavbarBrand from './Navbar-Brand.jsx';
import Collapse from './Collapse.jsx';

class Nav extends React.Component {
    render() {
        return  <div>
                    <nav className="navbar navbar-default">
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
                </div>
    }
}

ReactDOM.render(<Nav/>, document.getElementById('app'));