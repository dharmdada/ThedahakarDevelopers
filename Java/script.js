// SIDEBAR GENERATION
const isSubPage = window.location.pathname.includes('/pages/');
const basePath = isSubPage ? '../' : './';
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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
        <div class="nav-group-header ${isGroupOpen(['advanced.html', 'exceptions-io.html', 'java-io-streams.html', 'io-network.html', 'concurrency.html', 'datetime.html', 'reflection.html', 'jvm-internals.html', 'modern-features.html', 'jdbc.html'])}">
          <span>Advanced</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['advanced.html', 'exceptions-io.html', 'java-io-streams.html', 'io-network.html', 'concurrency.html', 'datetime.html', 'reflection.html', 'jvm-internals.html', 'modern-features.html', 'jdbc.html'])}">
          <a class="nav-item ${isActive('advanced.html')}" href="${basePath}advanced.html"><span class="dot"></span>Overview</a>
          <a class="nav-item ${isActive('exceptions-io.html')}" href="${basePath}pages/exceptions-io.html"><span class="dot"></span>Exceptions</a>
          <a class="nav-item ${isActive('java-io-streams.html')}" href="${basePath}pages/java-io-streams.html"><span class="dot"></span>I/O Streams</a>
          <a class="nav-item ${isActive('io-network.html')}" href="${basePath}pages/io-network.html"><span class="dot"></span>File I/O & Networking</a>
          <a class="nav-item ${isActive('datetime.html')}" href="${basePath}pages/datetime.html"><span class="dot"></span>Date & Time API</a>
          <a class="nav-item ${isActive('concurrency.html')}" href="${basePath}pages/concurrency.html"><span class="dot"></span>Concurrency</a>
          <a class="nav-item ${isActive('reflection.html')}" href="${basePath}pages/reflection.html"><span class="dot"></span>Reflection & Annotations</a>
          <a class="nav-item ${isActive('jvm-internals.html')}" href="${basePath}pages/jvm-internals.html"><span class="dot"></span>JVM Internals</a>
          <a class="nav-item ${isActive('modern-features.html')}" href="${basePath}pages/modern-features.html"><span class="dot"></span>Modern Features</a>
          <a class="nav-item ${isActive('jdbc.html')}" href="${basePath}pages/jdbc.html"><span class="dot"></span>JDBC & SQL</a>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-group-header ${isGroupOpen(['testing.html', 'build-tools.html', 'design-patterns.html', 'java-project-structure.html'])}">
          <span>Professional</span><span class="chevron">▶</span>
        </div>
        <div class="nav-group-children ${isGroupOpen(['testing.html', 'build-tools.html', 'design-patterns.html', 'java-project-structure.html'])}">
          <a class="nav-item ${isActive('java-project-structure.html')}" href="${basePath}pages/java-project-structure.html"><span class="dot"></span>Project Structure</a>
          <a class="nav-item ${isActive('build-tools.html')}" href="${basePath}pages/build-tools.html"><span class="dot"></span>Maven & Gradle</a>
          <a class="nav-item ${isActive('testing.html')}" href="${basePath}pages/testing.html"><span class="dot"></span>Testing</a>
          <a class="nav-item ${isActive('design-patterns.html')}" href="${basePath}pages/design-patterns.html"><span class="dot"></span>Patterns & SOLID</a>
        </div>
      </div>
    </div>
  `;
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
  { file: 'design-patterns.html', path: 'pages/design-patterns.html', title: 'Patterns and SOLID' }
];

function renderCoursePager() {
  const mainEl = document.getElementById('main');
  const footer = mainEl?.querySelector('footer');
  if (!mainEl || !footer || document.querySelector('.course-pager')) return;

  const index = coursePages.findIndex(page => page.file === currentPage);
  if (index < 0) return;

  const prev = coursePages[index - 1];
  const next = coursePages[index + 1];
  const hrefFor = page => basePath + page.path;

  const prevHtml = prev
    ? `<a class="pager-link prev" href="${hrefFor(prev)}"><span class="pager-kicker">Previous</span><span class="pager-title">${prev.title}</span></a>`
    : '<div class="pager-link pager-spacer" aria-hidden="true"></div>';
  const nextHtml = next
    ? `<a class="pager-link next" href="${hrefFor(next)}"><span class="pager-kicker">Next</span><span class="pager-title">${next.title}</span></a>`
    : '<div class="pager-link pager-spacer" aria-hidden="true"></div>';

  footer.insertAdjacentHTML('beforebegin', `<nav class="course-pager" aria-label="Course navigation">${prevHtml}${nextHtml}</nav>`);
}
renderCoursePager();

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
      // Add visible class for premium fade-up animation
      e.target.classList.add('visible');
      
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

// Staggered animation for cards on load
document.querySelectorAll('.info-card, .hl-box, .feature-list li').forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s`;
  
  const elObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      elObserver.disconnect();
    }
  }, { rootMargin: '0px 0px -50px 0px' });
  
  elObserver.observe(el);
});

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

// GLOBAL SEARCH & RUN CODE

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
    
    searchResults.innerHTML = matches.map(m =>
      `<a class="sr-item" href="${m.link}" style="display:block;text-decoration:none;">
        <div class="sr-item-title">${m.title}</div>
        <div class="sr-item-cat">${m.category}</div>
      </a>`
    ).join('');
    searchResults.classList.add('show');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#search-wrap')) searchResults.classList.remove('show');
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') { searchResults.classList.remove('show'); searchInput.blur(); }
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




