import {
    ADD_STUDENT, 
    EDIT_STUDENT, 
    DELETE_STUDENT,
    RECEIVE_STUDENTS } from './../actionTypes';


let initialState = {
    students: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_STUDENT:
            return {...state, value: action.value};
        case EDIT_STUDENT:
            return {...state, value: action.value};
        case DELETE_STUDENT:
            return {...state, value: action.value};
        case RECEIVE_STUDENTS:
            return {...state, value: action.value}  
    }
}