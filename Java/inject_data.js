const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const pagesDir = path.join(__dirname, 'pages');
const data = JSON.parse(fs.readFileSync('extracted_data.json', 'utf8'));

Object.keys(data).forEach(filename => {
  const filepath = path.join(pagesDir, filename);
  if (!fs.existsSync(filepath)) return;

  const content = fs.readFileSync(filepath, 'utf8');
  const $ = cheerio.load(content, { decodeEntities: false });

  const pageData = data[filename];

  // 1. Update Theory Deep Dive
  const theorySection = $('#theory-deep-dive');
  if (theorySection.length && pageData.principles) {
    const lists = theorySection.find('.feature-list');
    if (lists.length >= 3) {
      $(lists[0]).html(pageData.principles);
      $(lists[1]).html(pageData.misunderstandings);
      $(lists[2]).html(pageData.checklist);
    }
  }

  // 2. Add Interview Section
  if (pageData.interview) {
    // Remove existing if any (shouldn't be any in restored state)
    $('#interview').remove();

    const interviewHtml = `
<div class="section" id="interview">
  <div class="subsection">
    <h3>Interview Preparation</h3>
    <div class="highlight-row">
      ${pageData.interview}
    </div>
  </div>
</div>`;

    $('.content-area').append(interviewHtml);
  }

  // Save the file
  fs.writeFileSync(filepath, $.html(), 'utf8');
  console.log('Injected data into', filename);
});
