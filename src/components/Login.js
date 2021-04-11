import React, { useState } from 'react'
import { Form, FormGroup, Spinner } from 'reactstrap'
import { login } from '../config/firebase';
import { setUserData } from '../config/utils';

export const Login = ({
    history
}) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        setIsSubmit(true);

        login(email, password)
            .then((userCredential) => {
                setUserData(userCredential);
                history.push('/');
            })
            .catch((error) => {
                setError(error.message);
                setIsSubmit(false);
            });
    }

    return (
        <div className="w-50 mx-auto">
            <title>Login</title>
            <h2>Login</h2>
            <Form onSubmit={handleLogin} className="form">
                {isSubmit ? <Spinner /> : ''}
                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <FormGroup className="form-group">
                    <label>Email</label>
                    <input autoFocus disabled={isSubmit} className="form-control" type="email" name="email" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Password</label>
                    <input disabled={isSubmit} className="form-control" type="password" name="password" />
                </FormGroup>
                <button disabled={isSubmit} className="btn btn-primary" type="submit">Login</button>
            </Form>
        </div>
    )
}
