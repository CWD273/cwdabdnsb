const cache = new Map();

function getCached(url) {
  return cache.get(url);
}

function setCached(url, content) {
  cache.set(url, content);
}

module.exports = { getCached, setCached };
