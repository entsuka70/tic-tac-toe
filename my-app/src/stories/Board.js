import React from 'react';
import PropTypes from 'prop-types';
import {Square} from './Square';
import '../index.css';

export const Board = ({classBoard, classSquare, value}) => {
    return (
        <div>
            <div className={classBoard}>
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
            </div>
            <div className={classBoard}>
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
            </div>
            <div className={classBoard}>
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
                {<Square className={classSquare} label={value}/>}
            </div>
        </div>
    );
};

Board.propTypes = {
    classBoard: PropTypes.string,
    classSquare: PropTypes.string,
    value: PropTypes.oneOf(['', '○', 'O', 'X', '△']),
};

Board.defaultProps = {
    classBoard: 'board-row',
    value: '',
};