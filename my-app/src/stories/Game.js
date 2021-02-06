import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import {Board} from './Board';

export const Game = ({classGame, classGameBoard, values, classInfo, classStatus, status, history}) => {
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move:
            'Go to game start';
        return (
            <li>
                <button>{desc}</button>
            </li>
        )
    });
    
    return (
        <div className={classGame}>
            <div className={classGameBoard}>
                {<Board value={values}/>}
            </div>
            <div className={classInfo}>
                <div className={classStatus}>{status}</div>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
};

Game.propTypes = {
    classGame: PropTypes.string,
    classGameBoard: PropTypes.string,
    values: PropTypes.oneOf(['', '○', 'O', 'X', '△']),
    classInfo: PropTypes.string,
    classStatus: PropTypes.string,
    status: PropTypes.oneOf(['Winner: ○', 'Winner: X', 'DRAW !!', 'Next player: X', 'Next player: ○']),
    history: PropTypes.array,
};

Game.defaultProps = {
    classGame: 'game',
    classGameBoard: 'game-board',
    values: '△',
    classInfo: 'game-info',
    classStatus: 'status',
    status: 'Next player: X',
    history: [[],[],],
};