// mobile nav
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // role toggle
  const roleBtns = document.querySelectorAll('.role-toggle button');
  const heroSub = document.getElementById('heroSub');
  const copy = {
    analyst: `<span class="k">B.Tech CSE</span> student at Roorkee Institute of Technology who turns raw datasets into <span class="k">clean pipelines, EDA, and dashboards</span> people actually use — from Python/SQL analysis to Power BI storytelling.`,
    dev: `<span class="k">B.Tech CSE</span> student at Roorkee Institute of Technology who builds <span class="k">responsive, database-backed interfaces</span> — from HTML/CSS/JS front ends to Java and SQL underneath.`
  };
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      heroSub.style.opacity = 0;
      setTimeout(() => {
        heroSub.innerHTML = copy[btn.dataset.role];
        heroSub.style.opacity = 1;
      }, 150);
    });
  });
  heroSub.style.transition = 'opacity .15s ease';

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
