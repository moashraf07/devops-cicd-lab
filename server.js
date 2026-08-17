const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Express Server</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          h1 { color: #333; margin: 0; }
          p { color: #666; margin: 10px 0 0 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Express.js! 🚀</h1>
          <p>Server is running on port ${PORT}</p>
        </div>
      </body>
    </html>
  `);
});

// API endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// POST endpoint
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully',
    received: data
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}`);
  console.log(`✓ API Status: http://localhost:${PORT}/api/status`);
  console.log(`✓ Press Ctrl+C to stop`);
});
