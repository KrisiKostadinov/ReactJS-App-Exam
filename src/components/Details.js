import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { deleteCardById, getCardById, deleteImageCardByUrl } from '../config/models/cards';
import { getUserData } from '../config/utils';
import { Spinner } from 'reactstrap';

export const Details = ({
    history
}) => {

    const { id } = useParams();
    const [card, setCard] = useState({
        title: '',
        content: '',
        url: '',
        imagePath: ''
    });
    const [isMyCard, setIsMyCard] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function cancel() {
        history.goBack();
    }

    useEffect(() => {
        const userCreadential = getUserData();

        async function getData() {
            try {
                const doc = await getCardById(id);
                return doc;
            } catch (error) {
                console.log(error);
            }
        }

        getData()
            .then((doc) => {
                setIsLoading(false);

                if (doc.exists) {
                    setCard({ ...doc.data(), id: doc.id });
                    setIsMyCard(doc.data().userId === userCreadential?.user.uid);
                } else {
                    console.log('No such document!');
                }
            });

    }, [id]);

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
                setIsLoading(true);
                await deleteCardById(id, card.url);
                await deleteImageCardByUrl(card.imagePath);
            } catch (error) {
                console.log(error.message);
            }

            history.push('/');
        }
    }

    return (
        <div className="container">
            {isLoading ? <Spinner /> : ''}
            <title>{card.title}</title>
            <div className="card w-100 mt-4">
                <div className="row">
                    <img className="card-img-top col-md-4" src={card.url} alt="Card image cap" />
                    <div className="card-body col-md-8">
                        <h5 className="card-title">{card.title}</h5>
                        <h6 className="card-subtitle text-muted my-2">{card.subtitle}</h6>
                        <p className="card-text">{card.content}</p>
                        {isMyCard ?
                            <div className="btn-group">
                                <NavLink className="btn btn-warning" to={`/edit/${card.id}`}>Edit</NavLink>
                                <button className="btn btn-danger" onClick={handleDeleteCard}>Delete</button>
                            </div> :
                            ''}
                        <button className="mx-2 btn btn-light" onClick={cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
