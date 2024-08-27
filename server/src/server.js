const WebSocket = require('ws');
const Game = require('./game');

const wss = new WebSocket.Server({ port: 8080 });

const games = new Map();

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    switch(data.type) {
      case 'create_game':
        const gameId = createGame(ws);
        ws.send(JSON.stringify({ type: 'game_created', gameId }));
        break;
      case 'join_game':
        joinGame(ws, data.gameId);
        break;
      case 'make_move':
        makeMove(data.gameId, data.move);
        break;
      default:
        console.log('Unknown message type:', data.type);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    // Handle player disconnection
  });
});

function createGame(player1) {
  const gameId = generateGameId();
  const game = new Game();
  games.set(gameId, { game, player1, player2: null });
  return gameId;
}

function joinGame(player2, gameId) {
  const gameData = games.get(gameId);
  if (gameData && !gameData.player2) {
    gameData.player2 = player2;
    gameData.game.start();
    broadcastGameState(gameId);
  }
}

function makeMove(gameId, move) {
  const gameData = games.get(gameId);
  if (gameData) {
    const result = gameData.game.makeMove(move);
    if (result.valid) {
      broadcastGameState(gameId);
      if (gameData.game.isGameOver()) {
        const winner = gameData.game.currentPlayer === 'A' ? 'B' : 'A';
        broadcastGameOver(gameId, winner);
      }
    } else {
      // Send error message to the player who made the invalid move
      const errorMessage = JSON.stringify({ type: 'error', message: 'Invalid move' });
      gameData.player1.send(errorMessage);
      gameData.player2.send(errorMessage);
    }
  }
}

function broadcastGameState(gameId) {
  const gameData = games.get(gameId);
  if (gameData) {
    const state = gameData.game.getState();
    const message = JSON.stringify({ type: 'game_state', state });
    gameData.player1.send(message);
    gameData.player2.send(message);
  }
}

function broadcastGameOver(gameId, winner) {
  const gameData = games.get(gameId);
  if (gameData) {
    const message = JSON.stringify({ type: 'game_over', winner });
    gameData.player1.send(message);
    gameData.player2.send(message);
    games.delete(gameId);
  }
}

function generateGameId() {
  return Math.random().toString(36).substr(2, 6);
}

console.log('WebSocket server is running on port 8080');