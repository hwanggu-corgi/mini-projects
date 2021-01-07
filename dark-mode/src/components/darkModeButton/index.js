import './style.scss';
import { Component } from 'react';

class DarkModeButton extends Component {
    render() {
        return (
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        );
    }
}

export default DarkModeButton;
