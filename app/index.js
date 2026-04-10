const express = require('express');
const os = require('os');
const app = express();

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8"];

app.get('/', (req, res) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  res.send(`
    <body style="background-color:${color}; color:white; text-align:center;">
      <h1>🚀 DevSecOps Demo</h1>
      <h2>Version: v1.0</h2>
      <h3>Pod: ${os.hostname()}</h3>
    </body>
  `);
});

app.listen(3000, () => console.log("App running on port 3000"));
