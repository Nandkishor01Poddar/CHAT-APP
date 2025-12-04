// src/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.route');
const { serve } = require('inngest/express');
const { inngest, functions } = require('./lib/inngest');

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Inngest endpoint
app.use('/api/inngest', serve({ client: inngest, functions }));

// Auth routes
app.use('/api/auth', authRoutes);

module.exports = app;
