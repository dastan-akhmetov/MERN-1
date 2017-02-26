import React from 'react';
import LoginForm from './../Login/LoginForm.jsx';

export default class Container extends React.Component {
    render() {
        return  <div className="container">
                    <div className="col-lg-4">
                        <LoginForm/>
                    </div>
                </div>
    }
}