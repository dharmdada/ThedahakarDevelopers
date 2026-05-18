const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(filename => {
  const filepath = path.join(pagesDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');

  // Parse HTML
  const $ = cheerio.load(content, { decodeEntities: false });

  // 1. Find the #interview section
  const interviewSection = $('#interview');
  
  // 2. Find the content-area
  const contentArea = $('.content-area');

  if (interviewSection.length && contentArea.length) {
    // If #interview is not a direct child of .content-area, move it there
    if (interviewSection.parent().attr('class') !== 'content-area') {
      interviewSection.appendTo(contentArea);
    }
  }

  // Also make sure footer is NOT inside content-area
  const footer = $('footer');
  if (footer.parent().attr('class') === 'content-area') {
    footer.insertAfter(contentArea);
  }
  
  // Let's remove any stray literal \n that might still exist in text nodes, just in case
  // (We already replaced it, but cheerio will output valid HTML structure anyway)

  // Output the fixed HTML
  fs.writeFileSync(filepath, $.html(), 'utf8');
  console.log('Repaired', filename);
});
