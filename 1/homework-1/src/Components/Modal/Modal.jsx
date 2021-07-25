import React from 'react'
import "./Modal.scss"
import cross from "./cross.png";

export default function Modal(props) {
    return (
        <>
                {props.isOpen &&
                <div className="modal">
                <div className="modal__content">
                    <h1>{props.header}
                        {props.closeButton ? <img src={cross} alt="cross" width="22px" height="22px" onClick={props.onCancel}/> : null}
                    </h1>
                    <p>{props.text}</p>
                    {props.actions}
                </div>
            </div>
                }
            </>
    )
}
