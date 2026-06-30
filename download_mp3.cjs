const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/mikeroyal/Unreal-Engine-Guide/main/Audio/Piano.mp3';
const file = fs.createWriteStream('public/romantic.mp3');

https.get(url, (response) => {
  if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
    // Handle redirect
    https.get(response.headers.location, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download complete (redirected).');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete.');
    });
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
