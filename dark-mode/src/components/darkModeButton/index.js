import './style.scss';
import { Component } from 'react';

class DarkModeButton extends Component {

    handleToggle = e => {
        if(e.target.checked) {
            document.body.classList.add("manual-dark-mode-on");
        } else {
            document.body.classList.remove("manual-dark-mode-on");
        }
    }

    render() {
        return (
            <label className="switch">
                <input type="checkbox" onClick={this.handleToggle}/>
                <span className="slider round"></span>
            </label>
        );
    }
}

export default DarkModeButton;
