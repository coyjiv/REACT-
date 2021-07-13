import React, {Component} from 'react';

class Button extends Component {
    render() {
        console.log(this.props);
        return (
            <button onClick={()=>this.props.onClick}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;