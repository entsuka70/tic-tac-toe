import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import {Board} from './Board';

export const Game = ({classGame, classGameBoard, values}) => {
    return (
        <div className={classGame}>
            <div className={classGameBoard}>
                {<Board value={values}/>}
            </div>
        </div>
    );
};

Game.propTypes = {
    classGame: PropTypes.string,
    classGameBoard: PropTypes.string,
    values: PropTypes.oneOf(['', '○', 'O', 'X', '△']),
};

Game.defaultProps = {
    classGame: 'game',
    classGameBoard: 'game-board',
    values: '△',
};