const https = require('https');

https.get('https://cuuhodauin.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const head = data.match(/<head>([\s\S]*?)<\/head>/i);
    if (head) {
      console.log('--- LIVE HEAD TAGS ---');
      console.log(head[1]);
    } else {
      console.log('No head tag found');
    }
  });
});
