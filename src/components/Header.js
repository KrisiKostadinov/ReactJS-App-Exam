import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { logout } from '../config/firebase';
import { clearUserData } from '../config/utils';

export default function Header({ user, isAuth }) {

    const history = useHistory();

    function handleLogout() {
        logout().then(() => {
            clearUserData();
            history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Cards App</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {isAuth ?
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add">Add Card</NavLink>
                            </li> :
                            ''}
                    </ul>
                </div>
                <div className="collapse navbar-collapse">
                    {isAuth ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">Hello, {user.email}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-danger" to="#" onClick={handleLogout}>Logout</NavLink>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav >
    );
}
