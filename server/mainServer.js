const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/photos', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://localhost:3002/photos/?listingid=${listingId}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/booking', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://localhost:3003/booking/?listingid=${listingId}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/booking', (req, res) => {
  axios.post('http://localhost:3003/booking', req.body)
  .then((result) => {
    res.status(201).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

app.get('/messages', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://localhost:3001/messages/?listingid=${listingId}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/listinginfo', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://localhost:3004/listinginfo/`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
