import React from 'react';
import FormGroup from './FormGroup.jsx';
import SubmitButton from './SubmitButton.jsx';

export default class SearchForm extends React.Component {
    render() {
        return  <form className="navbar-form navbar-left" role="search">
                    <FormGroup/>
                    <SubmitButton text="Search"/>
                </form>
    }
} 