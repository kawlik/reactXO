import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Field = ({ id, row, col }) => {

    /*   *   *   *   *   *   *   *   *   *   */

    return (
        <div className="field" id={id} data-row={row} data-col={col}></div>
    );
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Field;