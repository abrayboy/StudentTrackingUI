import React from 'react';

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        console.log("StudentList Constructor");
        this.state = {
            students: this.props.Students || []
        };
    }

    update() {
        let config = {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"admin"
            }
        };
        fetch('/api/students', config)
        .then(res => res.json())
        .then(res => this.setState({students:res}));
    }
    componentDidMount() {
            this.update();
    }

    componentDidUpdate() {
            this.update();
    }
    render() {

        let studentIds = this.state.students.map(student => student.StudentId);
        let list = studentIds.map(id => {
            return <tr key={id}>
                {id}
            </tr>
        });

        return <table className="student-container table table-striped">
            <thead>
                <tr>{"Student Id"}</tr>
                </thead>
            <tbody>
            {list}
            </tbody>
            </table>

    }
}