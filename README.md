# WebSocket.io Simple Chat Application
A real-time chat application built with Node.js, Express, and Socket.io that demonstrates basic WebSocket functionality.

## Features

* Real-time messaging
* User join/leave notifications
* Connected users counter
* Timestamps for messages
* Simple and responsive UI

## Prerequisites

* Node.js (version 12 or higher)
* npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/materokatti/websocket-demo.git
cd websocket-demo
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node server.js
```

2. Open your browser and visit:
```
http://localhost:3000
```
3. Enter your username when prompted and start chatting!

## Project Structure
```
project/
├── server.js           # Server-side code
├── public/             # Client-side files
│   └── index.html     # Frontend HTML and JavaScript
├── package.json        # Project dependencies
└── .gitignore         # Git ignore rules
```
## Dependencies
* `express`: Web application framework
* `socket.io`: WebSocket library for real-time communication

## Features Explanation

* **Real-time Communication**: Messages are delivered instantly using WebSocket
* **Username System**: Each user must enter a username to join
* **User Tracking**: Shows when users join or leave the chat
* **Active Users Counter**: Displays the number of currently connected users
* **Message Timestamps**: Each message shows when it was sent

## Development
To start development:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting
Common issues:

1. Port already in use:
```bash
# Change the port in server.js or kill the process using port 3000
```
2. Module not found:
```bash
# Re-run npm install to ensure all dependencies are installed
npm install
```
## Contributing
Feel free to submit issues and pull requests.
## License
This project is open-source and available under the MIT License.