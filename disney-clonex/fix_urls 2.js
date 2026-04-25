const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'movies.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace TMDB image URLs with a reliable proxy (wsrv.nl)
content = content.replace(/https:\/\/image\.tmdb\.org\/t\/p\//g, 'https://wsrv.nl/?url=image.tmdb.org/t/p/');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated image URLs in movies.js to use an image proxy.');
