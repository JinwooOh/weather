const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');

const app = express();
var server = require('http').createServer(app);
const cors = require('cors');
// var whitelist = ['http://localhost:3000', "https://keen-ptolemy-e922f2.netlify.com", "http://localhost:3000"]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

// middleware
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/', (req, res) => {
  res.json({
    message: 'welcome to server api!',
  });
});
//for production, separate & hide secret key
//e71e30c321b8d9e95cc373f42fee623c
const DARKSKY_SECRET_KEY = process.env.KEY || "e71e30c321b8d9e95cc373f42fee623c"
const urlPrefix = `https://api.darksky.net/forecast/${DARKSKY_SECRET_KEY}/`;
app.get('/api/darksky', cors(), (req, res, next) => {
  try {
    const coordinates = `${req.query.lat}, ${req.query.lng}`;
    const url = urlPrefix + coordinates;
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          res
            .status(response.status)
            .json({ message: 'Bad response from Dark Sky server' });
        }
        return response.json();
      })
      .then(function(payload) {
        res.status(200).json(payload);
      });
  } catch (err) {
    console.log('Error occurs requesting Dark Sky API', err);
  }
});

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server running on port ${port}`));
