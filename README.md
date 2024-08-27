# Chess-like Game

This project is a web-based implementation of a chess-like game using JavaScript, HTML, and CSS. It features a custom 5x5 board with unique piece types and movement rules.

## Features

- 5x5 game board
- Custom piece types: Pawn, Hero1, and Hero2
- WebSocket-based multiplayer functionality
- Simple UI for game interaction

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- A modern web browser

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/spandan-kumar/Spandan-Kumar-21BCE0301.git
   cd Spandan-Kumar-21BCE0301
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

### Running the Game

1. Start the server:
   ```
   cd server
   node src/server.js
   ```

2. Open the client:
   - Navigate to the `client/public` directory
   - Open `index.html` in a web browser

   Alternatively, you can use a local server to serve the client files:
   ```
   cd client/public
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

## How to Play

1. Click "Start New Game" to begin
2. Enter moves in the format `[piece_position]-[destination]` (e.g., "00-02" to move the piece at (0,0) to (0,2))
3. Click "Submit Move" to make your move

## Project Structure

- `client/`: Contains all client-side code
  - `public/`: Static files (HTML, CSS, images)
  - `src/`: JavaScript source files
- `server/`: Contains all server-side code
  - `src/`: Server JavaScript files
  - `characters/`: Character class definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [Your Name/Organization] for the project requirements and guidance.
