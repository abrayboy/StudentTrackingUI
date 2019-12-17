import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PopUp from './components/PopUp';
import StudentList from './components/StudentList';

ReactDOM.render(<App />, document.getElementById('root'));

let fetchStudents = async e => {

    let config = {
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":"admin"
        }
    };
    let ajax = await fetch('/api/students', config);
    let students = await ajax.json();
    ReactDOM.render(<StudentList />, document.getElementById("student-list"));
};
fetchStudents();

document.getElementById("add-student-button").addEventListener("click", async e => {

    let popUp = new PopUp();
    let result = await popUp.show();
    console.log(result);
    if (result) ReactDOM.render(<StudentList/>, document.getElementById("student-list"));
  
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
