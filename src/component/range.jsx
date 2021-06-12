import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Range = ({ name, value, min, max, onChange }) => {


    /*   *   *   *   *   *   *   *   *   *   */

    return (
        <div className="range">
            <span className="range-value">{`${name} : ${value}`}</span>
            <input type="range" name={name} min={min} max={max} value={value} onChange={( e ) => onChange( e )} />
        </div>
    );
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Range;