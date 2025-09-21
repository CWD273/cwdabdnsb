const { getCached, setCached } = require('./utils/cache');

app.get('/filter', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing URL');

  const cached = getCached(url);
  if (cached) return res.send(cached);

  try {
    const content = await fetchFilteredContent(url);
    setCached(url, content);
    res.send(content);
  } catch (err) {
    console.error(err);
    res.status(500).send('Filtering failed');
  }
});
