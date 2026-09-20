const https = require('https');

https.get('https://cuuhodauin.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const iconMatches = data.match(/<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/gi);
    console.log('--- ICON TAGS FOUND ON LIVE SITE ---');
    console.log(iconMatches);
  });
}).on('error', err => {
  console.error('Error fetching live site:', err.message);
});
