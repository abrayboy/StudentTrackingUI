import React from 'react';
import ContextMenu from './ContextMenu';

export default class SettingsMenu extends ContextMenu {
    
    submit(e) {
        e.stopPropagation();
        e.preventDefault();
        const files = document.querySelector('[type=file]').files
        fetch("/api/upload", this.getAjaxConfig(files[0]))
            .then(res => res.json())
            .then(res => { if (res) document.cookie = `csvFileName=${files[0].name}`; });

    }

    getAjaxConfig = file => {
        return {
            method: "POST",
            body: file,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "authorization": "admin"
            }
        }
    }

    render() {
        let css = {
            position: "absolute",
            left: `${this.props.X}px`,
            top: `${this.props.Y}px`
        };
        return (<div id="settings-menu" style={css} className="context-menu">
            <div className="context-menu-item">
                    <input id="uploadFile" type="file" accept=".csv,.txt" />
            </div>
            <div className="context-menu-item">
                {"Sync"}
            </div>
        </div>);
    }
}