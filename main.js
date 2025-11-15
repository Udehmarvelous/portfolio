/* ========= Deploy tips (G) =========
          - Change title/SEO text; set your domain in <meta>.
          - Compress images; use WebP/AVIF for real screenshots.
          - Minify: use a build step or online minifier for HTML/CSS/JS.
          - Add a service worker for offline (optional).
          - Connect EmailJS (see B section below).
        */

        // ===== Utilities
        const $ = s => document.querySelector(s);
        const $$ = s => Array.from(document.querySelectorAll(s));

        // ===== Year
        $('#year').textContent = new Date().getFullYear();

        // ===== Nav active link + shrink on scroll
        const sections = $$('.section, .hero');
        const navLinks = $$('.nav-link');
        const observerNav = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const id = e.target.id || 'home';
                    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
                }
            })
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        sections.forEach(sec => observerNav.observe(sec));
        const topnav = $('#topnav');
        window.addEventListener('scroll', () => topnav.classList.toggle('shrink', window.scrollY > 10));

        // ===== Theme toggle (F)
        const themeToggle = $('#themeToggle');
        const applyTheme = t => {
            document.documentElement.setAttribute('data-theme', t);
            themeToggle.innerHTML = t === 'light' ? '🌞<span>Dark</span>' : '🌙<span>Light</span>';
            localStorage.setItem('theme', t);
        };
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        applyTheme(savedTheme);
        themeToggle.addEventListener('click', () => applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));

        // ===== Scroll reveal (E)
        const revealEls = $$('.reveal-on-scroll');
        const revealObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); }
            })
        }, { threshold: .15 });
        revealEls.forEach(el => revealObs.observe(el));

        // ===== Project modal (D)
        const PROJECTS = {
            ecommerce: {
                title: 'E-Commerce Platform',
                desc: 'A scalable MERN commerce app featuring role-based admin, real-time inventory via webhooks, Stripe integration, and analytics.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                live: '#', code: '#'
            },
            tasks: {
                title: 'Task Management App',
                desc: 'Team workspaces with Kanban, real-time presence, offline cache, and Firebase rules for multi-tenant security.',
                tags: ['Vue.js', 'Firebase', 'Tailwind'],
                live: '#', code: '#'
            },
            cbt: {
                title: 'CBT Exam Suite',
                desc: 'Item bank, randomization, timer, auto-grading, reports, and accessible keyboard navigation.',
                tags: ['HTML5', 'CSS3', 'JavaScript'],
                live: '#', code: '#'
            },
            schoolms: {
                title: 'School Management',
                desc: 'Admissions, billing, timetables, guardian portal, and REST API with JWT.',
                tags: ['PHP', 'MySQL', 'Bootstrap'],
                live: '#', code: '#'
            },
            elearn: {
                title: 'E-Learning Platform',
                desc: 'Course builder, quizzes, certificates, streaming with HLS, and instructor payouts.',
                tags: ['Next.js', 'PostgreSQL', 'Stripe'],
                live: '#', code: '#'
            },
            aiassist: {
                title: 'AI Study Assist',
                desc: 'AI-powered explanations, practice generator, and spaced repetition scheduling.',
                tags: ['Python', 'FastAPI', 'OpenAI'],
                live: '#', code: '#'
            }
        };
        const modal = $('#projectModal');
        const modalTitle = $('#modalTitle');
        const modalDesc = $('#modalDesc');
        const modalTags = $('#modalTags');
        const modalLive = $('#modalLive');
        const modalCode = $('#modalCode');
        const modalClose = $('#modalClose');

        function openModal(key) {
            const p = PROJECTS[key]; if (!p) return;
            modalTitle.textContent = p.title;
            modalDesc.textContent = p.desc;
            modalTags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
            modalLive.href = p.live || '#';
            modalCode.href = p.code || '#';
            modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
        $$('.project-card').forEach(card => {
            card.addEventListener('click', e => {
                // avoid opening when clicking a direct link
                if (e.target.closest('a')) return;
                openModal(card.dataset.project);
            });
        });
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });

        // ===== Contact form (B) with validation + optional EmailJS
        const contactForm = $('#contactForm');
        const toast = $('#toast');
        const hints = {
            name: $('#nameHint'),
            email: $('#emailHint'),
            message: $('#messageHint')
        };
        function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = $('#name').value.trim();
            const email = $('#email').value.trim();
            const message = $('#message').value.trim();
            let ok = true;

            hints.name.textContent = name.length >= 2 ? '' : 'Please enter your name.';
            if (!hints.name.textContent) hints.name.textContent = '';
            if (!validateEmail(email)) { hints.email.textContent = 'Enter a valid email.'; ok = false; } else { hints.email.textContent = ''; }
            if (message.length < 10) { hints.message.textContent = 'Please enter at least 10 characters.'; ok = false; } else { hints.message.textContent = ''; }
            if (name.length < 2) { ok = false; }

            if (!ok) return;

            // Optional: EmailJS integration (uncomment + fill IDs)
            // try {
            //   emailjs.init('YOUR_PUBLIC_KEY'); // e.g. 'XyZ123abc...'
            //   await emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',{ from_name:name, from_email:email, message });
            // } catch(err){
            //   console.error('EmailJS error:', err);
            //   // Fallback: proceed to show success to user while you also receive via mailto or backend.
            // }

            // Demo success state (replace with real success path after EmailJS/back-end)
            toast.textContent = 'Message sent ✅';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3500);
            contactForm.reset();
        });

        // Prevent card click when clicking "Live Demo" or "Code" buttons
        $$('.project-link').forEach(a => {
            a.addEventListener('click', e => e.stopPropagation());
        });