class Hero1 {
    constructor(player) {
      this.player = player;
      this.type = 'Hero1';
    }
  
    getValidMoves(position) {
      const [row, col] = position;
      return [
        [row + 2, col], // Forward 2
        [row - 2, col], // Backward 2
        [row, col + 2], // Right 2
        [row, col - 2]  // Left 2
      ].filter(([r, c]) => r >= 0 && r < 5 && c >= 0 && c < 5);
    }
  }
  
  module.exports = Hero1;