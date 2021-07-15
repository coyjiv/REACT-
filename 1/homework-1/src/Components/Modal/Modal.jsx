import React, {Component} from 'react';
import "./Modal.scss"
import cross from "./cross.png";
class Modal extends Component {
    render() {
        return (
            <>
                {this.props.isOpen &&
                <div className="modal">
                <div className="modal__content">
                    <h1>{this.props.header}
                        { this.props.closeButton ? <img src={cross} alt="cross" width="22px" height="22px" onClick={this.props.onCancel}/> : null}
                    </h1>
                    <p>{this.props.text}</p>
                    {this.props.actions}
                </div>
            </div>
                }
            </>
        );
    }
}
export default Modal;