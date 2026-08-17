# Express.js Web Server

A simple HTTP web server built with Express.js.

## Installation

```bash
npm install
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000`

## Available Routes

- **GET** `/` - Home page with welcome message
- **GET** `/api/status` - Get server status and uptime
- **POST** `/api/data` - Send JSON data to the server

## Example API Calls

Check server status:
```bash
curl http://localhost:3000/api/status
```

Send data:
```bash
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "message": "Hello"}'
```

## Environment Variables

- `PORT` - Server port (default: 3000)

Example:
```bash
PORT=8000 npm start
```
