export function initializeWebSocket(messageHandler) {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
        console.log('Connected to server');
    };

    socket.onmessage = (event) => {
        messageHandler(event.data);
    };

    socket.onclose = () => {
        console.log('Disconnected from server');
    };

    return socket;
}