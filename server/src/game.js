const Pawn = require('./characters/pawn');
const Hero1 = require('./characters/hero1');
const Hero2 = require('./characters/hero2');
const MoveValidator = require('./utils/moveValidator');

class Game {
  constructor() {
    this.board = this.initializeBoard();
    this.currentPlayer = 'A';
    this.moveValidator = new MoveValidator();
  }

  initializeBoard() {
    const board = Array(5).fill().map(() => Array(5).fill(null));
    // Set up initial positions
    board[0][0] = new Hero1('A');
    board[0][4] = new Hero2('A');
    board[1][2] = new Pawn('A');
    board[4][0] = new Hero1('B');
    board[4][4] = new Hero2('B');
    board[3][2] = new Pawn('B');
    return board;
  }

  start() {
    // The board is already set up in initializeBoard, so we don't need to do anything here
  }

  makeMove(move) {
    const [from, to] = move.split('-').map(pos => pos.split('').map(Number));
    if (this.moveValidator.isValidMove(this.board, move, this.currentPlayer)) {
      // Update board state
      // Check for character elimination
      // Switch current player
      this.currentPlayer = this.currentPlayer === 'A' ? 'B' : 'A';
      return { valid: true };
    }
    return { valid: false, message: 'Invalid move' };
  }

  getState() {
    return {
      board: this.board,
      currentPlayer: this.currentPlayer
    };
  }

  isGameOver() {
    // Check if one player has eliminated all opponent's characters
  }
}

module.exports = Game;