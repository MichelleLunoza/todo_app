import {initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAk3AOQsJ71Hgadd1CCiWuvPCLisw550Y0",
    authDomain: "todo-app-2103f.firebaseapp.com",
    databaseURL: "https://todo-app-2103f.firebaseio.com",
    projectId: "todo-app-2103f",
    storageBucket: "todo-app-2103f.appspot.com",
    messagingSenderId: "330925046031"
});

export const db = app.database();
export const todoRef = db.ref('todo');