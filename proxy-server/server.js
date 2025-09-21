const express = require('express');
const { fetchFilteredContent } = require('./puppeteerHandler');
const app = express();

app.get('/filter', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing URL');
  try {
    const content = await fetchFilteredContent(url);
    res.send(content);
  } catch (err) {
    console.error(err);
    res.status(500).send('Filtering failed');
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server running');
});
