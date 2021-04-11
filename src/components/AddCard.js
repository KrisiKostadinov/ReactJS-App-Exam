import React, { useState } from 'react'
import { Button, Form, FormGroup, Spinner } from 'reactstrap'
import { storage } from '../config/models/cards'

import { addCard, upload } from '../config/models/cards';
import { getUserData } from '../config/utils';

export default function AddCard({
    history
}) {
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState('');
    const [isUrl, setIsUrl] = useState(false);

    const [imageAsFile, setImageAsFile] = useState('');

    function onWithUploadBtn() {
        setIsUrl(!isUrl);
    }

    const handleImageAsFile = (event) => {
        const image = event.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmit(true);

        const title = event.target.title.value;
        const subtitle = event.target.subtitle.value;
        const content = event.target.content.value;
        let url = event.target.url?.value;

        if (title === '' || subtitle === '' || content === '') {
            return setError('All fields is required!');
        }

        if (imageAsFile) {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
            uploadTask.on('state_changed',
                (snapShot) => {
                    console.log(snapShot)
                }, (err) => {
                    console.log(err)
                }, () => {
                    storage.ref('images').child(imageAsFile.name).getDownloadURL()
                        .then(async (fireBaseUrl) => {
                            await saveData({ title, subtitle, content }, imageAsFile.name, fireBaseUrl);
                        });
                });
        } else {
            saveData({ title, subtitle, content, url });
        }
    }

    async function saveData(data, imagePath = '', fireBaseUrl = '') {
        const userCredential = getUserData();
        const card = await addCard({
            title: data.title,
            subtitle: data.subtitle,
            content: data.content,
            url: data.url ? data.url : fireBaseUrl,
            imagePath,
            userId: userCredential.user.uid,
        });

        history.push('/details/' + card.id);
    }

    return (<>
        <div className="w-50 mx-auto">
            <title>Create a new card!</title>
            <h2>Add Card</h2>
            {isSubmit ? <Spinner /> : ''}
            <Form onSubmit={handleSubmit} className="form">
                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <FormGroup className="form-group">
                    <label>Title</label>
                    <input autoFocus disabled={isSubmit} className="form-control" type="text" name="title" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Subtitle</label>
                    <input disabled={isSubmit} className="form-control" type="text" name="subtitle" />
                </FormGroup>
                <FormGroup className="form-group">
                    <label>Content</label>
                    <textarea disabled={isSubmit} className="form-control" type="text" name="content"></textarea>
                </FormGroup>
                <FormGroup className="form-group">
                    <div className="d-flex justify-content-between">
                        <label>Image URL</label>
                        <Button type="button" onClick={onWithUploadBtn} className="btn">
                            {isUrl ?
                                'Upload' :
                                'Url'}
                        </Button>
                    </div>
                    {isUrl ?
                        <input disabled={isSubmit} className="form-control" type="text" name="url" /> :
                        <input type="file" onChange={handleImageAsFile} disabled={isSubmit} className="form-control" name="file" />
                    }
                </FormGroup>
                <Button disabled={isSubmit} type="submit">Add Card</Button>
            </Form>
        </div>
    </>);
}
