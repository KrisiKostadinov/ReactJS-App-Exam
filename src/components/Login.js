import React from 'react'
import { Form, FormGroup } from 'reactstrap'
import { login, saveUserInfo } from '../config/firebase';

export const Login = ({
    history
}) => {

    function handleLogin (event) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then((userCredential) => {
                saveUserInfo(userCredential);
                history.push('/');
            });
    }

    return (
        <div className="w-50 mx-auto">
            <h2>Login</h2>
            <Form onSubmit={handleLogin} className="form">
                <FormGroup className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" />
                </FormGroup>
                <button type="submit">Login</button>
            </Form>
        </div>
    )
}
