import React from 'react';

export default class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                id: !!this.props.Student ? this.props.Student.StudentId : "",
                coach_name: !!this.props.Student ? this.props.Student.CoachName : "",
                first_gen: !!this.props.Student ? this.props.Student.FirstGen : "",
                race: !!this.props.Student ? this.props.Student.Race : "",
                disablility: !!this.props.Student ? this.props.Student.Disablility : "",
                classification: !!this.props.Student ? this.props.Student.Classification : "",
                seven_target_schools: !!this.props.Student ? this.props.Student.SevenTargetSchools : "",
                notified_student: !!this.props.Student ? this.props.Student.NotifiedStudent : "",
                scholarship_matching_complete: !!this.props.Student ? this.props.Student.ScholarshipMatchingComplete : "",
                scholarship_essay: !!this.props.Student ? this.props.Student.ScholarshipEssay : "",
                scholarship_deadlines: !!this.props.Student ? this.props.Student.ScholarshipDeadlines : "",
                scholarship_essay_3: !!this.props.Student ? this.props.Student.ScholarshipEssay3 : "",
                review_of_essay: !!this.props.Student ? this.props.Student.ReviewOfEssay : "",
                college_application_Deadlines: !!this.props.CollegeApplicationDeadlines ? this.props.Student.CollegeApplicationDeadlines : "",
                completed_fasfsa: !!this.props.Student ? this.props.Student.CompletedFafsa : "",
                admission_deadlines: !!this.props.Student ? this.props.Student.AdmissonDealines : "",
                rejected: !!this.props.Student ? this.props.Student.Rejected : "",
                waitlisted: !!this.props.Student ? this.props.Student.Waitlisted : "",
                accepted: !!this.props.Student ? this.props.Student.Accepted : "",
                college_packet_complete: !!this.props.Student ? this.props.Student.CoachFinalReview : "",
                coach_final_review: !!this.props.Student ? this.props.Student.CoachFinalReview : "",
                lor: !!this.props.Student ? this.props.Student.Lor : "",
                resume: !!this.props.Student ? this.props.Student.Resume : "",
                interview: !!this.props.Student ? this.props.Student.Interview : "",
                award: !!this.props.Student ? this.props.Student.Award : 0
        }
    }

    onFieldChange(e, fieldName) {
            let newState = {};
            newState[fieldName] = e.target.value;
            this.setState(newState);
    }

    toProperCase(word) {
        let letters = [...word]
        letters[0] = letters[0].toString().toUpperCase();
        return letters.join('');
    }

    render() {
        let fieldNames = Object.keys(this.state);
        let titles = fieldNames.map(name => {
            let parts = name.split('_');
            if (parts.length === 1) return this.toProperCase(parts[0]);
            else return parts.reduce((part1, part2) => `${this.toProperCase(part1)} ${this.toProperCase(part2)}`
            )});
        let index = 0;
        let columnCount = 1;
        let studentForm = fieldNames.map(fieldName => {
            if (columnCount > 3) columnCount = 1;
            let column = "c" + columnCount;
            let labelGroup = <div key={"K_" + fieldName} className={`w3-container ${column}`}>
                <label key={fieldName} className="labelTitle">{titles[index]}</label>
                <input type="text" className="w3-input studentAttribute" value={this.state[fieldName]} onChange={e =>{ 
                    this.onFieldChange(e, fieldName);
                }
                    } key={"n" + index}/>
            </div>
            index++;
            column++;
            return labelGroup;
        });
    
        return (
            <div id="studentForm">
                {studentForm}
            </div>
            )
        }
}