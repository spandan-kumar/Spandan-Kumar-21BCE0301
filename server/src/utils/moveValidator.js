class MoveValidator {
    isValidMove(board, from, to, currentPlayer) {
        const [fromRow, fromCol] = from;
        const [toRow, toCol] = to;
        const piece = board[fromRow][fromCol];

        if (!piece || piece.player !== currentPlayer) {
            return false;
        }

        const validMoves = piece.getValidMoves([fromRow, fromCol]);
        const isValidDestination = validMoves.some(([r, c]) => r === toRow && c === toCol);

        if (!isValidDestination) {
            return false;
        }

        const destinationPiece = board[toRow][toCol];
        if (destinationPiece && destinationPiece.player === currentPlayer) {
            return false;
        }

        return true;
    }
}

module.exports = MoveValidator;