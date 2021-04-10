import firebase from 'firebase';

import "firebase/firestore";

const db = firebase.firestore();

const cards = db.collection('cards');

export async function getAllCards() {
    return await cards.get();
}

export async function addCard(card) {
    return await cards.add(card);
}

export async function getCardById(id) {
    return await cards.doc(id).get();
}

export async function deleteCardById(id) {
    await cards.doc(id).delete();
}