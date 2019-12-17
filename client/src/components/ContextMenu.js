import React from 'react';
import PopUp from './PopUp';

export default class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStudent: this.props.SelectedStudent,
            x: this.props.X,
            y: this.props.Y
        }
    }

    deleteStudent() {
        fetch("/api/delete", this.getAjaxConfig("DELETE"))
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => this.props.Parent.update())
            .then(() => this.props.Parent.updateDetailView())
    }

    editStudent() {
        let popUp = new PopUp();
        popUp.show(this.state.selectedStudent)
            .then(json => {
                if (json) {
                    this.props.Parent.update();
                    return json;
                }
                return false;
            })
            .then(apiResponse => {
                if (apiResponse) {
                    this.props.Parent.updateDetailView(apiResponse.response);
                }
            });
    }

    getAjaxConfig(httpMethod) {
        return {
            method: httpMethod,
            body: JSON.stringify(this.state.selectedStudent),
            headers: {
                "Content-Type": "application/json",
                "authorization": "admin"
            }
        }
    }

    render() {
        let css = {
            position: "absolute",
            left: `${this.state.x}px`,
            top: `${this.state.y}px`
        };
        return (<div id="student-context-menu" class="context-menu" style={css} >
            <div className="context-menu-item" onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                this.editStudent()
            }
            }>Change</div>
            <div className="context-menu-item" onClick={this.deleteStudent.bind(this)} >Delete</div>
        </div>
        );

    }


}