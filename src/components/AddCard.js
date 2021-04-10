import React, { useState } from 'react'
import { Button, Form, FormGroup } from 'reactstrap'
import { addCard } from '../config/models/cards';
import { getUserData } from '../config/utils';

export default function AddCard({
    history
}) {
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;
        const url = event.target.url.value;

        if(title == '' || content == '' || url == '') {
            return setError('All fields is required!');
        }

        setIsSubmit(true);

        const userCredential = getUserData();

        try {
            const card = await addCard({
                title,
                content,
                url,
                userId: userCredential.user.uid
            });

            console.log(card);

            history.push('/details/' + card.id);
        } catch(error) {
            setIsSubmit(false);
            setError(error.message);
            console.log(error);
        }
    }

    return (<>
        <div className="w-50 mx-auto">
        <h2>Add Card</h2>
            <Form onSubmit={handleSubmit} className="form">
                <FormGroup className="form-group">
                    <label>Title</label>
                    <input disabled={isSubmit} className="form-control" type="text" name="title" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Content</label>
                    <input disabled={isSubmit} className="form-control" type="text" name="content" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Image URL</label>
                    <input disabled={isSubmit} className="form-control" type="text" name="url" />
                </FormGroup>
                <Button disabled={isSubmit} type="submit">Add Card</Button>
            </Form>
        </div>
    </>);
}
