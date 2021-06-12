import * as DATA from './data.js';
import Board from './board.js';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

class TicTacToe {

    constructor( selector, size, need, first, AI, HU, depth ) {

        this.selector = selector;
        this.depth = +depth;
        this.size = +size;
        this.need = +need;
        
        this.player = first;
        this.playerAI = AI;
        this.playerHU = HU;

        this.gameOver = false;
        this.gameTie = false;
        this.gameWin = false;

        this.board = new Board( selector, size, need );
    }

    /*   *   *   *   *   *   *   *   *   *   */

    setUp = () => {

        //  tests board
        if( this.board.setUp() ) {

            //  adds clicks
            this.board.fields.forEach( field => field.addEventListener( 'click', ( e ) => this.handleClick( e ) ));

            //  starts game
            this.start();
        }
    }

    handleClick = ( event ) => {
        event.preventDefault();

        //  tests
        if( this.gameOver ) { return; }
        if( this.player === this.playerAI ) { return; }

        //  gets shift
        const shift = { row: -1, col: -1 };
        shift.row = +event.target.dataset.row;
        shift.col = +event.target.dataset.col;

        //  tests shift
        if( this.board.isEmpty([ shift.row, shift.col ]) ) {
            this.board.board[ shift.row ][ shift.col ] = this.player;
            this.board.fields[ shift.row*this.size + shift.col ].classList.add( `__${this.player}` );

            //  tests game status
            if( this.testStatus() ) {

                //  end of game detected
                this.gameOver = true;
                this.gameTie = this.board.isWin() ? false : true;
                this.gameTie = this.board.isWin() ? true : false;

                //  end of game
                return;
            }

            //  changes player
            this.player = this.playerAI;
            this.shiftAI();
        }
    }

    start = () => {

        //  tests for AI
        if( this.player === this.playerAI ) {
            this.shiftAI();
        }
    }

    /*   *   *   *   *   *   *   *   *   *   */

    shiftAI = () => {

        console.log( this.board.board );

        //  tests
        if( this.gameOver ) { return; }
        if( this.player === this.playerHU ) { return; }

        //  gets best shift
        const shift = this.bestShift();
        if( this.board.isEmpty([ shift.row, shift.col ])) {
            this.board.board[ shift.row ][ shift.col ] = this.player;
            this.board.fields[ shift.row*this.size + shift.col ].classList.add( `__${this.player}` );

            //  tests game status
            if( this.testStatus() ) {
    
                //  end of game detected
                this.gameOver = true;
                this.gameTie = this.board.isWin() ? false : true;
                this.gameTie = this.board.isWin() ? true : false;
    
                //  end of game
                return;
            }

        } else {

            //  an error has ocured
            console.error( 'AI shift not set!!! ');
            console.log( shift );
        }

        //  changes player
        this.player = this.playerHU;
    }

    testStatus = () => {

        if( this.board.isWin( this.player )) { return true; }
        if( this.board.isTie( this.player )) { return true; }

        return false;
    }

    /*   *   *   *   *   *   *   *   *   *   */

    bestShift = () => {

        let best = DATA.value.N_INF;
        const shift = { row: -1, col: -1 }

        /*   *   *   *   *   *   *   *   *   *   */

        for( let i = 0; i < this.size; i++ ) {
            for( let j = 0; j < this.size; j++ ) {

                //  tests for possible moves
                if( this.board.isEmpty([ i, j ]) ) {

                    //  tests move
                    this.board.board[i][j] = this.playerAI;

                    const score = this.minimax( 0, false, DATA.value.N_INF, DATA.value.P_INF );
                    console.log( ` [ row: ${i} | col: ${j} ] :: score -> ${score} ` );

                    //  better move detected
                    if( score > best ) {
                        best = score;
                        shift.row = i;
                        shift.col = j;
                    }

                    //  restores move
                    this.board.board[i][j] = DATA.mark.EMPTY;
                }
            }
        }

        /*   *   *   *   *   *   *   *   *   *   */

        return shift;
    }

    minimax = ( depth, AI, alpha, beta ) => {

        //  terminal states
        if( depth > this.depth ) { return DATA.result.TIE; }

        if( this.board.isWin( this.playerAI )) { return ( DATA.result.WIN * ( 2*this.depth - depth )); }
        if( this.board.isWin( this.playerHU )) { return ( DATA.result.LOSE * ( 2*this.depth - depth )); }
        if( this.board.isTie() ) { return DATA.result.TIE; }

        /*   *   *   *   *   *   *   *   *   *   */
        if( AI )    //  MAXIMIZE
        /*   *   *   *   *   *   *   *   *   *   */
        {
            let best = DATA.value.N_INF;
            let cutoff = false;

            /*   *   *   *   *   *   *   *   *   *   */

            for( let i = 0; i < this.size; i++ ) {
                for( let j = 0; j < this.size; j++ ) {

                    //  tests for possible moves
                    if( this.board.isEmpty([ i, j ]) ) {

                        //  tests move
                        this.board.board[i][j] = this.playerAI;

                        const score = this.minimax( depth + 1, false, alpha, beta );

                        //  better move detected
                        if( score > best ) {
                            best = score;
                        }

                        //  restores move
                        this.board.board[i][j] = DATA.mark.EMPTY;

                        //  alpha - beta
                        alpha = ( score > alpha ) ? score : alpha;
                        cutoff = ( beta <= alpha ) ? true : false;

                        //  check cutoff
                        if( cutoff ) { break; }
                    }
                }
            }
            
            /*   *   *   *   *   *   *   *   *   *   */

            return best;
        }
        /*   *   *   *   *   *   *   *   *   *   */
        else        //  MINIMIZE
        /*   *   *   *   *   *   *   *   *   *   */
        {
            let worst = DATA.value.P_INF;
            let cutoff = false;

            /*   *   *   *   *   *   *   *   *   *   */

            for( let i = 0; i < this.size; i++ ) {
                for( let j = 0; j < this.size; j++ ) {

                    //  tests for possible moves
                    if( this.board.isEmpty([ i, j ]) ) {

                        //  tests move
                        this.board.board[i][j] = this.playerHU;

                        const score = this.minimax( depth + 1, true, alpha, beta );

                        //  better move detected
                        if( score < worst ) {
                            worst = score;
                        }

                        //  restores move
                        this.board.board[i][j] = DATA.mark.EMPTY;

                        //  alpha - beta
                        beta = ( score < beta ) ? score : beta;
                        cutoff = ( beta <= alpha ) ? true : false;

                        //  check cutoff
                        if( cutoff ) { break; }
                    }
                }
            }
            
            /*   *   *   *   *   *   *   *   *   *   */

            return worst;
        }
        /*   *   *   *   *   *   *   *   *   *   */
    }
}

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default TicTacToe;