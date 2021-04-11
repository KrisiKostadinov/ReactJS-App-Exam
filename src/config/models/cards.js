import firebase from 'firebase';

import "firebase/firestore";

const db = firebase.firestore();
const storage = firebase.storage();

const cards = db.collection('cards');

export async function getAllCards() {
    return await cards.get();
}

export async function addCard(card) {
    return await cards.add(card);
}

export async function editCard(id, card) {
    return await cards.doc(id).set(card);
}

export async function getCardById(id) {
    return await cards.doc(id).get();
}

export async function deleteCardById(id) {
    await cards.doc(id).delete();
}

export async function deleteImageCardByUrl(imagePath) {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const desertRef = storageRef.child('images/' + imagePath);
    return desertRef.delete();
}

export async function getAllByUserIdCards(userId) {
    return cards.where('userId', '==', userId).get();
}

export function upload(file) {
    var metadata = {
        contentType: 'image/jpeg'
    };

    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
    return uploadTask;
}

export {
    storage, firebase as default
}