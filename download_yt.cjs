const ytdl = require('ytdl-core');
const fs = require('fs');

const videoUrl = 'https://www.youtube.com/watch?v=roR0yO57Bsc'; // Beautiful in White - Piano
const output = 'public/romantic.mp3';

console.log('Starting download...');

ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' })
  .pipe(fs.createWriteStream(output))
  .on('finish', () => {
    console.log('Download complete!');
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });
