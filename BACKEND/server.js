require('dotenv').config();
const path = require('path');
const express = require('express');
const connectToDB = require('./src/DB/db');
const app = require('./src/app');

// Uncomment when DB is ready
// connectToDB();

const PORT = process.env.PORT || 3000;

// Production mode (when deploying)
if (process.env.NODE_ENV === 'production') {
  const frontendDistPath = path.join(__dirname, '../FRONTEND/dist');

  // Serve frontend static files
  app.use(express.static(frontendDistPath));

  // React/Vite catch-all route
  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
