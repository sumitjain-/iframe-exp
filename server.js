const express = require('express');
const _ = require('lodash');
const app = express();
const port = 8080;

app.get('/page/:height', (req, res) => {
  // res.json({ pageHeight: Number(req.params.height) });
  const bg = `rgb(${
    _.random(0, 255, false)
  },${
    _.random(0, 255, false)
  },${
    _.random(0, 255, false)
  })`;
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body {
      height: ${req.params.height}px;
      background-color: ${bg};
    }
    </style>
  </head>
  <body>
    
  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
