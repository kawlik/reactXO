import React, { useState } from 'react';

//  component
import Game from './component/game';
import Range from './component/range';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const App = () => {

    const min_size = 3;
    const max_size = 8;

    const calcNeed = ( data ) => { return Math.floor( 3*Math.log( data )); }
    const calcDepth = ( data ) => { return Math.floor( 8 - (( 3*data ) / 4 )); }

    /*   *   *   *   *   *   *   *   *   *   */

    const [ start, setStart ] = useState( false );
    const [ depth, setDepth ] = useState( 9 );
    const [ size, setSize ] = useState( 3 );
    const [ need, setNeed ] = useState( 3 );

    const toggleGame = () => {
        setStart( prev => !prev );
    }

    const changeDepth = ( event ) => {
        setDepth( prev => event.target.value );
    }

    const changeSize = ( event ) => {
        setSize( prev => event.target.value );
        setNeed( prev => calcNeed( event.target.value ));
        setDepth( prev => calcDepth( event.target.value ));
    }

    const changeNeed = ( event ) => {
        setNeed( prev => event.target.value );
    }

    /*   *   *   *   *   *   *   *   *   *   */

    const output = start
        ?   <Game size={size} need={need} depth={depth} />
        :   <>
                <Range name="size" value={size} onChange={changeSize} min={min_size} max={max_size} />
                <Range name="need" value={need} onChange={changeNeed} min={calcNeed(size)} max={size} />
                <Range name="depth" value={depth} onChange={changeDepth} min={min_size} max={calcDepth(size)} />
            </>;

    console.log( size );
    console.log( need );
    console.log( depth );

    /*   *   *   *   *   *   *   *   *   *   */

    return (
        <>
            {output}

            <button className="btn" onClick={toggleGame}>{ start ? "Stop" : "Start" }</button>
        </>
    );
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default App;