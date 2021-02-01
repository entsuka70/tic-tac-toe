import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export const Square = ({className, label, ...props}) => {
    return (
        <button
            className={className}
            {...props}
        >
            {label}
        </button>
    );
};

Square.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOf(['', '○', 'O', 'X', '△', '丁']),
};

Square.defaultProps = {
    className: 'square',
    label: '',
};