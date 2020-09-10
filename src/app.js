const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

//
// app.get('/help', (req, res) => {
//   res.send([
//     { name: 'Toby', age: 29 },
//     { name: 'Toby1', age: 30 }
//   ]);
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>');
// });

app.get('/weather', (req, res) => {
  res.send({
    location: 'London',
    forecast: 50
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
