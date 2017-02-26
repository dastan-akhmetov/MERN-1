import React from 'react';
import InputText from './InputText.jsx';
import Button from './Button.jsx';

export default class LoginForm extends React.Component {
    render() {
        return  <div className={this.props.className}>
                    <div className="form-group">
                        <InputText className="form-control" placeholder="Login" type="text"/>
                    </div>
                    <div className="form-group">
                        <InputText className="form-control" placeholder="Password" type="password"/>
                    </div>
                    <div className="form-group">
                        <Button title="Login" className="btn btn-primary" message="haha"/>
                    </div>
                </div>
    }
}