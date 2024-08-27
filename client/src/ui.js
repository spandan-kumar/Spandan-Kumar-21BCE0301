export function renderBoard(board) {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell ? `${cell.player}-${cell.type[0]}` : '';
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = colIndex;
            boardElement.appendChild(cellElement);
        });
    });
}

export function updateGameStatus(message) {
    const statusElement = document.getElementById('game-status');
    statusElement.textContent = message;
}