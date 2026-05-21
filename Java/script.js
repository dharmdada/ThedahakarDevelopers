// PROGRESS TRACKING STATE
const PROGRESS_KEY = 'javamaster_progress';
function getProgress() {
  const data = localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : { completed: [], quizzes: {} };
}
function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
function isLessonCompleted(file) {
  const progress = getProgress();
  return progress.completed.includes(file);
}
function toggleLessonCompleted(file) {
  const progress = getProgress();
  const index = progress.completed.indexOf(file);
  let status = false;
  if (index > -1) {
    progress.completed.splice(index, 1);
  } else {
    progress.completed.push(file);
    status = true;
  }
  saveProgress(progress);
  return status;
}

// BOOKMARK / FAVORITES SYSTEM
const BOOKMARKS_KEY = 'javamaster_bookmarks';
function getBookmarks() {
  const data = localStorage.getItem(BOOKMARKS_KEY);
  return data ? JSON.parse(data) : [];
}
function saveBookmarks(bookmarks) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}
function toggleBookmark(page, sectionId, title) {
  let bookmarks = getBookmarks();
  const idx = bookmarks.findIndex(b => b.page === page && b.sectionId === sectionId);
  if (idx > -1) {
    bookmarks.splice(idx, 1);
  } else {
    bookmarks.push({ page, sectionId, title, date: Date.now() });
  }
  saveBookmarks(bookmarks);
  return idx === -1; // true = added
}
function isBookmarked(page, sectionId) {
  return getBookmarks().some(b => b.page === page && b.sectionId === sectionId);
}

// SIDEBAR GENERATION
const isSubPage = window.location.pathname.includes('/pages/');
const basePath = isSubPage ? '../' : './';
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// INJECT FAVICON if missing
if (!document.querySelector('link[rel="icon"]')) {
  const fav = document.createElement('link');
  fav.rel = 'icon';
  fav.type = 'image/svg+xml';
  fav.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect rx='20' width='100' height='100' fill='%23f97316'/><text x='50' y='72' text-anchor='middle' font-size='60' font-weight='800' fill='white' font-family='sans-serif'>J</text></svg>";
  document.head.appendChild(fav);
}

// INJECT PWA MANIFEST if missing
if (!document.querySelector('link[rel="manifest"]')) {
  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = basePath + 'manifest.json';
  document.head.appendChild(manifest);
}

// REGISTER PWA SERVICE WORKER
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(basePath + 'sw.js').catch(err => {
      console.warn('Service Worker registration failed:', err);
    });
  });
}


function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const isActive = (path) => currentPage === path ? 'active' : '';
  const isGroupOpen = (pages) => pages.includes(currentPage) ? 'open' : '';

  sidebar.innerHTML = `
    <div class="sidebar-section">
      <div class="sidebar-section-title">Course Overview</div>
      <a class="nav-item ${isActive('index.html')}" href="${basePath}index.html"><span class="dot"></span>Home</a>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-title">Learning Path</div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['basics.html', 'what-is-java.html', 'setup.html', 'datatypes.html', 'operators.html', 'controlflow.html', 'arrays.html', 'strings.html', 'methods.html', 'math-utils.html'])}">
          <span>Basics</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['basics.html', 'what-is-java.html', 'setup.html', 'datatypes.html', 'operators.html', 'controlflow.html', 'arrays.html', 'strings.html', 'methods.html', 'math-utils.html'])}">
          <a class="nav-item ${isActive('basics.html')}" href="${basePath}basics.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('what-is-java.html')}" href="${basePath}pages/what-is-java.html"><span class="dot"></span>What is Java?</a>
          <a class="nav-item ${isActive('setup.html')}" href="${basePath}pages/setup.html"><span class="dot"></span>Setup & Hello World</a>
          <a class="nav-item ${isActive('datatypes.html')}" href="${basePath}pages/datatypes.html"><span class="dot"></span>Data Types & Variables</a>
          <a class="nav-item ${isActive('operators.html')}" href="${basePath}pages/operators.html"><span class="dot"></span>Operators</a>
          <a class="nav-item ${isActive('controlflow.html')}" href="${basePath}pages/controlflow.html"><span class="dot"></span>Control Flow</a>
          <a class="nav-item ${isActive('strings.html')}" href="${basePath}pages/strings.html"><span class="dot"></span>Strings</a>
          <a class="nav-item ${isActive('math-utils.html')}" href="${basePath}pages/math-utils.html"><span class="dot"></span>Math & Utilities</a>
          <a class="nav-item ${isActive('arrays.html')}" href="${basePath}pages/arrays.html"><span class="dot"></span>Arrays</a>
          <a class="nav-item ${isActive('methods.html')}" href="${basePath}pages/methods.html"><span class="dot"></span>Methods</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['oop.html', 'classes.html', 'inheritance.html', 'interfaces.html', 'enums-records.html'])}">
          <span>OOP</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['oop.html', 'classes.html', 'inheritance.html', 'interfaces.html', 'enums-records.html'])}">
          <a class="nav-item ${isActive('oop.html')}" href="${basePath}oop.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('classes.html')}" href="${basePath}pages/classes.html"><span class="dot"></span>Classes & Objects</a>
          <a class="nav-item ${isActive('inheritance.html')}" href="${basePath}pages/inheritance.html"><span class="dot"></span>Inheritance</a>
          <a class="nav-item ${isActive('interfaces.html')}" href="${basePath}pages/interfaces.html"><span class="dot"></span>Interfaces & Abstract</a>
          <a class="nav-item ${isActive('enums-records.html')}" href="${basePath}pages/enums-records.html"><span class="dot"></span>Enums & Records</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['functional.html', 'lambdas.html', 'streams.html'])}">
          <span>Functional</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['functional.html', 'lambdas.html', 'streams.html'])}">
          <a class="nav-item ${isActive('functional.html')}" href="${basePath}functional.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('lambdas.html')}" href="${basePath}pages/lambdas.html"><span class="dot"></span>Lambdas & Optional</a>
          <a class="nav-item ${isActive('streams.html')}" href="${basePath}pages/streams.html"><span class="dot"></span>Streams API</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['collections.html', 'generics.html', 'collections-deep.html'])}">
          <span>Collections</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['collections.html', 'generics.html', 'collections-deep.html'])}">
          <a class="nav-item ${isActive('collections.html')}" href="${basePath}collections.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('generics.html')}" href="${basePath}pages/generics.html"><span class="dot"></span>Generics Deep Dive</a>
          <a class="nav-item ${isActive('collections-deep.html')}" href="${basePath}pages/collections-deep.html"><span class="dot"></span>Collections Deep Dive</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['advanced.html', 'exceptions-io.html', 'java-io-streams.html', 'io-network.html', 'concurrency.html', 'datetime.html', 'reflection.html', 'jvm-internals.html', 'modern-features.html'])}">
          <span>Advanced</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['advanced.html', 'exceptions-io.html', 'java-io-streams.html', 'io-network.html', 'concurrency.html', 'datetime.html', 'reflection.html', 'jvm-internals.html', 'modern-features.html'])}">
          <a class="nav-item ${isActive('advanced.html')}" href="${basePath}advanced.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('exceptions-io.html')}" href="${basePath}pages/exceptions-io.html"><span class="dot"></span>Exceptions & Errors</a>
          <a class="nav-item ${isActive('java-io-streams.html')}" href="${basePath}pages/java-io-streams.html"><span class="dot"></span>Java I/O Streams</a>
          <a class="nav-item ${isActive('io-network.html')}" href="${basePath}pages/io-network.html"><span class="dot"></span>File I/O & Networking</a>
          <a class="nav-item ${isActive('datetime.html')}" href="${basePath}pages/datetime.html"><span class="dot"></span>Date & Time API</a>
          <a class="nav-item ${isActive('concurrency.html')}" href="${basePath}pages/concurrency.html"><span class="dot"></span>Concurrency</a>
          <a class="nav-item ${isActive('reflection.html')}" href="${basePath}pages/reflection.html"><span class="dot"></span>Reflection & Annotations</a>
          <a class="nav-item ${isActive('jvm-internals.html')}" href="${basePath}pages/jvm-internals.html"><span class="dot"></span>JVM Internals</a>
          <a class="nav-item ${isActive('modern-features.html')}" href="${basePath}pages/modern-features.html"><span class="dot"></span>Modern Features</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['java-project-structure.html', 'build-tools.html', 'testing.html', 'jdbc.html', 'design-patterns.html'])}">
          <span>Professional</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['java-project-structure.html', 'build-tools.html', 'testing.html', 'jdbc.html', 'design-patterns.html'])}">
          <a class="nav-item ${isActive('java-project-structure.html')}" href="${basePath}pages/java-project-structure.html"><span class="dot"></span>Project Structure</a>
          <a class="nav-item ${isActive('build-tools.html')}" href="${basePath}pages/build-tools.html"><span class="dot"></span>Maven & Gradle</a>
          <a class="nav-item ${isActive('testing.html')}" href="${basePath}pages/testing.html"><span class="dot"></span>Testing</a>
          <a class="nav-item ${isActive('jdbc.html')}" href="${basePath}pages/jdbc.html"><span class="dot"></span>JDBC & SQL</a>
          <a class="nav-item ${isActive('design-patterns.html')}" href="${basePath}pages/design-patterns.html"><span class="dot"></span>Patterns & SOLID</a>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Quick Reference</div>
        <a class="nav-item ${isActive('cheatsheet.html')}" href="${basePath}pages/cheatsheet.html"><span class="dot"></span>📋 Cheat Sheet</a>
      </div>
    </div>
  `;
  
  const progress = getProgress();
  sidebar.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const filename = href.split('/').pop();
      if (filename && filename !== 'index.html' && progress.completed.includes(filename)) {
        link.classList.add('completed');
      }
    }
  });
}
renderSidebar();

const coursePages = [
  { file: 'index.html', path: 'index.html', title: 'Home' },
  { file: 'basics.html', path: 'basics.html', title: 'Java Fundamentals' },
  { file: 'what-is-java.html', path: 'pages/what-is-java.html', title: 'What is Java?' },
  { file: 'setup.html', path: 'pages/setup.html', title: 'Setup and Hello World' },
  { file: 'datatypes.html', path: 'pages/datatypes.html', title: 'Data Types and Variables' },
  { file: 'operators.html', path: 'pages/operators.html', title: 'Operators' },
  { file: 'controlflow.html', path: 'pages/controlflow.html', title: 'Control Flow' },
  { file: 'strings.html', path: 'pages/strings.html', title: 'Strings' },
  { file: 'math-utils.html', path: 'pages/math-utils.html', title: 'Math and Utilities' },
  { file: 'arrays.html', path: 'pages/arrays.html', title: 'Arrays' },
  { file: 'methods.html', path: 'pages/methods.html', title: 'Methods' },
  { file: 'oop.html', path: 'oop.html', title: 'Object-Oriented Programming' },
  { file: 'classes.html', path: 'pages/classes.html', title: 'Classes and Objects' },
  { file: 'inheritance.html', path: 'pages/inheritance.html', title: 'Inheritance' },
  { file: 'interfaces.html', path: 'pages/interfaces.html', title: 'Interfaces and Abstract Classes' },
  { file: 'enums-records.html', path: 'pages/enums-records.html', title: 'Enums and Records' },
  { file: 'functional.html', path: 'functional.html', title: 'Functional Java' },
  { file: 'lambdas.html', path: 'pages/lambdas.html', title: 'Lambdas and Optional' },
  { file: 'streams.html', path: 'pages/streams.html', title: 'Streams API' },
  { file: 'collections.html', path: 'collections.html', title: 'Collections and Generics' },
  { file: 'generics.html', path: 'pages/generics.html', title: 'Generics Deep Dive' },
  { file: 'collections-deep.html', path: 'pages/collections-deep.html', title: 'Collections Deep Dive' },
  { file: 'advanced.html', path: 'advanced.html', title: 'Advanced Java' },
  { file: 'exceptions-io.html', path: 'pages/exceptions-io.html', title: 'Exceptions and Error Handling' },
  { file: 'java-io-streams.html', path: 'pages/java-io-streams.html', title: 'Java I/O Streams' },
  { file: 'io-network.html', path: 'pages/io-network.html', title: 'File I/O and Networking' },
  { file: 'datetime.html', path: 'pages/datetime.html', title: 'Date and Time API' },
  { file: 'concurrency.html', path: 'pages/concurrency.html', title: 'Concurrency' },
  { file: 'reflection.html', path: 'pages/reflection.html', title: 'Reflection and Annotations' },
  { file: 'jvm-internals.html', path: 'pages/jvm-internals.html', title: 'JVM Internals' },
  { file: 'modern-features.html', path: 'pages/modern-features.html', title: 'Modern Features' },
  { file: 'jdbc.html', path: 'pages/jdbc.html', title: 'JDBC and SQL' },
  { file: 'java-project-structure.html', path: 'pages/java-project-structure.html', title: 'Project Structure' },
  { file: 'build-tools.html', path: 'pages/build-tools.html', title: 'Maven and Gradle' },
  { file: 'testing.html', path: 'pages/testing.html', title: 'Testing' },
  { file: 'design-patterns.html', path: 'pages/design-patterns.html', title: 'Patterns and SOLID' },
  { file: 'cheatsheet.html', path: 'pages/cheatsheet.html', title: 'Java Cheat Sheet' }
];

// Redundant course-pager removed as static footer navigation handles course progress.

// COMPLETION BUTTON INJECTION
function renderCompletionButton() {
  const contentArea = document.querySelector('.content-area');
  if (!contentArea || currentPage === 'index.html' || currentPage === '') return;

  const isCompleted = isLessonCompleted(currentPage);
  
  const completionHtml = `
    <div class="completion-zone animate-fade">
      <button id="complete-btn" class="btn ${isCompleted ? 'completed' : 'btn-secondary'}">
        <span class="btn-icon">${isCompleted ? '✓' : '○'}</span>
        <span class="btn-text">${isCompleted ? 'Lesson Completed' : 'Mark as Completed'}</span>
      </button>
    </div>
  `;

  contentArea.insertAdjacentHTML('beforeend', completionHtml);

  const btn = document.getElementById('complete-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const currentlyCompleted = toggleLessonCompleted(currentPage);
      btn.classList.toggle('completed', currentlyCompleted);
      btn.classList.toggle('btn-secondary', !currentlyCompleted);
      
      const icon = btn.querySelector('.btn-icon');
      const text = btn.querySelector('.btn-text');
      if (icon) icon.textContent = currentlyCompleted ? '✓' : '○';
      if (text) text.textContent = currentlyCompleted ? 'Lesson Completed' : 'Mark as Completed';

      renderSidebar();
    });
  }
}
renderCompletionButton();

// HOMEPAGE PROGRESS CARD
function getFirstUncompletedPage() {
  const progress = getProgress();
  const lesson = coursePages.find(page => {
    if (page.file === 'index.html') return false;
    return !progress.completed.includes(page.file);
  });
  return lesson || null;
}

function renderHomepageProgress() {
  if (currentPage !== 'index.html' && currentPage !== '') return;
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const progress = getProgress();
  const totalLessons = coursePages.filter(p => p.file !== 'index.html').length;
  const completedCount = progress.completed.length;
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const nextLesson = getFirstUncompletedPage();
  const resumeBtnHtml = nextLesson 
    ? `<a href="${basePath + nextLesson.path}" class="btn btn-primary pd-resume">Resume: ${nextLesson.title}</a>`
    : `<button class="btn btn-primary pd-resume" onclick="resetAllProgress()">Course Complete! Restart</button>`;

  const dashboardHtml = `
    <div class="progress-dashboard glass animate-fade">
      <div class="pd-info">
        <div class="pd-text-group">
          <div class="pd-label">YOUR PROGRESS</div>
          <div class="pd-stats">${completedCount} of ${totalLessons} Lessons Completed</div>
        </div>
        <div class="pd-percentage-circle">
          <svg class="progress-ring" width="60" height="60">
            <circle class="progress-ring__background" stroke="var(--border)" stroke-width="4" fill="transparent" r="24" cx="30" cy="30"/>
            <circle class="progress-ring__circle" stroke="var(--primary)" stroke-width="4" fill="transparent" r="24" cx="30" cy="30"
              style="stroke-dasharray: 150.79; stroke-dashoffset: ${150.79 - (150.79 * percentage / 100)};"
            />
          </svg>
          <div class="pd-percentage-text">${percentage}%</div>
        </div>
      </div>
      <div class="pd-action">
        ${resumeBtnHtml}
      </div>
    </div>
  `;

  const heroBtns = hero.querySelector('.hero-btns');
  if (heroBtns) {
    heroBtns.insertAdjacentHTML('beforebegin', dashboardHtml);
  }
}

window.resetAllProgress = function() {
  if (confirm("Are you sure you want to reset all your progress?")) {
    saveProgress({ completed: [], quizzes: {} });
    window.location.reload();
  }
};

renderHomepageProgress();


// SIDEBAR TOGGLE
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

function isMobile() { return window.innerWidth <= 768; }

menuBtn.addEventListener('click', () => {
  if (isMobile()) {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('show');
  } else {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  }
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('mobile-open');
  overlay.classList.remove('show');
});

// PROGRESS BAR
const progressFill = document.getElementById('progress-fill');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressFill.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  // back to top
  const btt = document.getElementById('btt');
  if (scrollTop > 400) btt.classList.add('show'); else btt.classList.remove('show');
});

document.getElementById('btt').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// SCROLL ANIMATIONS & ACTIVE NAV
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item[data-section]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // Update active nav
      if (e.target.id) {
        navItems.forEach(n => {
          n.classList.toggle('active', n.dataset.section === e.target.id);
        });
      }
    }
  });
}, { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 });

sections.forEach(s => observer.observe(s));

// Nav Groups Logic
// NAV GROUPS
document.querySelectorAll('.nav-group-header').forEach(h => {
  h.addEventListener('click', () => {
    h.classList.toggle('open');
    h.nextElementSibling.classList.toggle('open');
  });
});
// open first group by default only when none is active from page context
if (!document.querySelector('.nav-group-header.open')) {
  const firstHeader = document.querySelector('.nav-group-header');
  if (firstHeader) { firstHeader.classList.add('open'); firstHeader.nextElementSibling.classList.add('open'); }
}

// COPY BUTTONS
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.code-block').querySelector('code');
    navigator.clipboard.writeText(code.innerText).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.innerHTML = 'Copy'; btn.classList.remove('copied'); }, 1800);
    });
  });
});

// TABS
document.querySelectorAll('.tabs').forEach(tabsEl => {
  const btns = tabsEl.querySelectorAll('.tab-btn');
  const panels = tabsEl.querySelectorAll('.tab-panel');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels[i].classList.add('active');
    });
  });
  if (btns[0]) btns[0].click();
});

// Inject Run Code button into code blocks
document.querySelectorAll('.code-header').forEach(header => {
  const runBtn = document.createElement('a');
  runBtn.href = 'https://www.onlinegdb.com/online_java_compiler';
  runBtn.target = '_blank';
  runBtn.className = 'copy-btn'; // reuse styling
  runBtn.innerHTML = 'Run';
  runBtn.style.marginRight = '8px';
  runBtn.style.textDecoration = 'none';
  header.insertBefore(runBtn, header.querySelector('.copy-btn'));
});

// INJECT SEARCH BAR on pages that don't have one
if (!document.getElementById('search')) {
  const topbar = document.getElementById('topbar');
  if (topbar) {
    const searchWrap = document.createElement('div');
    searchWrap.id = 'search-wrap';
    searchWrap.innerHTML = `
      <svg class="search-icon" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input id="search" type="text" placeholder="Search topics, APIs, concepts" autocomplete="off">
      <div id="search-results"></div>
    `;
    const topbarRight = topbar.querySelector('.topbar-right');
    if (topbarRight) topbar.insertBefore(searchWrap, topbarRight);
    else topbar.appendChild(searchWrap);
  }
}

// Load global search index
const searchScript = document.createElement('script');
searchScript.src = basePath + 'search-data.js';
document.head.appendChild(searchScript);

const searchIndex = [];
document.querySelectorAll('.section[id]').forEach(sec => {
  const title = sec.querySelector('h2')?.textContent || '';
  const category = sec.closest('[data-category]')?.dataset.category || '';
  searchIndex.push({ id: sec.id, title, category });
  sec.querySelectorAll('.subsection').forEach(sub => {
    const subTitle = sub.querySelector('h3')?.textContent || '';
    if (subTitle) searchIndex.push({ id: sec.id, title: subTitle, category: title });
  });
});

const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { searchResults.classList.remove('show'); return; }
    
    const localMatches = searchIndex.filter(item => item.title.toLowerCase().includes(q)).map(m => ({
      link: '#' + m.id,
      title: m.title,
      category: m.category ? m.category + ' (On this page)' : 'On this page'
    }));

    let globalMatches = [];
    if (window.globalSearchIndex) {
      globalMatches = window.globalSearchIndex.filter(item => 
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      ).map(m => ({
        link: basePath + 'pages/' + m.id,
        title: m.title,
        category: m.category + ' (Global)'
      }));
    }

    const matches = [...localMatches, ...globalMatches].slice(0, 8);

    if (!matches.length) { 
      searchResults.innerHTML = '<div class="sr-item"><div class="sr-item-title">No results found</div></div>'; 
      searchResults.classList.add('show'); 
      return; 
    }
    
    searchResults.innerHTML = matches.map((m, idx) =>
      `<a class="sr-item" href="${m.link}" data-index="${idx}" style="display:block;text-decoration:none;">
        <div class="sr-item-title">${m.title}</div>
        <div class="sr-item-cat">${m.category}</div>
      </a>`
    ).join('');
    searchResults.classList.add('show');
    activeSearchIndex = -1;
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#search-wrap')) searchResults.classList.remove('show');
  });

  let activeSearchIndex = -1;

  function updateSearchHighlight(items) {
    items.forEach((item, idx) => {
      if (idx === activeSearchIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  searchInput.addEventListener('keydown', e => {
    const items = searchResults.querySelectorAll('.sr-item');
    if (e.key === 'Escape') {
      searchResults.classList.remove('show');
      searchInput.blur();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!items.length) return;
      activeSearchIndex = (activeSearchIndex + 1) % items.length;
      updateSearchHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!items.length) return;
      activeSearchIndex = (activeSearchIndex - 1 + items.length) % items.length;
      updateSearchHighlight(items);
    } else if (e.key === 'Enter') {
      if (activeSearchIndex > -1 && items[activeSearchIndex]) {
        e.preventDefault();
        items[activeSearchIndex].click();
      }
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput && 
        document.activeElement.tagName !== 'INPUT' && 
        document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

function goTo(id) {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  if (searchResults) searchResults.classList.remove('show');
  if (searchInput) searchInput.value = '';
  if (isMobile()) { sidebar.classList.remove('mobile-open'); overlay.classList.remove('show'); }
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-item[data-section]').forEach(item => {
  item.addEventListener('click', () => {
    goTo(item.dataset.section);
    if (isMobile()) { sidebar.classList.remove('mobile-open'); overlay.classList.remove('show'); }
  });
});

// Pill nav
document.querySelectorAll('.pill[data-section]').forEach(pill => {
  pill.addEventListener('click', () => goTo(pill.dataset.section));
});

// THEME TOGGLE
const topbarRight = document.querySelector('.topbar-right');
if (topbarRight) {
  const themeBtn = document.createElement('button');
  themeBtn.id = 'theme-toggle';
  themeBtn.type = 'button';
  themeBtn.setAttribute('aria-label', 'Toggle theme');
  themeBtn.title = 'Toggle theme';
  
  // Insert before the progress badge
  topbarRight.insertBefore(themeBtn, topbarRight.firstChild);

  // Check saved theme
  const savedTheme = localStorage.getItem('javamaster-theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    themeBtn.setAttribute('aria-label', 'Switch to light theme');
  }

  themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('javamaster-theme', 'dark');
      themeBtn.setAttribute('aria-label', 'Switch to light theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('javamaster-theme', 'light');
      themeBtn.setAttribute('aria-label', 'Switch to dark theme');
    }
  });
}

// QUIZ ENGINE
const quizScript = document.createElement('script');
quizScript.src = basePath + 'quiz-data.js';
quizScript.onload = function() {
  (function() {
    const pageFile = window.location.pathname.split('/').pop() || 'index.html';
    let quizList = quizDB[pageFile];

    if (!quizList) return;
    if (!Array.isArray(quizList)) quizList = [quizList];

    const contentArea = document.querySelector('.content-area');
    if (!contentArea) return;
    if (document.getElementById('quiz') || document.getElementById('quiz-container')) return;

    let currentQ = 0;
    let score = 0;

    const quizHTML = `
      <div id="quiz-container" class="animate-fade">
        <div class="quiz-header">
          <span id="quiz-title">Test Your Knowledge</span>
        </div>
        <div class="quiz-question" id="quiz-q-text"></div>
        <div class="quiz-options" id="quiz-opts"></div>
        <button class="quiz-btn" id="quiz-submit" disabled>Check Answer</button>
        <button class="quiz-btn" id="quiz-next" style="display:none; background: var(--surface); color: var(--text); border: 1px solid var(--border);">Next Question</button>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>
    `;

    contentArea.insertAdjacentHTML('beforeend', quizHTML);

    const qText = document.getElementById('quiz-q-text');
    const optsContainer = document.getElementById('quiz-opts');
    const submitBtn = document.getElementById('quiz-submit');
    const nextBtn = document.getElementById('quiz-next');
    const feedback = document.getElementById('quiz-feedback');
    const title = document.getElementById('quiz-title');

    function renderQuestion() {
      const q = quizList[currentQ];
      title.innerText = `Test Your Knowledge (${currentQ + 1}/${quizList.length})`;
      qText.innerHTML = q.question;
      optsContainer.innerHTML = q.options.map((opt, i) => `
        <label class="quiz-option" data-index="${i}">
          <input type="radio" name="quiz" value="${i}">
          <span>${opt}</span>
        </label>
      `).join('');
      
      submitBtn.style.display = 'inline-block';
      submitBtn.disabled = true;
      nextBtn.style.display = 'none';
      feedback.classList.remove('show', 'success', 'error');
      feedback.innerHTML = '';

      const radios = document.querySelectorAll('.quiz-option input[type="radio"]');
      radios.forEach(radio => {
        radio.addEventListener('change', () => { submitBtn.disabled = false; });
      });
    }

    submitBtn.addEventListener('click', () => {
      const selected = document.querySelector('.quiz-option input[type="radio"]:checked');
      if (!selected) return;
      
      const q = quizList[currentQ];
      const selectedIdx = parseInt(selected.value);
      const isCorrect = selectedIdx === q.answer;
      if (isCorrect) score++;

      document.querySelectorAll('.quiz-option input[type="radio"]').forEach(r => r.disabled = true);
      submitBtn.style.display = 'none';
      nextBtn.style.display = 'inline-block';

      document.querySelectorAll('.quiz-option').forEach((opt, idx) => {
        if (idx === q.answer) opt.classList.add('correct');
        else if (idx === selectedIdx && !isCorrect) opt.classList.add('wrong');
      });

      feedback.classList.remove('success', 'error');
      feedback.classList.add('show', isCorrect ? 'success' : 'error');
      feedback.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br><br>${q.explanation}`;
      
      if (currentQ === quizList.length - 1) {
        nextBtn.innerText = 'See Final Score';
      }
    });

    nextBtn.addEventListener('click', () => {
      currentQ++;
      if (currentQ < quizList.length) {
        renderQuestion();
      } else {
        title.innerText = 'Quiz Complete!';
        qText.innerHTML = `You scored <strong>${score}</strong> out of <strong>${quizList.length}</strong>.`;
        optsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
        feedback.classList.remove('show');
      }
    });

    renderQuestion();
  })();
};
document.head.appendChild(quizScript);

// ═══════════════════════════════════════════════════════════
//  JAVAMASTER SYNTAX HIGHLIGHTER
//  Auto-highlights every .code-block on every page.
//  Detects language from .code-lang text.
//  Skips blocks that already have child <span> tags.
// ═══════════════════════════════════════════════════════════
(function highlightAll() {

  function getLang(block) {
    const langEl = block.querySelector('.code-lang');
    if (!langEl) return 'java';
    const t = langEl.textContent.trim().toLowerCase();
    if (t === 'shell' || t === 'bash' || t === 'sh' || t === 'pipeline') return 'shell';
    if (t === 'xml') return 'xml';
    if (t === 'groovy' || t === 'kotlin') return 'groovy';
    return 'java';
  }

  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ── Java / Groovy / Kotlin ─────────────────────────────
  const JAVA_KW = new Set([
    'abstract','assert','boolean','break','byte','case','catch','char','class',
    'const','continue','default','do','double','else','enum','extends','final',
    'finally','float','for','goto','if','implements','import','instanceof','int',
    'interface','long','native','new','null','package','private','protected',
    'public','return','short','static','strictfp','super','switch','synchronized',
    'this','throw','throws','transient','try','var','void','volatile','while',
    'record','sealed','permits','yield','when','true','false',
    'fun','val','lateinit','companion','object','data','inline','reified',
    'suspend','override','open','internal','out','in','crossinline','noinline',
  ]);

  function highlightJava(raw) {
    const out = [];
    let i = 0;
    const n = raw.length;

    while (i < n) {
      let ch = raw[i];

      // Single-line comment
      if (ch === '/' && raw[i+1] === '/') {
        const end = raw.indexOf('\n', i);
        const tok = end < 0 ? raw.slice(i) : raw.slice(i, end);
        out.push('<span class="cm">' + esc(tok) + '</span>');
        i += tok.length;
        continue;
      }
      // Block comment
      if (ch === '/' && raw[i+1] === '*') {
        const end = raw.indexOf('*/', i+2);
        const tok = end < 0 ? raw.slice(i) : raw.slice(i, end+2);
        out.push('<span class="cm">' + esc(tok) + '</span>');
        i += tok.length;
        continue;
      }
      // Text block """
      if (ch === '"' && raw[i+1] === '"' && raw[i+2] === '"') {
        const end = raw.indexOf('"""', i+3);
        const tok = end < 0 ? raw.slice(i) : raw.slice(i, end+3);
        out.push('<span class="st">' + esc(tok) + '</span>');
        i += tok.length;
        continue;
      }
      // String literal "
      if (ch === '"') {
        let j = i+1;
        while (j < n && raw[j] !== '"') { if (raw[j] === '\\') j++; j++; }
        const tok = raw.slice(i, j+1);
        out.push('<span class="st">' + esc(tok) + '</span>');
        i = j+1;
        continue;
      }
      // Char literal '
      if (ch === "'") {
        let j = i+1;
        while (j < n && raw[j] !== "'") { if (raw[j] === '\\') j++; j++; }
        const tok = raw.slice(i, j+1);
        out.push('<span class="st">' + esc(tok) + '</span>');
        i = j+1;
        continue;
      }
      // Annotation @
      if (ch === '@') {
        const m = raw.slice(i).match(/^@[A-Za-z_$][A-Za-z0-9_$]*/);
        if (m) { out.push('<span class="an">' + esc(m[0]) + '</span>'); i += m[0].length; continue; }
      }
      // Number
      if (/[0-9]/.test(ch)) {
        const m = raw.slice(i).match(/^0[xXbB][0-9a-fA-F_]+[Ll]?|[0-9][0-9_]*(?:\.[0-9_]+)?(?:[eE][+-]?[0-9]+)?[LlFfDd]?/);
        if (m) { out.push('<span class="nm">' + esc(m[0]) + '</span>'); i += m[0].length; continue; }
      }
      // Identifier / keyword
      if (/[A-Za-z_$]/.test(ch)) {
        const m = raw.slice(i).match(/^[A-Za-z_$][A-Za-z0-9_$]*/);
        const word = m[0];
        if (JAVA_KW.has(word)) {
          out.push('<span class="kw">' + esc(word) + '</span>');
        } else if (/^[A-Z]/.test(word)) {
          const after = raw.slice(i + word.length).replace(/\s+/, '');
          out.push('<span class="' + (after[0]==='(' ? 'fn' : 'cl') + '">' + esc(word) + '</span>');
        } else {
          const after = raw.slice(i + word.length).replace(/\s+/, '');
          out.push(after[0]==='(' ? '<span class="fn">'+esc(word)+'</span>' : esc(word));
        }
        i += word.length;
        continue;
      }
      // Operator chars
      if (/[+\-*/%=<>!&|^~?:.]/.test(ch)) {
        const m = raw.slice(i).match(/^[+\-*/%=<>!&|^~?:.]+/);
        if (m) { out.push('<span class="op">' + esc(m[0]) + '</span>'); i += m[0].length; continue; }
      }
      // Everything else (whitespace, brackets, semicolons…)
      out.push(esc(ch));
      i++;
    }
    return out.join('');
  }

  // ── Shell / Bash ───────────────────────────────────────
  const SHELL_CMDS = [
    'if','then','else','fi','for','do','done','while','case','esac','function',
    'export','source','echo','printf','cd','ls','mkdir','rm','cp','mv','cat',
    'grep','sed','awk','curl','wget','tar','chmod','sudo','apt','brew','winget',
    'java','javac','mvn','./mvnw','./gradlew','gradle','sdk','docker','git',
  ];

  function highlightShell(raw) {
    return raw.split('\n').map(line => {
      if (/^\s*#/.test(line)) return '<span class="cm">' + esc(line) + '</span>';
      let o = '';
      let i = 0;
      const n = line.length;
      while (i < n) {
        // Inline comment
        if (line[i] === '#') { o += '<span class="cm">' + esc(line.slice(i)) + '</span>'; break; }
        // String "..."
        if (line[i] === '"') {
          let j = i+1; while (j < n && line[j] !== '"') { if (line[j]==='\\') j++; j++; }
          o += '<span class="st">' + esc(line.slice(i, j+1)) + '</span>'; i = j+1; continue;
        }
        // String '...'
        if (line[i] === "'") {
          let j = i+1; while (j < n && line[j] !== "'") j++;
          o += '<span class="st">' + esc(line.slice(i, j+1)) + '</span>'; i = j+1; continue;
        }
        // Word token
        if (/[A-Za-z_.\/]/.test(line[i])) {
          const m = line.slice(i).match(/^[\w.\/\-]+/);
          if (m) {
            const word = m[0];
            if (SHELL_CMDS.includes(word)) o += '<span class="kw">' + esc(word) + '</span>';
            else o += esc(word);
            i += word.length; continue;
          }
        }
        // Flag --flag or -f
        if (line[i] === '-') {
          const m = line.slice(i).match(/^--?[\w-]+/);
          if (m) { o += '<span class="fn">' + esc(m[0]) + '</span>'; i += m[0].length; continue; }
        }
        // Number
        if (/[0-9]/.test(line[i])) {
          const m = line.slice(i).match(/^[\d_.]+/);
          if (m) { o += '<span class="nm">' + esc(m[0]) + '</span>'; i += m[0].length; continue; }
        }
        o += esc(line[i]); i++;
      }
      return o;
    }).join('\n');
  }

  // ── XML ────────────────────────────────────────────────
  function highlightXml(raw) {
    let o = esc(raw);
    // Comments
    o = o.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="cm">$1</span>');
    // Closing tag </tag>
    o = o.replace(/(&lt;\/)([\w.-]+)(&gt;)/g, '<span class="op">$1</span><span class="kw">$2</span><span class="op">$3</span>');
    // Opening tag <tag
    o = o.replace(/(&lt;)([\w.-]+)/g, '<span class="op">$1</span><span class="kw">$2</span>');
    // Attributes
    o = o.replace(/\s([\w:.-]+)=/g, ' <span class="fn">$1</span>=');
    // Attribute values
    o = o.replace(/=(&quot;[^&]*?&quot;)/g, '=<span class="st">$1</span>');
    return o;
  }

  // ── Apply to every code block ──────────────────────────
  document.querySelectorAll('.code-block').forEach(block => {
    const codeEl = block.querySelector('code');
    if (!codeEl) return;
    // Skip if already manually highlighted (has child spans)
    if (codeEl.querySelector('span')) return;

    const raw = codeEl.textContent;
    const lang = getLang(block);

    let html;
    if      (lang === 'shell') html = highlightShell(raw);
    else if (lang === 'xml')   html = highlightXml(raw);
    else                       html = highlightJava(raw);

    codeEl.innerHTML = html;
  });

})();

// FLOATING TABLE OF CONTENTS
function generateTOC() {
  const contentArea = document.querySelector('.content-area');
  if (!contentArea || currentPage === 'index.html' || currentPage === '') return;

  const headings = Array.from(contentArea.querySelectorAll('.subsection h3'));
  if (headings.length < 2) return;

  const tocContainer = document.createElement('div');
  tocContainer.id = 'floating-toc';
  tocContainer.className = 'glass animate-fade';
  
  let linksHtml = '';
  headings.forEach((heading, idx) => {
    const id = heading.id || `toc-h3-${idx}`;
    heading.id = id;
    linksHtml += `<a class="toc-link" href="#${id}">${heading.textContent.replace('✓', '').trim()}</a>`;
  });

  tocContainer.innerHTML = `
    <div class="toc-title">On This Page</div>
    <div class="toc-links">${linksHtml}</div>
  `;

  document.body.appendChild(tocContainer);

  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.toc-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, observerOptions);

  headings.forEach(heading => observer.observe(heading));
}
generateTOC();

// Setup active state highlighting for sticky #page-toc bar
function setupPageTOC() {
  const pageToc = document.getElementById('page-toc');
  if (!pageToc) return;

  const links = pageToc.querySelectorAll('a');
  const sections = Array.from(links).map(link => {
    const id = link.getAttribute('href');
    return id ? document.querySelector(id) : null;
  }).filter(Boolean);

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isActive);
          if (isActive) {
            // Smoothly scroll the sticky TOC container horizontally to keep the active pill in view
            const containerLeft = pageToc.getBoundingClientRect().left;
            const linkLeft = link.getBoundingClientRect().left;
            const linkWidth = link.offsetWidth;
            const containerWidth = pageToc.offsetWidth;
            const targetScrollLeft = pageToc.scrollLeft + (linkLeft - containerLeft) - (containerWidth / 2) + (linkWidth / 2);
            pageToc.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
setupPageTOC();

// ═══════════════════════════════════════════════════════════
//  BOOKMARK UI — star buttons on h3s + topbar panel
// ═══════════════════════════════════════════════════════════
(function initBookmarkUI() {
  // Add star to each subsection h3 that has an id
  document.querySelectorAll('.subsection h3').forEach(h3 => {
    const section = h3.closest('.section[id]') || h3.closest('[id]');
    if (!section || !section.id) return;
    const sectionId = section.id;
    const title = h3.textContent.replace('✓', '').trim();
    const starred = isBookmarked(currentPage, sectionId);

    const star = document.createElement('button');
    star.className = 'bookmark-star' + (starred ? ' active' : '');
    star.innerHTML = starred ? '★' : '☆';
    star.title = starred ? 'Remove bookmark' : 'Bookmark this section';
    star.setAttribute('aria-label', star.title);
    star.addEventListener('click', (e) => {
      e.stopPropagation();
      const added = toggleBookmark(currentPage, sectionId, title);
      star.classList.toggle('active', added);
      star.innerHTML = added ? '★' : '☆';
      star.title = added ? 'Remove bookmark' : 'Bookmark this section';
      updateBookmarkPanel();
    });
    h3.appendChild(star);
  });

  // Add bookmarks button to topbar
  const topbarRight = document.querySelector('.topbar-right');
  if (!topbarRight) return;

  const bmBtn = document.createElement('button');
  bmBtn.id = 'bookmarks-toggle';
  bmBtn.type = 'button';
  bmBtn.setAttribute('aria-label', 'Bookmarks');
  bmBtn.title = 'Bookmarks';
  topbarRight.insertBefore(bmBtn, topbarRight.firstChild);

  const bmPanel = document.createElement('div');
  bmPanel.id = 'bookmarks-panel';
  bmPanel.className = 'glass';
  document.body.appendChild(bmPanel);

  function updateBookmarkPanel() {
    const bookmarks = getBookmarks();
    if (!bookmarks.length) {
      bmPanel.innerHTML = `
        <div class="bm-header">Bookmarks</div>
        <div class="bm-empty">No bookmarks yet.<br>Click the ☆ on any section heading to save it.</div>
      `;
      return;
    }
    // Group by page
    const grouped = {};
    bookmarks.forEach(b => {
      const pageInfo = coursePages.find(p => p.file === b.page);
      const label = pageInfo ? pageInfo.title : b.page;
      if (!grouped[label]) grouped[label] = { page: b.page, items: [] };
      grouped[label].items.push(b);
    });

    let html = '<div class="bm-header">Bookmarks <button id="bm-clear" title="Clear all">✕</button></div>';
    for (const [label, group] of Object.entries(grouped)) {
      html += `<div class="bm-group-title">${label}</div>`;
      group.items.forEach(b => {
        const pagePath = coursePages.find(p => p.file === b.page);
        const href = pagePath ? basePath + pagePath.path + '#' + b.sectionId : '#' + b.sectionId;
        html += `<a class="bm-item" href="${href}"><span class="bm-star">★</span>${b.title}</a>`;
      });
    }
    bmPanel.innerHTML = html;

    const clearBtn = bmPanel.querySelector('#bm-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Clear all bookmarks?')) {
          saveBookmarks([]);
          updateBookmarkPanel();
          document.querySelectorAll('.bookmark-star').forEach(s => {
            s.classList.remove('active');
            s.innerHTML = '☆';
          });
        }
      });
    }
  }

  updateBookmarkPanel();

  let panelOpen = false;
  bmBtn.addEventListener('click', () => {
    panelOpen = !panelOpen;
    bmPanel.classList.toggle('show', panelOpen);
    bmBtn.classList.toggle('active', panelOpen);
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#bookmarks-panel') && !e.target.closest('#bookmarks-toggle')) {
      bmPanel.classList.remove('show');
      bmBtn.classList.remove('active');
      panelOpen = false;
    }
  });
})();

// ═══════════════════════════════════════════════════════════
//  SHARE LESSON LINK — copy URL to clipboard
// ═══════════════════════════════════════════════════════════
(function initShareButton() {
  if (currentPage === 'index.html' || currentPage === '') return;
  const topbarRight = document.querySelector('.topbar-right');
  if (!topbarRight) return;

  const shareBtn = document.createElement('button');
  shareBtn.id = 'share-btn';
  shareBtn.type = 'button';
  shareBtn.setAttribute('aria-label', 'Share this lesson');
  shareBtn.title = 'Copy link to clipboard';
  topbarRight.insertBefore(shareBtn, topbarRight.firstChild);

  shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      shareBtn.classList.add('copied');
      shareBtn.title = 'Copied!';
      setTimeout(() => {
        shareBtn.classList.remove('copied');
        shareBtn.title = 'Copy link to clipboard';
      }, 2000);
    }).catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      shareBtn.classList.add('copied');
      setTimeout(() => shareBtn.classList.remove('copied'), 2000);
    });
  });
})();

// ═══════════════════════════════════════════════════════════
//  PRINT / DOWNLOAD PDF — print-friendly via window.print()
// ═══════════════════════════════════════════════════════════
(function initPrintButton() {
  if (currentPage === 'index.html' || currentPage === '') return;
  const topbarRight = document.querySelector('.topbar-right');
  if (!topbarRight) return;

  const printBtn = document.createElement('button');
  printBtn.id = 'print-btn';
  printBtn.type = 'button';
  printBtn.setAttribute('aria-label', 'Print or save as PDF');
  printBtn.title = 'Print / Save as PDF';
  topbarRight.insertBefore(printBtn, topbarRight.firstChild);

  printBtn.addEventListener('click', () => {
    window.print();
  });
})();

// ═══════════════════════════════════════════════════════════
//  FLASHCARD / SPACED REPETITION MODE
//  Pulls questions from quiz-data.js for the current page
// ═══════════════════════════════════════════════════════════
(function initFlashcards() {
  // Wait for quiz-data to load, then build flashcard UI
  function tryInit() {
    if (typeof quizDB === 'undefined') return;

    const pageFile = currentPage;
    let cards = quizDB[pageFile];
    if (!cards) return;
    if (!Array.isArray(cards)) cards = [cards];
    if (cards.length < 1) return;

    // Add flashcard button to the content area (after quiz or at bottom)
    const contentArea = document.querySelector('.content-area');
    if (!contentArea) return;
    if (document.getElementById('flashcard-zone')) return;

    const fcZone = document.createElement('div');
    fcZone.id = 'flashcard-zone';
    fcZone.className = 'animate-fade';

    const triggerBtn = document.createElement('button');
    triggerBtn.id = 'flashcard-trigger';
    triggerBtn.className = 'btn btn-secondary';
    triggerBtn.innerHTML = '🃏 Practice Flashcards (' + cards.length + ')';
    fcZone.appendChild(triggerBtn);

    const fcContainer = document.createElement('div');
    fcContainer.id = 'flashcard-container';
    fcContainer.style.display = 'none';
    fcZone.appendChild(fcContainer);

    contentArea.appendChild(fcZone);

    // Flashcard state
    const FC_KEY = 'javamaster_flashcards';
    function getFCState() {
      const d = localStorage.getItem(FC_KEY);
      return d ? JSON.parse(d) : {};
    }
    function saveFCState(state) {
      localStorage.setItem(FC_KEY, JSON.stringify(state));
    }

    // Shuffle
    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    let currentIdx = 0;
    let deck = [];
    let flipped = false;

    function renderCard() {
      if (deck.length === 0) {
        fcContainer.innerHTML = `
          <div class="fc-done">
            <div class="fc-done-icon">🎉</div>
            <div class="fc-done-text">All cards reviewed!</div>
            <button class="btn btn-secondary fc-restart">Restart Deck</button>
          </div>`;
        fcContainer.querySelector('.fc-restart').addEventListener('click', startDeck);
        return;
      }

      const card = deck[currentIdx];
      flipped = false;

      fcContainer.innerHTML = `
        <div class="fc-progress">${currentIdx + 1} / ${deck.length}</div>
        <div class="fc-card" id="fc-card">
          <div class="fc-front">
            <div class="fc-label">Question</div>
            <div class="fc-question">${card.question}</div>
            <div class="fc-tap">Click to reveal answer</div>
          </div>
          <div class="fc-back" style="display:none;">
            <div class="fc-label">Answer</div>
            <div class="fc-answer">${card.options[card.answer]}</div>
            ${card.explanation ? '<div class="fc-explain">' + card.explanation + '</div>' : ''}
          </div>
        </div>
        <div class="fc-actions" style="display:none;">
          <button class="fc-btn fc-hard" title="Review again soon">😓 Hard</button>
          <button class="fc-btn fc-ok" title="Got it">👍 Got it</button>
          <button class="fc-btn fc-easy" title="Too easy">⚡ Easy</button>
        </div>
        <button class="btn btn-secondary fc-close-btn">Close Flashcards</button>
      `;

      const fcCard = fcContainer.querySelector('#fc-card');
      const fcActions = fcContainer.querySelector('.fc-actions');

      fcCard.addEventListener('click', () => {
        if (flipped) return;
        flipped = true;
        fcCard.querySelector('.fc-front').style.display = 'none';
        fcCard.querySelector('.fc-back').style.display = 'block';
        fcCard.classList.add('flipped');
        fcActions.style.display = 'flex';
      });

      // Rating buttons
      fcContainer.querySelector('.fc-hard').addEventListener('click', () => rateCard('hard'));
      fcContainer.querySelector('.fc-ok').addEventListener('click', () => rateCard('ok'));
      fcContainer.querySelector('.fc-easy').addEventListener('click', () => rateCard('easy'));
      fcContainer.querySelector('.fc-close-btn').addEventListener('click', closeDeck);
    }

    function rateCard(rating) {
      const card = deck[currentIdx];
      const state = getFCState();
      const cardKey = pageFile + '_' + currentIdx;

      if (!state[cardKey]) state[cardKey] = { reviews: 0, lastRating: '' };
      state[cardKey].reviews++;
      state[cardKey].lastRating = rating;
      state[cardKey].lastReview = Date.now();
      saveFCState(state);

      if (rating === 'hard') {
        // Move card to 3 positions later for re-review
        deck.splice(currentIdx, 1);
        const insertAt = Math.min(currentIdx + 3, deck.length);
        deck.splice(insertAt, 0, card);
        // Don't increment currentIdx since we removed current
      } else {
        deck.splice(currentIdx, 1);
        // Don't increment, next card shifts into currentIdx
      }

      if (currentIdx >= deck.length) currentIdx = 0;
      renderCard();
    }

    function startDeck() {
      deck = shuffle(cards.map((c, i) => ({ ...c, _origIdx: i })));
      currentIdx = 0;
      fcContainer.style.display = 'block';
      triggerBtn.style.display = 'none';
      renderCard();
    }

    function closeDeck() {
      fcContainer.style.display = 'none';
      triggerBtn.style.display = 'inline-flex';
    }

    triggerBtn.addEventListener('click', startDeck);
  }

  // Quiz data loads asynchronously — poll briefly
  if (typeof quizDB !== 'undefined') {
    tryInit();
  } else {
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (typeof quizDB !== 'undefined' || attempts > 20) {
        clearInterval(poll);
        tryInit();
      }
    }, 250);
  }
})();

// ═══════════════════════════════════════════════════════════
//  ESTIMATED READING TIME
// ═══════════════════════════════════════════════════════════
(function initReadingTime() {
  if (currentPage === 'index.html' || currentPage === '') return;
  const contentArea = document.querySelector('.content-area');
  if (!contentArea) return;

  // Calculate words (excluding script tags, hidden elements if possible, but innerText mostly handles this)
  const text = contentArea.innerText || contentArea.textContent;
  const words = text.trim().split(/\s+/).length;
  // Average reading speed is roughly 200-250 wpm
  const wpm = 225;
  const mins = Math.max(1, Math.ceil(words / wpm));
  const timeText = `${mins} min read`;

  // Inject into page header
  const sectionHeaderDiv = document.querySelector('.section-header div:last-child');
  if (sectionHeaderDiv) {
    const pTag = sectionHeaderDiv.querySelector('p');
    if (pTag) {
      const badge = document.createElement('span');
      badge.className = 'reading-time-badge';
      badge.innerText = `⏱ ${timeText}`;
      pTag.appendChild(badge);
    }
  }

  // Inject into sidebar
  const activeNavItem = document.querySelector('#sidebar .nav-item.active');
  if (activeNavItem) {
    const timeSpan = document.createElement('span');
    timeSpan.className = 'sidebar-reading-time';
    timeSpan.innerText = timeText;
    activeNavItem.appendChild(timeSpan);
  }
})();
