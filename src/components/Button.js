import React from 'react'
import '../style/button.css'
import PropTypes from 'prop-types'


const Button = ({variant, text, action}) => {
    return (
        <div>
            <button className={`btn btn-${variant}`} onClick ={action}>{text} </button>
        </div>
    )
}
Button.protoTypes= {
    variant: PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    action : PropTypes.func
}

export default Button
