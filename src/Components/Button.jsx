import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
export default function Button({ className, outline, onClick, children }) {
    return (
        <button
            className={classNames('button', className, {
                'button--outline': outline,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func,
}

/*export default class Button extends Component {
    render() {
        return (
            <button
                className={classNames('button', {
                    'button--outline': this.props.outline,
                })}
            >
                {this.props.children}
            </button>
        )
    }
}*/
