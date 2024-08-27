import { initializeWebSocket } from './websocket.js';
import { renderBoard, updateGameStatus } from './ui.js';
import { handleMove } from './game.js';

let socket;
let gameState = null;

document.addEventListener('DOMContentLoaded', () => {
    socket = initializeWebSocket(handleServerMessage);

    document.getElementById('start-game').addEventListener('click', startNewGame);
    document.getElementById('submit-move').addEventListener('click', submitMove);
});

function handleServerMessage(message) {
    const data = JSON.parse(message);
    switch(data.type) {
        case 'game_created':
            updateGameStatus(`Game created. ID: ${data.gameId}`);
            break;
        case 'game_state':
            gameState = data.state;
            renderBoard(gameState.board);
            updateGameStatus(`Current player: ${gameState.currentPlayer}`);
            break;
        case 'error':
            updateGameStatus(`Error: ${data.message}`);
            break;
    }
}

function startNewGame() {
    socket.send(JSON.stringify({ type: 'create_game' }));
}

function submitMove() {
    const moveInput = document.getElementById('move-command');
    const move = moveInput.value.trim();
    if (move) {
        const result = handleMove(move, gameState);
        if (result.valid) {
            socket.send(JSON.stringify({ type: 'make_move', move: move }));
        } else {
            updateGameStatus(`Invalid move: ${result.message}`);
        }
        moveInput.value = '';
    }
}