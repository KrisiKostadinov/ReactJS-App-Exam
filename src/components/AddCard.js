import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

export default function AddCard({
    history
}) {
    function handleSubmit(event) {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;
        const url = event.target.url.value;
        
        console.log(title, content, url);

        fetch('http://localhost:3030/cards', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, url })
        }).then(() => {
            return history.push('/');
        });
    }

    return (<>
        <div className="w-50 mx-auto">
        <h2>Add Card</h2>
            <Form onSubmit={handleSubmit} className="form">
                <FormGroup className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" name="title" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Content</label>
                    <input className="form-control" type="text" name="content" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Image URL</label>
                    <input className="form-control" type="text" name="url" />
                </FormGroup>
                <Button type="submit">Add Card</Button>
            </Form>
        </div>
    </>);
}
