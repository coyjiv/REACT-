import React from 'react'
import "./Button.scss"
export default function Button(props) {
    return (
            <button className={props.className} onClick={props.onClick} style={{backgroundColor:props.backgroundColor}}>
                {props.text}
            </button>
    )
}