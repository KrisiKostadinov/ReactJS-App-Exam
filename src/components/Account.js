import React, { useState } from 'react'
import { getUserData } from '../config/utils';
import CardsList from './CardsList';

export const Account = () => {
    const userCredential = getUserData();
    const [userId, setUserId] = useState(userCredential.user.uid);

    return (
        <div className="container">
            <h2 className="text-center">My Cards</h2>
            <div className="row mt-4">
                <CardsList userId={userId} />
            </div>
        </div>
    )
}
