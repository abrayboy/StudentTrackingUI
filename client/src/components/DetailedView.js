import React from 'react';
import { Fields } from './../client-config/csv-fields';

export default class DetailedView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStudent: this.props.SelectedStudent || {}
        }
    }

    componentWillUnmount() {
        this.setState({ selectedStudent: {} });
    }

    getText(text) {
        let val = text + "";
        if (val === "true") return "Y";
        else if (val === "false") return "N";
        else return val;
    }

    render() {
        // If the Selected student is null (was deleted), display empty table.
        if (!this.props.SelectedStudent) return <table></table>;

        let index = 0;
        let attributes = Object.keys(this.props.SelectedStudent);
        let fieldColumn = Fields.map(field => <td>{field}</td>);
        let rows = fieldColumn.map(column => {
            console.log(this.props.SelectedStudent[attributes[index]]);
            let row = (<tr>
                {column}
                <td>{this.getText(this.props.SelectedStudent[attributes[index]])}</td>
            </tr>);
            //console.log(this.props.SelectedStudent["StudentId"]);
            index++;
            return row;
        });
        return <table>
            {rows}
        </table>
    }
}