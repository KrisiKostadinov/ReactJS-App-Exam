import React from 'react'
import { Form, FormGroup } from 'reactstrap'

export const Register = () => {
    return (
        <div className="w-50 mx-auto">
            <h2>Register</h2>
            <Form className="form">
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
