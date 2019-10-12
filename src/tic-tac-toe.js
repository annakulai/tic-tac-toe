class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.symbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.symbol;
            this.symbol = (this.symbol === 'x') ? 'o' : 'x';
        }
    }
    //should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        const fieldLength = this.field.length;

        if ((this.getFieldValue(0, 0) === this.getFieldValue(1, 1) && this.getFieldValue(0, 0) === this.getFieldValue(2, 2) && this.getFieldValue(0, 0) !== null ||
                (this.getFieldValue(0, 2) === this.getFieldValue(1, 1) && this.getFieldValue(0, 2) === this.getFieldValue(2, 0) && this.getFieldValue(0, 2) !== null))) {
            return this.getFieldValue(1, 1);
        }

        for (let i = 0; i < fieldLength; i++) {
            if (this.getFieldValue(i, 0) === this.getFieldValue(i, 1) && this.getFieldValue(i, 0) === this.getFieldValue(i, 2) && this.getFieldValue(i, 0) !== null) {
            return this.field[i][0];
            }
        }

        for (let j = 0; j < fieldLength; j++) {
            if (this.getFieldValue(0, j) === this.getFieldValue(1, j) && this.getFieldValue(0, j) === this.getFieldValue(2, j) && this.getFieldValue(0, j) !== null) {
                return this.field[0][j];
            }
        }

        return null;
    }

    //should return true if there is no more fields to place a `x` or `o`
    noMoreTurns() {
        const fieldLength = this.field.length;
        let count = 0;
        for (let i = 0; i < fieldLength; i++) {
            for (let j = 0; j < fieldLength; j++) {
                if (this.getFieldValue(i, j) !== null) {
                    count++;
                }
            }
            
        }
        return count === 9 ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
