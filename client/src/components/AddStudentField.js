import React from 'react';

export default class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Value: this.props.Value,
            OnChange: this.props.OnChange,
            Index: this.props.Index
        };
    }

    change(value) {
        this.setState({OnChange: value})
    }
    render() {
        return (
            <div className="labelGroup">
                <label className="fieldTitle">{this.props.FieldTitle}</label>
                <input value={this.state.Value} onChange= {() => this.change(this.state.OnChange)} key={this.state.Index}/>
            </div>
        )
    }
}