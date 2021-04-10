import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { deleteCardById, getCardById } from '../config/models/cards';

export const Details = ({
    history
}) => {

    const { id } = useParams();

    const [card, setCard] = useState({});

    useEffect(() => {
        getCardById(id)
            .then((doc) => {
                if (doc.exists) {
                    setCard({ ...doc.data(), id: doc.id });
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleDeleteCard() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (<div className='fixed-top bg-light w-25 mx-auto p-4 shadow'>
                    <h1>Are you sure?</h1>
                    <p>You want to delete this card?</p>
                    <button className="btn btn-primary" onClick={onClose}>No</button>
                    <button className="mx-2 btn btn-danger"
                        onClick={() => {
                            handleClickDelete();
                            onClose();
                        }}
                    >
                        Yes, Delete it!
                </button>
                </div>)
            }
        });

        async function handleClickDelete() {
            try {
                await deleteCardById(id);
                history.push('/');
            } catch(error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="container">
            <div className="card w-100">
                <div className="row">
                    <img className="card-img-top col-md-4" src={card.url} alt="Card image cap" />
                    <div className="card-body col-md-8">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.content}</p>
                        <NavLink className="btn btn-warning" to={`/edit/${card.id}`}>Edit</NavLink>
                        <button className="mx-2 btn btn-danger" onClick={handleDeleteCard}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
