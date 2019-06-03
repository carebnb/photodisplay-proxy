const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/photos', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://ec2-3-18-212-71.us-east-2.compute.amazonaws.com/photos/?listingid=${listingId}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/booking', (req, res) => {
  axios.post(`http://ec2-52-53-150-158.us-west-1.compute.amazonaws.com/booking/?listingid=${listingId}`, req.body)
  .then((result) => {
    res.status(201).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

app.get('/booking', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://ec2-52-53-150-158.us-west-1.compute.amazonaws.com/booking/?listingid=${listingId}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

// Will be uncommented once review section is complete
// app.get('/messages', (req, res) => {
//   const listingId = req.query.listingid;
//   axios.get(`http://ec2-13-57-31-14.us-west-1.compute.amazonaws.com/listinginfo`)
//   .then((result) => {
//     res.status(200).send(result.data);
//   })
//   .catch((err) => {
//     res.status(500).send(err);
//   });
// });

app.get('/listinginfo', (req, res) => {
  const listingId = req.query.listingid;
  console.log('in listing info');
  axios.get(`http://ec2-13-57-31-14.us-west-1.compute.amazonaws.com/listinginfo`)
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
