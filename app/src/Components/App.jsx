import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Menu/Nav.jsx';
import Container from './General/Container.jsx';

class App extends React.Component {
    render() {
        return  <div>
                    <Nav/>
                    <Container/>
                </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));