import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Button, Form, FormGroup } from 'reactstrap'

import { editCard, getCardById } from '../config/models/cards';
import { getUserData } from '../config/utils';

export const EditCard = () => {

    const history = useHistory();
    const { id } = useParams();
    const [isSubmit, setIsSubmit] = useState(true);
    const [error, setError] = useState('');
    const [card, setCard] = useState({
        title: '',
        subtitle: '',
        content: '',
        url: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        setIsSubmit(false);

        async function getData() {
            try {
                return await getCardById(id);
            } catch (error) {
                console.log(error);
            }
        }

        getData().then((doc) => {
            if (doc.exists) {
                setCard({ ...doc.data(), id: doc.id });
            } else {
                console.log('No such document!');
            }
        });
    }, [id]);

    function cancel() {
        history.goBack();
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;
        const url = event.target.url.value;
        const subtitle = event.target.subtitle.value;

        if (title === '' || content === '' || url === '') {
            return setError('All fields is required!');
        }

        setIsSubmit(true);

        const userCredential = getUserData();

        try {
            await editCard(id, {
                title,
                subtitle,
                content,
                url,
                userId: userCredential.user.uid
            });

            history.push('/details/' + id);
        } catch (error) {
            setIsSubmit(false);
            setError(error.message);
            console.log(error);
            setError(error.message);
        }
    }

    return (
        <div className="w-50 mx-auto">
            <title>Edit Card - {card.title}</title>
            <h2>Edit Card</h2>
            {isLoading ? <h2>Loading...</h2> : ''}
            <Form onSubmit={handleSubmit} className="form">
                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <FormGroup className="form-group">
                    <label>Title</label>
                    <input autoFocus disabled={isSubmit} className="form-control" defaultValue={card.title} type="text" name="title" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Subtitle</label>
                    <input disabled={isSubmit} className="form-control" type="text" defaultValue={card.subtitle} name="subtitle" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Content</label>
                    <input disabled={isSubmit} className="form-control" defaultValue={card.content} type="text" name="content" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Image URL</label>
                    <input disabled={isSubmit} className="form-control" defaultValue={card.url} type="text" name="url" />
                </FormGroup>
                <div className="btn-group">
                    <Button className="btn btn-warning" disabled={isSubmit} type="submit">Edit Card</Button>
                    <Button className="btn btn-danger" onClick={cancel} >Cancel</Button>
                </div>
            </Form>
        </div>
    )
}
