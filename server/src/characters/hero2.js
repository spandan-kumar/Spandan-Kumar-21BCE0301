class Hero2 {
    constructor(player) {
      this.player = player;
      this.type = 'Hero2';
    }
  
    getValidMoves(position) {
      const [row, col] = position;
      return [
        [row + 2, col + 2], // Forward-Right
        [row + 2, col - 2], // Forward-Left
        [row - 2, col + 2], // Backward-Right
        [row - 2, col - 2]  // Backward-Left
      ].filter(([r, c]) => r >= 0 && r < 5 && c >= 0 && c < 5);
    }
  }
  
  module.exports = Hero2;