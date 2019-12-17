import React from 'react';
import ReactDOM from 'react-dom';
import StudentForm from './StudentForm';
import swal from 'sweetalert';
import dto from './../client-dto/StudentDTO';

export default class PopUp {

    async show(_student) {

        let container = document.createElement("div");
        if (!!_student) ReactDOM.render(<StudentForm Student={_student} />, container);
        else ReactDOM.render(<StudentForm />, container);
        let el = container.firstChild;

        let popUp = await swal({
            title: !!_student ? "Edit Student" : "New Student",
            content: el,
            className: "swal-show",
            buttons: true
        });
        if (await popUp) {
            let attributeElements = document.getElementsByClassName("studentAttribute");
            //console.log(attributeElements)
            let attributes = [...attributeElements]
                .map(input => input.value);
            attributes.unshift(null);
            console.log(attributes);
            let student = new (Function.prototype.bind.apply(dto.Student, attributes));
            console.log(student);
            let config = {
                method: !!_student ? "PUT" : "POST",
                body: JSON.stringify(student),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "admin"
                }
            }
            let url = !!_student ? '/api/edit' : '/api/add';
            let ajax = await fetch(url, config);
            let body = await ajax.json();
            return body;
        }
        return false;
    }

}