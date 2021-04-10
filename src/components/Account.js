import React from 'react'
import { getUserData } from '../config/utils';
import CardsList from './CardsList';

export const Account = () => {
    const userCredential = getUserData();

    return (
        <div className="container">
            <title>Hello, {userCredential.user.email}</title>
            <h2 className="text-center">My Cards</h2>
            <div className="row mt-4">
                <CardsList userId={userCredential.user.uid} />
            </div>
        </div>
    )
}
