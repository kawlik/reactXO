import React from 'react';

//  component
import Field from './field';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Board = ({ fields, gameID, mark, size }) => {

    const fieldsMap = fields.map(( elem, i ) =>
        elem.map(( sub, j ) => <Field key={`field_r${i}_c${j}`} id={`field_r${i}_c${j}`} row={i} col={j} /> )
    );

    /*   *   *   *   *   *   *   *   *   *   */

    const style = {
        gridTemplateColumns: `repeat( ${size}, 1fr )`,
        gridTemplateRows: `repeat( ${size}, 1fr )`
    };

    /*   *   *   *   *   *   *   *   *   *   */

    return (
        <div id={gameID} className="board darkable" style={style}>{fieldsMap}</div>
    );
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Board;