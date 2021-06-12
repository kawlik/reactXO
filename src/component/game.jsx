import React, { useEffect } from 'react';

//  component
import Board from './board';
import TicTacToe from '../script/ticTacToe';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const mark = {
    X: 'X',
    O: 'O',
    E: ' '
}

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Game = ({ size, need, depth }) => {

    /*   *   *   *   *   *   *   *   *   *   */

    const fields = new Array( +size ).fill( new Array( +size ).fill( mark.E ) );
    const gameID = "boardTicTacToe";

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const ticTacToe = new TicTacToe( `#${gameID}`, size, need, mark.X, mark.O, mark.X, depth );
        ticTacToe.setUp();

    }, [ size, need, depth ]);

    /*   *   *   *   *   *   *   *   *   *   */

    return (
        <>
            <Board gameID={gameID} fields={fields} size={size} mark={mark} />
        </>
    );
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Game;