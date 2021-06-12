import * as DATA from './data.js';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

class Board {

    constructor( selector, size, need ) {

        this.selector = selector;
        this.size = size;
        this.need = need;

        this.elem = null;
        this.style = null;

        //  document link refrence
        this.fields = [];

        //  2D array create
        this.board = new Array( +size ).fill( null ).map( e => e = new Array( +size ).fill( null ));
    }

    /*   *   *   *   *   *   *   *   *   *   */

    setUp = () => {

        this.elem = document.querySelector( this.selector );
        if( this.elem ) {

            //  empties board
            this.setEmpty();

            //  fields of board
            this.fields = [ ...this.elem.querySelectorAll( '.field' ) ];

            //  setup ok
            return true;
        }

        //  setup not ok
        return false;
    }

    setEmpty = () => {
        
        for( let i = 0; i < this.size; i++ ) {
            for( let j = 0; j < this.size; j++ ) {
                this.board[i][j] = DATA.mark.EMPTY;
            }
        }
    }

    /*   *   *   *   *   *   *   *   *   *   */

    isEmpty([ row, col ]) {

        //  tests shift
        if( row < 0 || row > this.size - 1 ) { return false; }
        if( col < 0 || col > this.size - 1 ) { return false; }

        //  tests board
        if( this.board[ row ][ col ] === DATA.mark.EMPTY ) { return true; }

        //  filed not empty
        return false;
    }

    isTie( mark ) {

        for( let i = 0; i < this.size; i++ ) {
            for( let j = 0; j < this.size; j++ ) {
                if( this.board[i][j] === DATA.mark.EMPTY ) { return false; }
            }
        }

        return true;
    }

    isWin( mark ) {

        //  tests rows
        for( let i = 0; i < this.size; i++ ) {
            for( let j = 0; j < this.size - this.need + 1; j++ ) {

                //  posible win
                if( this.board[i][j] === mark ) {

                    let isWin = true;
                    for( let k = 0; k < this.need; k++ ) {
                        isWin = ( this.board[i][ j + k ] === mark ) ? isWin : false;
                    }

                    //  is true win
                    if( isWin ) { return true; }
                }
            }
        }

        //  tests cols
        for( let i = 0; i < this.size; i++ ) {
            for( let j = 0; j < this.size - this.need + 1; j++ ) {

                //  posible win
                if( this.board[j][i] === mark ) {

                    let isWin = true;
                    for( let k = 0; k < this.need; k++ ) {
                        isWin = ( this.board[ j + k ][i] === mark ) ? isWin : false;
                    }

                    //  is true win
                    if( isWin ) { return true; }
                }
            }
        }

        //  test diagonal left-top . right-bottom
        for( let i = 0; i < this.size - this.need + 1; i++ ) {
            for( let j = 0; j < this.size - this.need + 1; j++ ) {
                
                //  posible win
                if( this.board[i][j] === mark ) {

                    let isWin = true;
                    for( let k = 0; k < this.need; k++ ) {
                        isWin = ( this.board[ i + k ][ j + k ] === mark ) ? isWin : false;
                    }

                    //  is true win
                    if( isWin ) { return true; }
                }
            }
        }

        //  test diagonal right-top . left-bottom
        for( let i = this.need - 1; i < this.size; i++ ) {
            for( let j = 0; j < this.size - this.need + 1; j++ ) {

                //  posible win
                if( this.board[i][j] === mark ) {

                    let isWin = true;
                    for( let k = 0; k < this.need; k++ ) {
                        isWin = ( this.board[ i - k ][ j + k ] === mark ) ? isWin : false;
                    }

                    //  is true win
                    if( isWin ) { return true; }
                }
            }
        }

        return false;
    }
}

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Board;