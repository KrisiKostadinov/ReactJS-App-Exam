import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { getUserInfo, logout, removeUserInfo } from '../config/firebase';

export default function Header({ user, isAuth }) {

    const history = useHistory();

    console.log(getUserInfo());
    
    function handleLogout() {
        logout().then(() => {
            removeUserInfo();
            history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">Add Card</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse">
                    {isAuth ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">Hello, {user.email}</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" onClick={handleLogout}>Logout</a>
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
