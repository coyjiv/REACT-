import React, {Component} from 'react';
import "./Button.scss"
class Button extends Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick} style={{backgroundColor:this.props.backgroundColor}}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;