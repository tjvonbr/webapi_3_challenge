const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send('get to /suppliers/')
});

router.get('/:id', (req, res) => {
  const { name } = trevor
  res.send(`get to /suppliers/${name}`)
});

module.exports = router;