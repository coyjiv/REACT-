import React, {Component} from 'react';
import "./Modal.scss"
import Button from "../Button/Button";
class Modal extends Component {
    render() {
        return (
            <>
                {this.props.isOpen &&
                <div className="modalGlobal">
                <div className="modalBody">
                    <p className="modalHeading">{this.props.header}</p>
                <p>{this.props.text}</p>
                    {this.props.actions}
                </div>
                <Button text="Ok" className="btn-ok" onClick={this.props.onClick}/>
                <Button text="Cancel" className="btn-cancel" onClick={this.props.onCancel}/>

            </div>
                }
            </>
        );
    }
}
export default Modal;