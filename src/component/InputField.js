import React from 'react'
import { FaCommentsDollar } from 'react-icons/fa'

const InputField = (props) => {
    return (
        <input
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />

    )
}


export default InputField