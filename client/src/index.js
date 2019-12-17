import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PopUp from './components/PopUp';
import StudentList from './components/StudentList';
import SettingsMenu from './components/SettingsMenu';

ReactDOM.render(<App />, document.getElementById('root'));

let fetchStudents = async e => {

    let config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "admin"
        }
    };
    let ajax = await fetch('/api/students', config);
    let students = await ajax.json();
    console.log(students);
    ReactDOM.render(<StudentList Students={students} />, document.getElementById("student-list"));
};

let getAjaxConfig = file => {
    return {
        method: "POST",
        body: file,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": "admin"
        }
    }
}

fetchStudents();

document.getElementById("add-student-button").addEventListener("click", async e => {
    let popUp = new PopUp();
    let result = await popUp.show();
    if (result) await fetchStudents();
});

document.addEventListener("click", e => {
    if (!!window.contextMenuOpen) {
        let menu = document.getElementById("student-context-menu");
        menu.parentElement.removeChild(menu);
        window.contextMenuOpen = false;
    }
    if (!!window.settingsMenuOpen) {
        let menu = document.getElementById("temp-container");
        menu.style.display = "none";
        window.settingsMenuOpen = false;
    }
});

document.getElementById("settings-container").addEventListener("click", e => {
    e.preventDefault()
    e.stopPropagation()
    if (document.getElementById("temp-container")) {
        document.getElementById("temp-container").style.display = "block";
    }
    else {
        let container = document.createElement("div");
        document.body.appendChild(container);
        container.id = "temp-container";
        ReactDOM.render(<SettingsMenu X={e.clientX} Y={e.clientY} />, container);
    }
    let file = document.getElementById("uploadFile");
    file.onchange = () => {
        e.stopPropagation();
        e.preventDefault();
        console.log(new Date())
        const files = document.querySelector('[type=file]').files
        fetch("/api/upload", getAjaxConfig(files[0]))
            .then(res => res.json())
            .then(res => { if (res) document.cookie = `csvFileName=${files[0].name}`; return res;})
            .then(async res => { console.log(res); return await fetchStudents() })
            .then(async res => { 
                let menu = document.getElementById("temp-container");
                menu.parentNode.removeChild(menu);
                return 1; 
            });
    };
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
