import React from 'react';
import ReactDOM from 'react-dom';
import AddStudentForm from './AddStudentForm';
import swal from 'sweetalert';
import dto from './../dto/StudentDTO';

export default class PopUp {

    async show() {

        let container = document.createElement("div");
        ReactDOM.render(<AddStudentForm />, container);
        let el = container.firstChild;

        let popUp = await swal({
            title: "New Student",
            content: el,
            className: "swal-show",
            buttons: true
        });
        if (await popUp) {
            let attributeElements = document.getElementsByClassName("studentAttribute");
            let attributes = [...attributeElements]
                                .filter(input => !!input.value)
                                .map(input => input.value);
            attributes.unshift(null);
            let student = new (Function.prototype.bind.apply(dto.Student, attributes));
            let config = {
                method: "POST",
                body: JSON.stringify(student),
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":"admin"
                }
            }
            let ajax = await fetch('/api/add', config);
            let body = await ajax.json();
            return true;
        }
        return false;
    }

}