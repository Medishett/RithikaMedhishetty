const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 12000;

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files
app.use(express.static(__dirname));

// Start server
app.listen(PORT, '0.0.0.0', function() {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the portfolio at: http://localhost:${PORT}`);
});