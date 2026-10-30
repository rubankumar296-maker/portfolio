/* ═══════════════════════════════════════════════════════════════
   Ruban Kumar N — Portfolio
   Vanilla JavaScript · no dependencies
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ------------------------------------------------------------------
   Contact details used by interactive elements
------------------------------------------------------------------ */
const CONFIG = {
  email: 'rubankumar296@gmail.com',
  phone: '+918428908154',
  linkedin: 'https://www.linkedin.com/in/rubankumar7',
  github: 'https://github.com/rubankumar296-maker',
  timeZone: 'Asia/Kolkata'
};

/* ------------------------------------------------------------------
   Project case studies
------------------------------------------------------------------ */
const PROJECTS = {
  superstore: {
    category: 'Sales & Retail',
    title: 'Global Superstore Sales & Profit Analytics',
    tagline:
      'A four-page Power BI suite built on 51,290 sales transactions (2011–2014) — connecting sales, profit, products, and customers to ask whether growth is healthy.',
    stackShort: 'Python · SQL · Power BI',
    challenge:
      "High sales don't always mean high profit. Across 51,290 transactions from 2011–2014, the goal was to see where revenue is strong, where margins leak, and which products, markets, and customer segments deserve attention.",
    highlights: [
      'Validated 51,290 sales transactions (2011–2014) in Python, checking missing values, duplicate records, and data types.',
      'Explored sales and profitability across categories, markets, and customer segments in MySQL to investigate loss-making products and discount patterns.',
      'Wrote reusable SQL analysis covering core metrics, sales, customers, products, and profitability.',
      'Modeled the data and built DAX measures for sales, profit margin, average discount, and average order value.',
      'Designed a four-page report with slicers and page navigation; reconciled Python, MySQL, and Power BI at approximately 12.6M in sales and an 11.6% margin.'
    ],
    report: [
      'Executive Overview — sales, profit, margin, orders, monthly trend, category and region views.',
      'Sales Analysis — market, category, product, and average order value analysis.',
      'Profitability Analysis — profit by category, region, and product, including negative-profit products.',
      'Customer Analysis — segment contribution, customer-level performance, and order value.'
    ],
    stack: ['Python', 'Pandas', 'MySQL', 'Power BI', 'DAX', 'Git & GitHub'],
    github: 'https://github.com/rubankumar296-maker/GLOBAL_SUPERSTORE_SALES_ANALYTICS',
    images: [
      { src: 'assets/superstore-overview.png', alt: 'Global Superstore executive overview dashboard' },
      { src: 'assets/superstore-sales.png', alt: 'Global Superstore sales analysis dashboard' },
      { src: 'assets/superstore-profit.png', alt: 'Global Superstore profitability analysis dashboard' },
      { src: 'assets/superstore-customers.png', alt: 'Global Superstore customer analysis dashboard' }
    ]
  },

  fifa: {
    category: 'Sports Analytics',
    title: 'FIFA World Cup 2026 Player Performance',
    tagline:
      'A three-page football analytics report built from 54,600 player-match records, turning 75 columns of performance data into clear player, team, and match comparisons.',
    stackShort: 'Python · SQL · Power BI',
    challenge:
      'Player-match data repeats team and match information across rows, which makes naive totals misleading. The analysis needed careful validation across 54,600 records and 75 columns before any performance comparison.',
    highlights: [
      'Analyzed a Kaggle-sourced dataset of 54,600 player-match records and 75 columns using Python, Pandas, and NumPy.',
      'Performed data cleaning, preprocessing, and EDA to examine player statistics, scoring patterns, and team performance.',
      'Used MySQL aggregations, joins, and window functions to rank players and compare teams across goals, ratings, positions, scoring, and defensive metrics.',
      'Built DAX measures for goals, assists, ratings, goals conceded, and goal difference.',
      'Developed an interactive three-page report with KPIs, slicers, player comparisons, and team performance views.'
    ],
    report: [
      'Tournament Overview — headline player and team performance at a glance.',
      'Player Performance — goals, ratings, and position-based comparisons.',
      'Team & Match Analysis — goals scored and conceded, goal difference, goalkeeper saves, and match-result distribution.'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'MySQL', 'Power BI', 'DAX'],
    github: 'https://github.com/rubankumar296-maker/FIFA_WORLD_CUP_2026_ANALYSIS',
    images: [
      { src: 'assets/fifa-overview.png', alt: 'FIFA World Cup 2026 tournament overview dashboard' },
      { src: 'assets/fifa-players.png', alt: 'FIFA World Cup 2026 player performance dashboard' },
      { src: 'assets/fifa-teams.png', alt: 'FIFA World Cup 2026 team and match analysis dashboard' }
    ]
  },

  financial: {
    category: 'Finance',
    title: 'Customer Financial Profile Analysis',
    tagline:
      'A four-page report profiling 1,000 customers — income, savings, borrowing, credit scores, and supplied risk categories.',
    stackShort: 'Python · SQL · Power BI',
    challenge:
      'Financial datasets invite causal conclusions that the data cannot support. Across 1,000 customer records, the goal was to describe segments clearly, compare financial indicators, and stay honest about the limits.',
    highlights: [
      'Profiled 1,000 customer records in Pandas, assessing data quality and visualising income, savings, credit score, and loan distributions with Matplotlib and Seaborn.',
      'Segmented customers by employment status, age group, and risk level using MySQL aggregations and ranking.',
      'Identified self-employed customers as the highest-income group, averaging 84.5K compared with 78.6K for unemployed customers.',
      'Built four Power BI pages with DAX KPIs and interactive slicers for financial profiles, risk analysis, and customer segmentation.',
      'Highlighted a nearly balanced risk distribution: 325 Low, 341 Medium, and 334 High.'
    ],
    report: [
      'Executive Overview — customer count, income, credit score, loan, and risk distribution.',
      'Financial Profile — income, savings, loans, credit score, and relationships between financial variables.',
      'Risk Analysis — supplied risk groups, age and employment comparisons, and credit/loan indicators.',
      'Customer Segmentation — age, gender, employment, income, and savings views.'
    ],
    stack: ['Python', 'Pandas', 'MySQL', 'Power BI', 'DAX', 'Seaborn'],
    github: 'https://github.com/rubankumar296-maker/CUSTOMER_FINANCIAL_PROFILE_ANALYSIS',
    images: [
      { src: 'assets/financial-overview.png', alt: 'Customer Financial Profile executive overview dashboard' },
      { src: 'assets/financial-profile.png', alt: 'Customer Financial Profile financial profile dashboard' },
      { src: 'assets/financial-risk.png', alt: 'Customer Financial Profile risk analysis dashboard' },
      { src: 'assets/financial-segments.png', alt: 'Customer Financial Profile customer segmentation dashboard' }
    ]
  }
};

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------ */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

const themeMeta = document.querySelector('meta[name="theme-color"]');

/* ------------------------------------------------------------------
   Footer year
------------------------------------------------------------------ */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ------------------------------------------------------------------
   Theme switching
------------------------------------------------------------------ */
const themeToggle = $('#themeToggle');

function syncThemeUI(theme) {
  if (!themeToggle) return;
  const next = theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${next} theme`);
  themeToggle.setAttribute('title', `Switch to ${next} theme`);
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0b0b0a' : '#f4f2ec');
}

function setTheme(theme, remember = true) {
  document.documentElement.setAttribute('data-theme', theme);
  syncThemeUI(theme);
  if (remember) {
    try {
      localStorage.setItem('rk-theme-v3', theme);
    } catch (error) {
      /* Storage can be unavailable; the theme still works for this visit. */
    }
  }
}

if (themeToggle) {
  syncThemeUI(document.documentElement.getAttribute('data-theme') || 'light');
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  });
}

/* ------------------------------------------------------------------
   Header, scroll progress, active navigation
------------------------------------------------------------------ */
const header = $('#siteHeader');
const scrollBar = $('#scrollBar');
const navLinks = $('#navLinks');
const menuToggle = $('#menuToggle');
const sections = $$('section[id]');
const navAnchors = $$('.nav-link');
let scrollTicking = false;

function onScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (scrollBar) scrollBar.style.width = `${Math.min(progress, 100)}%`;
  if (header) header.classList.toggle('scrolled', scrollTop > 16);

  let activeSection = '';
  for (const section of sections) {
    if (scrollTop >= section.offsetTop - 180) activeSection = section.id;
  }

  for (const anchor of navAnchors) {
    const isActive = anchor.getAttribute('href') === `#${activeSection}`;
    anchor.classList.toggle('active', isActive);
    if (isActive) {
      anchor.setAttribute('aria-current', 'page');
    } else {
      anchor.removeAttribute('aria-current');
    }
  }

  scrollTicking = false;
}

function requestScrollUpdate() {
  if (!scrollTicking) {
    window.requestAnimationFrame(onScroll);
    scrollTicking = true;
  }
}

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
onScroll();

/* ------------------------------------------------------------------
   Mobile menu
------------------------------------------------------------------ */
function setMenu(open) {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
  if (header) header.classList.toggle('nav-open', open);
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('open'));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 861px)');
  const handleDesktop = (event) => {
    if (event.matches) setMenu(false);
  };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleDesktop);
  else if (desktopQuery.addListener) desktopQuery.addListener(handleDesktop);
}

/* ------------------------------------------------------------------
   Reveal-on-scroll
------------------------------------------------------------------ */
const revealEls = $$('.reveal');

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
  );

  for (const el of revealEls) {
    el.style.setProperty('--reveal-delay', el.dataset.delay || '0');
    revealObserver.observe(el);
  }
} else {
  for (const el of revealEls) el.classList.add('is-visible');
}

// Make sure content in the first viewport is never left hidden.
window.requestAnimationFrame(() => {
  for (const el of revealEls) {
    if (el.classList.contains('is-visible')) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.98 && rect.bottom > 0) {
      el.classList.add('is-visible');
    }
  }
});

/* ------------------------------------------------------------------
   Selected work carousel
------------------------------------------------------------------ */
const workRail = $('#workTrack');
const workPrev = $('#workPrev');
const workNext = $('#workNext');
const workCurrent = $('#workCurrent');
const workCards = workRail ? $$('.work-card', workRail) : [];
let workFrame = null;

function padIndex(value) {
  return String(value).padStart(2, '0');
}

function workCardOffset(card) {
  const railRect = workRail.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  return cardRect.left - railRect.left + workRail.scrollLeft;
}

function currentWorkIndex() {
  if (!workRail || !workCards.length) return 0;
  let closest = 0;
  let smallest = Infinity;

  workCards.forEach((card, index) => {
    const distance = Math.abs(workCardOffset(card) - workRail.scrollLeft);
    if (distance < smallest) {
      smallest = distance;
      closest = index;
    }
  });

  return closest;
}

function updateWorkState() {
  if (!workRail || !workCards.length) return;

  const maxScroll = workRail.scrollWidth - workRail.clientWidth;
  const scrollable = maxScroll > 4;
  const index = scrollable ? currentWorkIndex() : 0;

  if (workCurrent) workCurrent.textContent = padIndex(index + 1);
  if (workPrev) workPrev.disabled = !scrollable || workRail.scrollLeft <= 2;
  if (workNext) workNext.disabled = !scrollable || workRail.scrollLeft >= maxScroll - 2;
}

function goToWork(index) {
  if (!workRail || !workCards.length) return;
  const target = Math.max(0, Math.min(index, workCards.length - 1));
  const left = workCardOffset(workCards[target]);

  if (typeof workRail.scrollTo === 'function') {
    workRail.scrollTo({
      left,
      behavior: reduceMotion.matches ? 'auto' : 'smooth'
    });
  } else {
    workRail.scrollLeft = left;
  }
}

if (workRail && workCards.length) {
  workRail.addEventListener(
    'scroll',
    () => {
      if (workFrame) return;
      workFrame = window.requestAnimationFrame(() => {
        workFrame = null;
        updateWorkState();
      });
    },
    { passive: true }
  );

  workRail.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (workRail.scrollWidth <= workRail.clientWidth + 4) return;
    event.preventDefault();
    goToWork(currentWorkIndex() + (event.key === 'ArrowRight' ? 1 : -1));
  });

  if (workPrev) workPrev.addEventListener('click', () => goToWork(currentWorkIndex() - 1));
  if (workNext) workNext.addEventListener('click', () => goToWork(currentWorkIndex() + 1));

  window.addEventListener('resize', updateWorkState);
  window.addEventListener('load', updateWorkState);
  updateWorkState();
  window.requestAnimationFrame(updateWorkState);
}

/* ------------------------------------------------------------------
   Animated counters
------------------------------------------------------------------ */
function setCounterValue(el, value) {
  const pad = el.dataset.pad === 'true';
  const suffix = el.dataset.suffix || '';
  const formatted = pad ? String(value).padStart(2, '0') : String(value);
  el.textContent = `${formatted}${suffix}`;
}

function animateCounter(el) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;

  if (reduceMotion.matches) {
    setCounterValue(el, target);
    return;
  }

  const duration = 1150;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(el, Math.round(target * eased));
    if (progress < 1) {
      window.requestAnimationFrame(frame);
    } else {
      setCounterValue(el, target);
    }
  }

  window.requestAnimationFrame(frame);
}

const counters = $$('[data-count]');
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.55 }
  );
  for (const counter of counters) counterObserver.observe(counter);
} else {
  for (const counter of counters) setCounterValue(counter, Number(counter.dataset.count));
}

/* ------------------------------------------------------------------
   Cursor dot
------------------------------------------------------------------ */
const cursorDot = $('#cursorDot');

if (cursorDot && finePointer.matches && !reduceMotion.matches) {
  let frame = null;
  let x = 0;
  let y = 0;

  window.addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      document.body.classList.add('has-pointer');

      const interactive = event.target.closest('a, button, .js-open-project, .thumb, .copy-email');
      document.body.classList.toggle('cursor-hover', Boolean(interactive));

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;
        frame = null;
      });
    },
    { passive: true }
  );

  document.addEventListener('pointerleave', () => {
    document.body.classList.remove('has-pointer');
  });
}

/* ------------------------------------------------------------------
   Copy email address
------------------------------------------------------------------ */
const copyButton = $('#copyEmail');
const copyTip = $('.copy-tip');
let copyTimer = null;

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.top = '-1000px';
  helper.style.opacity = '0';
  document.body.appendChild(helper);
  helper.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (error) {
    copied = false;
  }
  helper.remove();
  return copied;
}

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy || CONFIG.email;
    const copied = await copyToClipboard(value);

    if (!copied || !copyTip) return;
    copyTip.textContent = 'Copied!';
    copyTip.classList.add('show');
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => copyTip.classList.remove('show'), 1800);
  });
}

/* ------------------------------------------------------------------
   Chennai local time
------------------------------------------------------------------ */
const localClock = $('#localClock');
const heroTime = $('#heroTime');

function updateClock() {
  let time = '';
  try {
    time = new Intl.DateTimeFormat('en-GB', {
      timeZone: CONFIG.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date());
  } catch (error) {
    const now = new Date();
    time = `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}`;
  }

  if (localClock) localClock.textContent = `Chennai, IN · ${time} IST`;
  if (heroTime) heroTime.textContent = `${time} IST`;
}

updateClock();
window.setInterval(updateClock, 30000);

/* ------------------------------------------------------------------
   Project dialog
------------------------------------------------------------------ */
const dialog = $('#projectDialog');
const modalClose = $('#modalClose');
const modalMainImage = $('#modalMainImage');
const modalThumbs = $('#modalThumbs');
const modalCategory = $('#modalCategory');
const modalTitle = $('#modalTitle');
const modalTagline = $('#modalTagline');
const modalStackShort = $('#modalStackShort');
const modalChallenge = $('#modalChallenge');
const modalHighlights = $('#modalHighlights');
const modalDash = $('#modalDash');
const modalStack = $('#modalStack');
const modalGithub = $('#modalGithub');
const modalScroll = $('.dialog-scroll', dialog || document);
const imageCount = $('#imageCount');
const prevImage = $('#prevImage');
const nextImage = $('#nextImage');

let activeProject = null;
let activeImageIndex = 0;
let lastTrigger = null;

function fillList(element, items) {
  if (!element) return;
  element.replaceChildren();
  for (const text of items) {
    const li = document.createElement('li');
    li.textContent = text;
    element.appendChild(li);
  }
}

function setMainImage(index) {
  if (!activeProject || !modalMainImage) return;
  const count = activeProject.images.length;
  const safeIndex = ((index % count) + count) % count;
  const image = activeProject.images[safeIndex];
  if (!image) return;

  activeImageIndex = safeIndex;
  modalMainImage.src = image.src;
  modalMainImage.alt = image.alt;
  if (imageCount) imageCount.textContent = `${safeIndex + 1} / ${count}`;

  if (modalThumbs) {
    const thumbs = $$('.thumb', modalThumbs);
    thumbs.forEach((thumb, thumbIndex) => {
      const isActive = thumbIndex === safeIndex;
      thumb.classList.toggle('active', isActive);
      thumb.setAttribute('aria-pressed', String(isActive));
    });
  }

  if (!reduceMotion.matches && modalMainImage.animate) {
    modalMainImage.animate(
      [
        { opacity: 0.3, transform: 'scale(0.995)' },
        { opacity: 1, transform: 'scale(1)' }
      ],
      { duration: 240, easing: 'ease-out' }
    );
  }
}

function buildThumbs(project) {
  if (!modalThumbs) return;
  modalThumbs.replaceChildren();
  modalThumbs.style.gridTemplateColumns = `repeat(${project.images.length}, minmax(0, 1fr))`;

  project.images.forEach((image, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `thumb${index === 0 ? ' active' : ''}`;
    button.setAttribute('aria-label', `Show screenshot ${index + 1} of ${project.images.length}: ${image.alt}`);
    button.setAttribute('aria-pressed', String(index === 0));

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';

    button.appendChild(img);
    button.addEventListener('click', () => setMainImage(index));
    modalThumbs.appendChild(button);
  });
}

function openProject(projectId, trigger) {
  const project = PROJECTS[projectId];
  if (!project || !dialog) return;

  activeProject = project;
  lastTrigger = trigger || null;

  if (modalCategory) modalCategory.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalTagline) modalTagline.textContent = project.tagline;
  if (modalStackShort) modalStackShort.textContent = project.stackShort;
  if (modalChallenge) modalChallenge.textContent = project.challenge;

  fillList(modalHighlights, project.highlights);
  fillList(modalDash, project.report);
  fillList(modalStack, project.stack);

  if (modalGithub) modalGithub.href = project.github;

  buildThumbs(project);
  setMainImage(0);

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }

  document.body.classList.add('modal-open');
  if (modalScroll) modalScroll.scrollTop = 0;
  if (modalClose) modalClose.focus({ preventScroll: true });
}

function closeProject() {
  if (!dialog) return;
  if (typeof dialog.close === 'function' && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
    document.body.classList.remove('modal-open');
  }
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.js-open-project');
  if (!trigger) return;
  openProject(trigger.dataset.project, trigger);
});

if (modalClose) modalClose.addEventListener('click', closeProject);
if (prevImage) prevImage.addEventListener('click', () => setMainImage(activeImageIndex - 1));
if (nextImage) nextImage.addEventListener('click', () => setMainImage(activeImageIndex + 1));

if (dialog) {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeProject();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus({ preventScroll: true });
    }
  });

  dialog.addEventListener('cancel', () => {
    document.body.classList.remove('modal-open');
  });

  dialog.addEventListener('keydown', (event) => {
    if (!activeProject) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    setMainImage(activeImageIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });
}
