import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenu from './ContextMenu';
import DetailedView from './DetailedView';

const config = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "admin"
    }
};

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: this.props.Students || []
        };
    }

    update() {
        fetch('/api/students', config)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ students: res })
            });
    }

    componentDidUpdate(prevStudents) {
        if (this.props.Students.length !== prevStudents.Students.length)
            this.update();
    }

    showContextMenu(e, student) {
        let container = document.createElement("div");
        container.id = "context-container";
        document.body.appendChild(container);
        ReactDOM.render(<ContextMenu X={e.clientX} Parent={this} Y={e.clientY} SelectedStudent={student} />,
            container);
        window.contextMenuOpen = true;
    }

    updateDetailView(student) {
        console.log(student);
        ReactDOM.render(<DetailedView SelectedStudent={student} />, document.getElementById("detailSection"))
    }

    render() {
        let list = this.state.students.map(student => {
            return <div className="student-list-item" key={student.StudentId + "_t"} id={student.StudentId} onClick={this.updateDetailView.bind(this, student)}>
                <span className="student-list-item-label" key={student.StudentId + "_m"}>{student.StudentId}</span>
                <div className="options-button" key={student.StudentId + "_b"} onClick={e => this.showContextMenu(e, student)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        });

        return list;

    }
}