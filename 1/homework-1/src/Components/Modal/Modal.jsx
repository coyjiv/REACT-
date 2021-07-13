import React, {Component} from 'react';
import "./Modal.scss"
import Button from "../Button/Button";
class Modal extends Component {
    // state = {
    //     isOpen:false,
    // }

    // render() {
    //     // if(this.state.isOpen===true){
    //     return (
    //         <>
    //             {this.props.isOpen &&
    //             <div className="modalBody">
    //             <div className="modalHeading">Do you want to delete this file?
    //                 </div>
    //             {/*<div className="modalBody">*/}
    //             <p>Once you delete this file, it won’t be possible to undo this action.</p>
    //             <p>Are you sure you want to delete it?</p>
    //             {/*</div>*/}
    //             <Button>Ok</Button>
    //             <Button>Cancel</Button>
    //
    //         </div>
    //             }
    //         </>
    //     );
    // }
    render() {
        return (
            <>
                {this.props.isOpen &&
                <div className="modal">
                    <div className="modalBackDrop" onClick={this.props.onCancel}/>
                    <div className="modalDialog">
                        <div className="modalContent">
                            <div className="modalHeader">
                                <h3 className="modalTitle">{this.props.title}</h3>
                                <Button name="x" className="close" onClick={this.props.onCancel}/>
                            </div>
                            <div className="modal-body">
                                <div className="ModalBody">
                                    {this.props.children}
                                </div>
                            </div>
                            <div className="ModalFooter">
                                <Button onClick={this.props.onCancel} className="btn secondaryButton" name='Cancel'/>
                                <Button className='btn primaryButton' name='Submit'/>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </>
        )
    }
        // else {
        // return null;
        // }
    // }
}

export default Modal;