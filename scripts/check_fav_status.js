const https = require('https');

function fetchWithRedirect(url) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log(`${url} -> Redirect (${res.statusCode}) to: ${res.headers.location}`);
      let newUrl = res.headers.location;
      if (newUrl.startsWith('/')) {
        const u = new URL(url);
        newUrl = `${u.protocol}//${u.host}${newUrl}`;
      }
      fetchWithRedirect(newUrl);
    } else {
      console.log(`[SUCCESS] ${url} - Status: ${res.statusCode}, Type: ${res.headers['content-type']}, Size: ${res.headers['content-length']} bytes`);
    }
  });
}

fetchWithRedirect('https://cuuhodauin.com/favicon.ico');
fetchWithRedirect('https://cuuhodauin.com/icon.png');
fetchWithRedirect('https://cuuhodauin.com/apple-touch-icon.png');
