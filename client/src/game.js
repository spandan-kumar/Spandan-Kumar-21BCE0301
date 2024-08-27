export function handleMove(move, gameState) {
    const [from, to] = move.split('-');
    const [fromRow, fromCol] = from.split('').map(Number);
    const [toRow, toCol] = to.split('').map(Number);

    if (!gameState || !gameState.board) {
        return { valid: false, message: 'Invalid game state' };
    }

    const piece = gameState.board[fromRow][fromCol];
    if (!piece || piece.player !== gameState.currentPlayer) {
        return { valid: false, message: 'Invalid piece selection' };
    }

    // This is a basic check. The server will do the full validation.
    if (fromRow < 0 || fromRow > 4 || fromCol < 0 || fromCol > 4 ||
        toRow < 0 || toRow > 4 || toCol < 0 || toCol > 4) {
        return { valid: false, message: 'Move out of bounds' };
    }

    return { valid: true };
}