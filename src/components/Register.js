import React, { useState } from 'react'
import { Form, FormGroup } from 'reactstrap'
import { register } from '../config/firebase';
import { setUserData } from '../config/utils';

export const Register = ({
    history
}) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState('');

    function handleRegister(event) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if(password !== confirmPassword) {
            return setError('Password don\'t match!');
        }

        setIsSubmit(true);

        register(email, password)
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
            <title>Register</title>
            <h2>Register</h2>
            <Form onSubmit={handleRegister} className="form">
            {error ? <div className="alert alert-danger">{error}</div> : ''}
                <FormGroup className="form-group">
                    <label>Email</label>
                    <input autoFocus disabled={isSubmit} className="form-control" type="email" name="email" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Password</label>
                    <input disabled={isSubmit} className="form-control" type="password" name="password" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Confirm Password</label>
                    <input disabled={isSubmit} className="form-control" type="password" name="confirmPassword" />
                </FormGroup>
                <button disabled={isSubmit} className="btn btn-primary" type="submit">Register</button>
            </Form>
        </div>
    )
}
