import React from 'react';
import Field from './AddStudentField';

export default class AddStudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {
                id: "",
                coach_name: "",
                first_gen: "",
                race: "",
                disablility: "",
                classification: "",
                seven_target_schools: "",
                notified_student: "",
                scholarship_matching_complete: "",
                scholarship_essay: "",
                scholarship_deadlines: "",
                scholarship_essay_3: "",
                review_of_essay: "",
                completed_fasfsa: "",
                admission_deadlines: "",
                rejected: "",
                waitlisted: "",
                accepted: "",
                college_packet_complete: "",
                coach_final_review: "",
                lor: "",
                resume: "",
                interview: "",
                award: 0
            }
        }
    }

    onFieldChange(e, fieldName) {
        return () => {
            let newState = {};
            newState[fieldName] = e.target.value;
            this.setState(newState);
        }
       
    }

    render() {
        let fieldNames = Object.keys(this.state.student);
        console.log(fieldNames);
        let titles = fieldNames.map(name => {
            let parts = name.split('_');
            return parts.reduce((part1, part2) => `${part1} ${part2}`);
        });
        let index = 0;
        let studentForm = fieldNames.map(fieldName => {
            let labelGroup = <div className="labelGroup">
                <label className="labelTitle">{titles[index]}</label>
                <input type="text" className="studentAttribute" value={this.state[fieldName]} onChange={e => this.onFieldChange(e, fieldName)} key={"n" + index}/>
            </div>
            index++;
            return labelGroup;
        });
        console.log(titles);
    
        return (
            <div id="newStudentForm">
                {studentForm}
            </div>
            )
        }
}