const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

const db = {};

files.forEach(filename => {
  const filepath = path.join(pagesDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  const $ = cheerio.load(content);

  const data = {};

  // Extract theory
  const featureLists = $('.theory-deep-dive .feature-list');
  if (featureLists.length >= 3) {
    data.principles = $(featureLists[0]).html()?.trim();
    data.misunderstandings = $(featureLists[1]).html()?.trim();
    data.checklist = $(featureLists[2]).html()?.trim();
  } else {
    // some pages might only have 2 if they didn't have checklist, but we know we added 3.
  }

  // Extract interview
  // In some broken pages, #interview might be missing, but the h3 "Interview Preparation" is there
  const interviewH3 = $('h3:contains("Interview Preparation")');
  if (interviewH3.length) {
    const highlightRow = interviewH3.nextAll('.highlight-row').first();
    if (highlightRow.length) {
      data.interview = highlightRow.html()?.trim();
    } else {
      // maybe it's inside the h3 parent?
      data.interview = interviewH3.parent().find('.highlight-row').html()?.trim();
    }
  }

  db[filename] = data;
});

fs.writeFileSync('extracted_data.json', JSON.stringify(db, null, 2));
console.log('Extraction complete.');
