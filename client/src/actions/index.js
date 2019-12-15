import {
    ADD_STUDENT, 
    EDIT_STUDENT, 
    DELETE_STUDENT,
    RECEIVE_STUDENTS } from './../actionTypes';

import {
    GET_CONFIG,
    POST_CONFIG,
    PUT_CONFIG,
    DELETE_CONFIG } from './../ajax-configurations';

// Add all action objects here where type is the action's corresponding -
// action type and value is a DTO
// Add additional action tyepes to the import line.
const addStudentAction = student => {
    return {
        type: ADD_STUDENT,
        value: student
    }
};

export const addStudent = student => dispatch => {
    fetch('/api/add', POST_CONFIG(student))
    .then(response => response.json())
    .then( res => dispatch(addStudentAction(res)))
};