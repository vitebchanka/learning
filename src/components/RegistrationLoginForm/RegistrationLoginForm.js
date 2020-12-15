import React, {Component} from 'react';
import './RegistrationLoginForm.scss'
import FloatingLabel from "floating-label-react";
import "floating-label-react/styles.css";
export default class RegistrationLoginForm extends Component {
    render() {
        return (
            <div>
                <div className="row center-lg registration">{this.props.notRegistered ? "Регистрация на сайте" : "Вход"}</div>
                <FloatingLabel
                    className="row"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    value=""
                    onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
                />;
            </div>
        );
    }
};