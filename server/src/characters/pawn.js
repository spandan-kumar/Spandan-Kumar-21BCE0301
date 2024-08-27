class Pawn {
    constructor(player) {
      this.player = player;
      this.type = 'Pawn';
    }
  
    getValidMoves(position) {
      const [row, col] = position;
      return [
        [row + 1, col], // Forward
        [row - 1, col], // Backward
        [row, col + 1], // Right
        [row, col - 1]  // Left
      ].filter(([r, c]) => r >= 0 && r < 5 && c >= 0 && c < 5);
    }
  }
  
  module.exports = Pawn;