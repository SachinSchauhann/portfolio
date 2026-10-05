/* ==========================================================================
   PORTFOLIO OPERATING SYSTEM - VANILLA JAVASCRIPT CORE
   Author: Sachin Singh Chauhan (Software Developer | Web Developer | Data Analytics)
   ========================================================================== */

/* ==========================================================================
   1. RESUME LINKS CONFIGURATION (Direct from Resume)
   ========================================================================== */
const LINKS = {
  linkedin: "https://www.linkedin.com/in/sachin-singh-chauhan-0572092b4/",
  github: "https://github.com/SachinSchauhann",
  portfolio: "https://sachinsinghchauhan.netlify.app/",
  whatsapp: "https://wa.me/916386533538",
  phone: "tel:+916386533538",
  email: "mailto:sachins9598@gmail.com",
  maps: "https://maps.app.goo.gl/1pf18Kq7DPNjkEBc6",
  college: "https://technocratsgroup.edu.in/"
};

/* ==========================================================================
   2. SVG ICONS (Windows 11 Fluent Style)
   ========================================================================== */
const ICONS = {
  folder: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#FFC83B" stroke="#D99B00" stroke-width="1.25"/></svg>`,
  folderSkills: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#60A5FA" stroke="#0067C5" stroke-width="1.25"/></svg>`,
  folderProjects: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#34D399" stroke="#059669" stroke-width="1.25"/></svg>`,
  folderEdu: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#A78BFA" stroke="#7C3AED" stroke-width="1.25"/></svg>`,
  folderCert: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#F87171" stroke="#DC2626" stroke-width="1.25"/></svg>`,
  fileDoc: `<svg viewBox="0 0 24 24" fill="none" stroke="#0067C5" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  fileCode: `<svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>`,
  fileCert: `<svg viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  edgeBrowser: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="url(#edgeGrad)"/><path d="M12 2C6.48 2 2 6.48 2 12c0 3.2 1.5 6.06 3.84 7.89 1.15-2.84 3.75-4.89 6.86-5.26 3.32-.4 6.27 1.25 7.6 4.02C21.36 16.89 22 14.54 22 12c0-5.52-4.48-10-10-10z" fill="#0078D7"/><defs><linearGradient id="edgeGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#00C853"/><stop offset="0.5" stop-color="#0091EA"/><stop offset="1" stop-color="#0067C5"/></linearGradient></defs></svg>`,
  thisPC: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" fill="#E2E8F0" stroke="#0067C5" stroke-width="1.5"/><rect x="8" y="17" width="8" height="4" fill="#94A3B8"/><line x1="5" y1="21" x2="19" y2="21" stroke="#64748B" stroke-width="2"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
};

/* ==========================================================================
   3. PORTFOLIO DATA ARCHITECTURE
   ========================================================================== */
const PORTFOLIO = {
  home: {
    id: "home",
    title: "Home",
    type: "system",
    icon: ICONS.home,
    description: "Portfolio Operating System Root Directory",
    items: [
      { id: "about", name: "About Me", type: "folder", icon: ICONS.folder, desc: "Personal Profile and Career Objective" },
      { id: "skills", name: "Skills", type: "folder", icon: ICONS.folderSkills, desc: "Technical skills, frameworks, and analytics stack" },
      { id: "projects", name: "Projects", type: "folder", icon: ICONS.folderProjects, desc: "Selected software and web projects with live links" },
      { id: "education", name: "Education", type: "folder", icon: ICONS.folderEdu, desc: "Academic degrees and university affiliations" },
      { id: "experience", name: "Experience", type: "folder", icon: ICONS.folder, desc: "Professional internships and training with verified credentials" },
      { id: "certificates", name: "Certificates", type: "folder", icon: ICONS.folderCert, desc: "Verified qualifications with embedded Google Drive links" },
      { id: "interests", name: "Interests & Soft Skills", type: "folder", icon: ICONS.folder, desc: "Soft skills, passions, and spoken languages" },
      { id: "links", name: "Links", type: "folder", icon: ICONS.folder, desc: "LinkedIn, GitHub, Web Portfolio, and social handles" },
      { id: "contact", name: "Contact", type: "folder", icon: ICONS.folder, desc: "Email, WhatsApp, Phone, and Lucknow location" }
    ]
  },

  about: {
    id: "about",
    title: "About Me",
    parent: "home",
    type: "folder",
    icon: ICONS.user,
    description: "Personal Profile and Career Objective",
    items: [
      {
        id: "profile_card",
        name: "Profile.sys",
        type: "file",
        extension: ".sys",
        icon: ICONS.fileDoc,
        desc: "Personal details, role summary, location and photo",
        meta: {
          Name: "Sachin Singh Chauhan",
          Role: "Software Developer | Web Developer | Data Analytics",
          Location: "Matiyari, Lucknow, Uttar Pradesh",
          Status: "Open for Full-time Roles & Internships"
        },
        fullContent: `
          <div style="display:flex; align-items:flex-start; gap:22px; flex-wrap:wrap;">
            <div style="width:110px; height:110px; border-radius:12px; overflow:hidden; border:2px solid #E2E8F0; box-shadow:var(--shadow-card); flex-shrink:0;">
              <img src="Sachin.png" alt="Sachin Singh Chauhan" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='sachin.png';">
            </div>
            <div style="flex:1; min-width:240px;">
              <h3 style="font-size:20px; font-weight:700; color:var(--dark-text); margin-bottom:4px;">Sachin Singh Chauhan</h3>
              <p style="font-size:13.5px; font-weight:600; color:var(--win-blue); margin-bottom:8px;">Software Developer | Web Developer | Data Analytics</p>
              <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
                Passionate entry-level software engineer with a strong foundation in modern frontend architectures, backend RESTful web services, database design, and data analytics pipelines. Focused on clean code, system architecture, and delivering high-value user solutions.
              </p>
            </div>
          </div>
          <div style="margin-top:20px; padding:16px; background:#F8FAFD; border-radius:var(--radius-md); border:1px solid #E2E8F0;">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; font-size:12.5px;">
              <div><strong>Location:</strong> <span style="color:var(--text-secondary);">Matiyari, Lucknow, UP</span></div>
              <div><strong>Degree:</strong> <span style="color:var(--text-secondary);">B.Tech CSE (2021–25)</span></div>
              <div><strong>Primary Tech:</strong> <span style="color:var(--text-secondary);">React, Java, Python, SQL</span></div>
            </div>
          </div>
        `
      },
      {
        id: "career_objective",
        name: "Career_Objective.txt",
        type: "file",
        extension: ".txt",
        icon: ICONS.fileDoc,
        desc: "Formal statement of career vision and goals",
        meta: {
          Target: "Software Development / Web Development / Data Analytics",
          Format: "Text Document"
        },
        fullContent: `
          <div style="padding:18px; border-left:4px solid var(--win-blue); background:var(--win-blue-light); border-radius:0 var(--radius-sm) var(--radius-sm) 0; margin-bottom:16px;">
            <p style="font-size:14.5px; font-weight:600; color:var(--dark-text); line-height:1.6; font-style:italic;">
              "Entry-level Software / Web Development / Data Analytics role where I can apply programming, analytical, and problem-solving skills to build scalable solutions."
            </p>
          </div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7;">
            Focused on joining a forward-thinking engineering team where I can apply rigorous programming best practices, collaborate with cross-functional talent, and contribute to production-grade applications that make a tangible business impact.
          </p>
        `
      }
    ]
  },

  skills: {
    id: "skills",
    title: "Skills",
    parent: "home",
    type: "folder",
    icon: ICONS.code,
    description: "Technical skills, programming languages, and tool suites",
    items: [
      {
        id: "skill_core_dev",
        name: "Core Development",
        type: "file",
        extension: ".dev",
        icon: ICONS.fileCode,
        desc: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js (SSR/SSG)",
        skillsList: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js (SSR/SSG)"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Foundation in web architecture, modern ECMAScript standards, reactive component trees, and server-side rendering methodologies.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} HTML5</span>
            <span class="skill-chip">${ICONS.code} CSS3</span>
            <span class="skill-chip">${ICONS.code} JavaScript (ES6+)</span>
            <span class="skill-chip">${ICONS.code} React.js</span>
            <span class="skill-chip">${ICONS.code} Next.js (SSR/SSG)</span>
          </div>
        `
      },
      {
        id: "skill_styling_ui",
        name: "Styling & UI",
        type: "file",
        extension: ".css",
        icon: ICONS.fileCode,
        desc: "Tailwind CSS, Framer Motion, Responsive Web Design, Lucide Icons, Bootstrap",
        skillsList: ["Tailwind CSS", "Framer Motion", "Responsive Web Design", "Lucide Icons", "Bootstrap"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Design systems, responsive flexbox/grid layouts, micro-animations, accessible user interfaces, and mobile-first ergonomics.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} Tailwind CSS</span>
            <span class="skill-chip">${ICONS.code} Framer Motion</span>
            <span class="skill-chip">${ICONS.code} Responsive Web Design</span>
            <span class="skill-chip">${ICONS.code} Lucide Icons</span>
            <span class="skill-chip">${ICONS.code} Bootstrap</span>
          </div>
        `
      },
      {
        id: "skill_backend_apis",
        name: "Backend & APIs",
        type: "file",
        extension: ".api",
        icon: ICONS.fileCode,
        desc: "Core Java, JDBC, JSP, Servlet, Spring Boot, Hibernate, REST API Integration, Node.js, Python, Django",
        skillsList: ["Core Java", "JDBC", "JSP", "Servlet", "Spring Boot", "Hibernate", "REST API Integration", "Node.js", "Python", "Django"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Enterprise backend architectures, Java ecosystem, Spring Boot microservices, ORM mapping, and Python REST services.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} Core Java</span>
            <span class="skill-chip">${ICONS.code} JDBC</span>
            <span class="skill-chip">${ICONS.code} JSP</span>
            <span class="skill-chip">${ICONS.code} Servlet</span>
            <span class="skill-chip">${ICONS.code} Spring Boot</span>
            <span class="skill-chip">${ICONS.code} Hibernate</span>
            <span class="skill-chip">${ICONS.code} REST API Integration</span>
            <span class="skill-chip">${ICONS.code} Node.js</span>
            <span class="skill-chip">${ICONS.code} Python</span>
            <span class="skill-chip">${ICONS.code} Django</span>
          </div>
        `
      },
      {
        id: "skill_database",
        name: "Database",
        type: "file",
        extension: ".db",
        icon: ICONS.fileCode,
        desc: "MySQL, MongoDB relational and document store systems",
        skillsList: ["MySQL", "MongoDB"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Schema modeling, relational database integrity with MySQL, and high-performance NoSQL document collections using MongoDB.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} MySQL</span>
            <span class="skill-chip">${ICONS.code} MongoDB</span>
          </div>
        `
      },
      {
        id: "skill_data_analytics",
        name: "Data Analytics",
        type: "file",
        extension: ".analytics",
        icon: ICONS.fileCode,
        desc: "Power BI, NumPy, Pandas data processing and visualization",
        skillsList: ["Power BI", "NumPy", "Pandas"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Statistical data analysis, dataset cleaning, vectorized computations with NumPy, tabular transformations in Pandas, and Power BI dashboards.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} Power BI</span>
            <span class="skill-chip">${ICONS.code} NumPy</span>
            <span class="skill-chip">${ICONS.code} Pandas</span>
          </div>
        `
      },
      {
        id: "skill_tools_technologies",
        name: "Tools & Technologies",
        type: "file",
        extension: ".tools",
        icon: ICONS.fileCode,
        desc: "Git, GitHub, Vercel, Netlify, Hostinger, VS Code, Maven, Apache Tomcat, Postman, MS Office Suite, Google Workspace",
        skillsList: ["Git", "GitHub", "Vercel", "Netlify", "Hostinger", "VS Code", "Maven", "Apache Tomcat", "Postman", "MS Office Suite", "Google Workspace"],
        fullContent: `
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Version control workflows, continuous integration & deployment pipelines, build automation, API testing, and team productivity platforms.</p>
          <div class="skills-chips-wrapper">
            <span class="skill-chip">${ICONS.code} Git</span>
            <span class="skill-chip">${ICONS.code} GitHub</span>
            <span class="skill-chip">${ICONS.code} Vercel</span>
            <span class="skill-chip">${ICONS.code} Netlify</span>
            <span class="skill-chip">${ICONS.code} Hostinger</span>
            <span class="skill-chip">${ICONS.code} VS Code</span>
            <span class="skill-chip">${ICONS.code} Maven</span>
            <span class="skill-chip">${ICONS.code} Apache Tomcat</span>
            <span class="skill-chip">${ICONS.code} Postman</span>
            <span class="skill-chip">${ICONS.code} MS Office Suite</span>
            <span class="skill-chip">${ICONS.code} Google Workspace</span>
          </div>
        `
      }
    ]
  },

  projects: {
    id: "projects",
    title: "Projects",
    parent: "home",
    type: "folder",
    icon: ICONS.briefcase,
    description: "Selected software engineering and web applications with live links",
    items: [
      {
        id: "proj_sky_consultancy",
        name: "Sky Consultancy Group Website",
        type: "file",
        extension: ".app",
        icon: ICONS.fileCode,
        desc: "Full Stack Website: React UI, MongoDB backend, inquiry system, and admin modules.",
        webUrl: "https://skyconsultancygroup.com/",
        meta: {
          Type: "Full Stack Website",
          Stack: "React.js, Node.js, MongoDB",
          LiveWebsite: "https://skyconsultancygroup.com/"
        },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            Full-stack responsive website with React-based UI, MongoDB backend, inquiry system, and admin modules.
          </p>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <button class="btn-primary" onclick="openInBrowser('https://skyconsultancygroup.com/', 'Sky Consultancy Group Website')">
              🌐 Open in In-OS Browser
            </button>
            <a href="https://skyconsultancygroup.com/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
          <div style="background:#F8FAFD; padding:16px; border-radius:var(--radius-sm); border:1px solid #E2E8F0; font-size:12.5px;">
            <h4 style="color:var(--dark-text); margin-bottom:6px;">Highlights:</h4>
            <ul style="padding-left:18px; color:var(--text-secondary); line-height:1.6;">
              <li>Custom responsive corporate UI built with reusable React components.</li>
              <li>Secure prospective inquiry database integration in MongoDB.</li>
              <li>Administrator dashboard for managing client inquiries and service catalogues.</li>
            </ul>
          </div>
        `
      },
      {
        id: "proj_stackvix",
        name: "StackVix – IT Solutions Platform",
        type: "file",
        extension: ".app",
        icon: ICONS.fileCode,
        desc: "Reusable React components, dynamic routing and performance-optimized UI.",
        webUrl: "https://stackvix.com/",
        meta: {
          Technology: "React.js",
          Architecture: "Component-driven SPA",
          LiveWebsite: "https://stackvix.com/"
        },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            Reusable React components, dynamic routing and performance-optimized UI.
          </p>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <button class="btn-primary" onclick="openInBrowser('https://stackvix.com/', 'StackVix – IT Solutions Platform')">
              🌐 Open in In-OS Browser
            </button>
            <a href="https://stackvix.com/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
          <div style="background:#F8FAFD; padding:16px; border-radius:var(--radius-sm); border:1px solid #E2E8F0; font-size:12.5px;">
            <h4 style="color:var(--dark-text); margin-bottom:6px;">Highlights:</h4>
            <ul style="padding-left:18px; color:var(--text-secondary); line-height:1.6;">
              <li>Modular React architecture with decoupled, reusable UI widgets.</li>
              <li>Client-side dynamic routing using React Router.</li>
              <li>Engineered for high performance, smooth scroll animations, and responsive mobile layouts.</li>
            </ul>
          </div>
        `
      },
      {
        id: "proj_portfolio",
        name: "Personal Portfolio Website",
        type: "file",
        extension: ".app",
        icon: ICONS.fileCode,
        desc: "Responsive portfolio with Framer Motion animations, deployed on Netlify.",
        webUrl: "https://sachinsinghchauhan.netlify.app/",
        meta: {
          Technology: "React & Netlify",
          Animation: "Framer Motion",
          LiveDeployment: "https://sachinsinghchauhan.netlify.app/"
        },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            Responsive portfolio with Framer Motion animations, deployed on Netlify.
          </p>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <button class="btn-primary" onclick="openInBrowser('https://sachinsinghchauhan.netlify.app/', 'Personal Portfolio Website')">
              🌐 Open in In-OS Browser
            </button>
            <a href="https://sachinsinghchauhan.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
          <div style="background:#F8FAFD; padding:16px; border-radius:var(--radius-sm); border:1px solid #E2E8F0; font-size:12.5px;">
            <h4 style="color:var(--dark-text); margin-bottom:6px;">Highlights:</h4>
            <ul style="padding-left:18px; color:var(--text-secondary); line-height:1.6;">
              <li>Modern developer portfolio showcasing skills, projects, and credentials.</li>
              <li>Fluid transitions and interactive animations using Framer Motion.</li>
              <li>Automated CI/CD deployment pipeline on Netlify edge CDN.</li>
            </ul>
          </div>
        `
      },
      {
        id: "proj_chef_booking",
        name: "Online Chef Booking System",
        type: "file",
        extension: ".app",
        icon: ICONS.fileCode,
        desc: "Full stack chef booking platform with user and admin modules.",
        meta: {
          Technology: "Java, JSP, JDBC, MySQL",
          Architecture: "Model-View-Controller (MVC)"
        },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            Full stack chef booking platform with user and admin modules.
          </p>
          <div style="background:#F8FAFD; padding:16px; border-radius:var(--radius-sm); border:1px solid #E2E8F0; font-size:12.5px;">
            <h4 style="color:var(--dark-text); margin-bottom:6px;">Highlights:</h4>
            <ul style="padding-left:18px; color:var(--text-secondary); line-height:1.6;">
              <li>End-to-end booking platform connecting verified chefs with customers.</li>
              <li>Built with Core Java, Servlets, JSP templates, and JDBC connection pool.</li>
              <li>MySQL database managing authentication, bookings, chef schedules, and reviews.</li>
            </ul>
          </div>
        `
      },
      {
        id: "proj_digital_board",
        name: "Comprehensive Digital Board",
        type: "file",
        extension: ".app",
        icon: ICONS.fileCode,
        desc: "Web-based digital drawing and annotation board.",
        webUrl: "https://comprehensive-digital-board.netlify.app/",
        meta: {
          Technology: "HTML, CSS, JavaScript",
          LiveDeployment: "https://comprehensive-digital-board.netlify.app/"
        },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            Web-based digital drawing and annotation board.
          </p>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <button class="btn-primary" onclick="openInBrowser('https://comprehensive-digital-board.netlify.app/', 'Comprehensive Digital Board')">
              🌐 Open in In-OS Browser
            </button>
            <a href="https://comprehensive-digital-board.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
          <div style="background:#F8FAFD; padding:16px; border-radius:var(--radius-sm); border:1px solid #E2E8F0; font-size:12.5px;">
            <h4 style="color:var(--dark-text); margin-bottom:6px;">Highlights:</h4>
            <ul style="padding-left:18px; color:var(--text-secondary); line-height:1.6;">
              <li>Real-time HTML5 Canvas drawing, pen brush widths, custom palettes, and eraser.</li>
              <li>Undo, redo history stack, and image export capabilities.</li>
              <li>Lightweight, zero external dependencies, responsive touch and mouse pointer support.</li>
            </ul>
          </div>
        `
      }
    ]
  },

  education: {
    id: "education",
    title: "Education",
    parent: "home",
    type: "folder",
    icon: ICONS.book,
    description: "Formal academic qualifications and institute links",
    items: [
      {
        id: "edu_btech",
        name: "B.Tech – Computer Science and Engineering",
        type: "file",
        extension: ".edu",
        icon: ICONS.fileDoc,
        desc: "Technocrats Institute of Technology, Bhopal (M.P.) • 2021–25 • 7.9 CGPA",
        webUrl: "https://technocratsgroup.edu.in/",
        meta: {
          Degree: "Bachelor of Technology (B.Tech)",
          Specialization: "Computer Science and Engineering",
          Institution: "Technocrats Institute of Technology, Bhopal (M.P.)",
          University: "RGPV University Bhopal",
          Duration: "2021–25",
          Score: "7.9 CGPA"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h3 style="font-size:18px; font-weight:700; color:var(--dark-text);">Technocrats Institute of Technology, Bhopal (M.P.)</h3>
            <p style="font-size:13.5px; font-weight:600; color:var(--win-blue);">Affiliated with RGPV University Bhopal</p>
            <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
              <span style="padding:5px 12px; background:var(--win-blue-light); color:var(--win-blue); font-weight:700; font-size:12.5px; border-radius:var(--radius-xs);">7.9 CGPA (2021–25)</span>
              <button class="btn-secondary" onclick="openInBrowser('https://technocratsgroup.edu.in/', 'Technocrats Institute of Technology')">
                🌐 Visit College Website
              </button>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-top:8px;">
              Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Software Engineering.
            </p>
          </div>
        `
      },
      {
        id: "edu_class_12",
        name: "Class XII – Senior Secondary",
        type: "file",
        extension: ".edu",
        icon: ICONS.fileDoc,
        desc: "PT. Pashupati Nath I C, Basti (U.P.) • UP Board • 2019–20 • 54.8%",
        meta: {
          Level: "Class XII (Intermediate)",
          School: "PT. Pashupati Nath I C, Basti (U.P.)",
          Board: "UP Board",
          Year: "2019–20",
          Score: "54.8%"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:10px;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text);">PT. Pashupati Nath I C, Basti (U.P.)</h3>
            <p style="font-size:13px; color:var(--text-secondary);">Board: UP Board (Uttar Pradesh) • Year: 2019–20 • Score: 54.8%</p>
          </div>
        `
      },
      {
        id: "edu_class_10",
        name: "Class X – High School",
        type: "file",
        extension: ".edu",
        icon: ICONS.fileDoc,
        desc: "Baba R P D U M V, Basti (U.P.) • UP Board • 2016–17 • 79.5%",
        meta: {
          Level: "Class X (High School)",
          School: "Baba R P D U M V, Basti (U.P.)",
          Board: "UP Board",
          Year: "2016–17",
          Score: "79.5%"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:10px;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text);">Baba R P D U M V, Basti (U.P.)</h3>
            <p style="font-size:13px; color:var(--text-secondary);">Board: UP Board (Uttar Pradesh) • Year: 2016–17 • Score: 79.5%</p>
          </div>
        `
      }
    ]
  },

  experience: {
    id: "experience",
    title: "Experience",
    parent: "home",
    type: "folder",
    icon: ICONS.briefcase,
    description: "Professional internships and specialized industrial training with verified credentials",
    items: [
      {
        id: "exp_sky_intern",
        name: "Web Development Intern",
        type: "file",
        extension: ".exp",
        icon: ICONS.fileDoc,
        desc: "Sky Consultancy Group • 12/2025 – Present",
        webUrl: "https://skyconsultancygroup.com/",
        meta: {
          Role: "Web Development Intern",
          Company: "Sky Consultancy Group",
          Timeline: "12/2025 – Present"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:10px;">
            <h3 style="font-size:18px; font-weight:700; color:var(--dark-text);">Sky Consultancy Group</h3>
            <p style="font-size:13.5px; font-weight:600; color:var(--win-blue);">Timeline: 12/2025 – Present</p>
            <div style="margin-bottom:8px;">
              <button class="btn-secondary" onclick="openInBrowser('https://skyconsultancygroup.com/', 'Sky Consultancy Group')">
                🌐 Visit Company Website
              </button>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
              Contributing to real-world client web solutions, implementing modern interactive web interfaces, collaborating with developers on responsive component systems, and assisting in backend service integration.
            </p>
          </div>
        `
      },
      {
        id: "exp_iit_guwahati",
        name: "Advanced Certification in Data Analytics",
        type: "file",
        extension: ".exp",
        icon: ICONS.fileCert,
        desc: "E&ICT Academy, IIT Guwahati • 6 Months Training (01/04/2025 to 01/10/2025)",
        certUrl: "https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing",
        meta: {
          Program: "Advanced Certification in Data Analytics",
          Institution: "E&ICT Academy, IIT Guwahati",
          Duration: "6 Months Training (01/04/2025 to 01/10/2025)",
          CertificateLink: "Google Drive Verified"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h3 style="font-size:18px; font-weight:700; color:var(--dark-text);">E&ICT Academy, IIT Guwahati</h3>
            <p style="font-size:13.5px; font-weight:600; color:var(--win-blue);">6 Months Training (01/04/2025 to 01/10/2025)</p>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing', 'IIT Guwahati Data Analytics Certificate')">
                📜 View Certificate in Browser
              </button>
              <button class="btn-secondary" onclick="openInBrowser('https://www.iitg.ac.in/', 'IIT Guwahati Official Website')">
                🏛 Visit IIT Guwahati
              </button>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
              In-depth curriculum covering Python data libraries (NumPy, Pandas), exploratory data analysis (EDA), data cleaning methodologies, statistical inference, and business intelligence reporting with Power BI dashboards.
            </p>
          </div>
        `
      },
      {
        id: "exp_cybrom",
        name: "Java Fullstack Development",
        type: "file",
        extension: ".exp",
        icon: ICONS.fileCert,
        desc: "Cybrom Technology Pvt. Ltd • 6 Months Training (08/05/2024 to 08/11/2024)",
        certUrl: "https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing",
        meta: {
          Program: "Java Fullstack Development",
          Organization: "Cybrom Technology Pvt. Ltd",
          Duration: "6 Months Training (08/05/2024 to 08/11/2024)",
          CertificateLink: "Google Drive Verified"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h3 style="font-size:18px; font-weight:700; color:var(--dark-text);">Cybrom Technology Pvt. Ltd</h3>
            <p style="font-size:13.5px; font-weight:600; color:var(--win-blue);">6 Months Training (08/05/2024 to 08/11/2024)</p>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing', 'Cybrom Java Fullstack Certificate')">
                📜 View Certificate in Browser
              </button>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
              Comprehensive hands-on training across Core Java, JDBC, Servlets, JSP, Spring Boot framework, Hibernate ORM, and MySQL database management with full-stack application development.
            </p>
          </div>
        `
      },
      {
        id: "exp_techsimplus",
        name: "Frontend Development with React JS",
        type: "file",
        extension: ".exp",
        icon: ICONS.fileCert,
        desc: "TechSimPlus Learning • 3 Months Internship (01/06/2024 to 01/08/2024)",
        certUrl: "https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing",
        meta: {
          Program: "Frontend Development with React JS",
          Organization: "TechSimPlus Learning",
          Duration: "3 Months Internship (01/06/2024 to 01/08/2024)",
          CertificateLink: "Google Drive Verified"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h3 style="font-size:18px; font-weight:700; color:var(--dark-text);">TechSimPlus Learning</h3>
            <p style="font-size:13.5px; font-weight:600; color:var(--win-blue);">3 Months Internship (01/06/2024 to 01/08/2024)</p>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing', 'TechSimPlus React JS Certificate')">
                📜 View Certificate in Browser
              </button>
            </div>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
              Practical frontend training building Single Page Applications with React.js, hooks (useState, useEffect, useMemo), state management, dynamic routing, and API integration.
            </p>
          </div>
        `
      }
    ]
  },

  certificates: {
    id: "certificates",
    title: "Certificates",
    parent: "home",
    type: "folder",
    icon: ICONS.award,
    description: "Official certifications and technical credentials with verified Google Drive links",
    items: [
      {
        id: "cert_cybersec",
        name: "Foundation of Cybersecurity.cer",
        type: "file",
        extension: ".cer",
        icon: ICONS.fileCert,
        desc: "Foundational cybersecurity practices, threat identification, and network defense principles.",
        certUrl: "https://drive.google.com/file/d/1rp48L_OuAdPo8wvP0CwnB0d75f7USPso/view?usp=sharing",
        meta: {
          Credential: "Foundation of Cybersecurity",
          Status: "Verified Certificate",
          DirectLink: "https://drive.google.com/file/d/1rp48L_OuAdPo8wvP0CwnB0d75f7USPso/view?usp=sharing"
        },
        fullContent: `
          <div style="padding:18px; border:1px solid #D6E4F0; border-radius:var(--radius-md); background:#F4F8FC;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text); margin-bottom:8px;">Foundation of Cybersecurity</h3>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:14px;">
              Covers core principles of confidentiality, integrity, availability (CIA triad), security auditing, threat detection, and mitigation strategies for web applications.
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1rp48L_OuAdPo8wvP0CwnB0d75f7USPso/view?usp=sharing', 'Foundation of Cybersecurity Certificate')">
                📜 View Certificate in In-OS Browser
              </button>
              <a href="https://drive.google.com/file/d/1rp48L_OuAdPo8wvP0CwnB0d75f7USPso/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ↗ Open Drive Link
              </a>
            </div>
          </div>
        `
      },
      {
        id: "cert_mos",
        name: "Microsoft Office Specialist (MOS).cer",
        type: "file",
        extension: ".cer",
        icon: ICONS.fileCert,
        desc: "Certified proficiency in Microsoft Office productivity tools and data organization.",
        certUrl: "https://drive.google.com/file/d/1Mr-1qQYyy3Nut1a2q3y5nrwaOpR7ZPdJ/view?usp=sharing",
        meta: {
          Credential: "Microsoft Office Specialist (MOS)",
          Issuer: "Microsoft",
          DirectLink: "https://drive.google.com/file/d/1Mr-1qQYyy3Nut1a2q3y5nrwaOpR7ZPdJ/view?usp=sharing"
        },
        fullContent: `
          <div style="padding:18px; border:1px solid #D6E4F0; border-radius:var(--radius-md); background:#F4F8FC;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text); margin-bottom:8px;">Microsoft Office Specialist (MOS)</h3>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:14px;">
              Validated expertise in advanced spreadsheet data formatting, formula manipulation, documentation standards, and presentation tools in business contexts.
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1Mr-1qQYyy3Nut1a2q3y5nrwaOpR7ZPdJ/view?usp=sharing', 'Microsoft Office Specialist (MOS) Certificate')">
                📜 View Certificate in In-OS Browser
              </button>
              <a href="https://drive.google.com/file/d/1Mr-1qQYyy3Nut1a2q3y5nrwaOpR7ZPdJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ↗ Open Drive Link
              </a>
            </div>
          </div>
        `
      },
      {
        id: "cert_iit_data",
        name: "Advanced Certification in Data Analytics.cer",
        type: "file",
        extension: ".cer",
        icon: ICONS.fileCert,
        desc: "E&ICT Academy, IIT Guwahati • Certified Analytics Training Program",
        certUrl: "https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing",
        meta: {
          Credential: "Advanced Certification in Data Analytics",
          Institution: "E&ICT Academy, IIT Guwahati",
          DirectLink: "https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing"
        },
        fullContent: `
          <div style="padding:18px; border:1px solid #D6E4F0; border-radius:var(--radius-md); background:#F4F8FC;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text); margin-bottom:8px;">E&ICT Academy, IIT Guwahati</h3>
            <p style="font-size:13px; font-weight:600; color:var(--win-blue); margin-bottom:6px;">Advanced Certification in Data Analytics</p>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:14px;">
              Rigorous multi-month training and project evaluation in data manipulation, visualization, statistical modeling, and Power BI business dashboards.
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing', 'IIT Guwahati Data Analytics Certificate')">
                📜 View Certificate in In-OS Browser
              </button>
              <a href="https://drive.google.com/file/d/1BTtncuBTJQZ6gubpS8RvrCzSG81rP3M1/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ↗ Open Drive Link
              </a>
            </div>
          </div>
        `
      },
      {
        id: "cert_java_fullstack",
        name: "Java Fullstack Development.cer",
        type: "file",
        extension: ".cer",
        icon: ICONS.fileCert,
        desc: "Cybrom Technology Pvt. Ltd • Industrial Training Certification",
        certUrl: "https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing",
        meta: {
          Credential: "Java Fullstack Development",
          Institution: "Cybrom Technology Pvt. Ltd",
          DirectLink: "https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing"
        },
        fullContent: `
          <div style="padding:18px; border:1px solid #D6E4F0; border-radius:var(--radius-md); background:#F4F8FC;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text); margin-bottom:8px;">Cybrom Technology Pvt. Ltd</h3>
            <p style="font-size:13px; font-weight:600; color:var(--win-blue); margin-bottom:6px;">Java Fullstack Development Certification</p>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:14px;">
              Certified completion of industrial training program covering Spring Boot, Java backend APIs, Hibernate, and relational databases.
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing', 'Cybrom Java Fullstack Certificate')">
                📜 View Certificate in In-OS Browser
              </button>
              <a href="https://drive.google.com/file/d/1Re7Sr8SQLdXt6MFYwoVQSNAEGDUfgpLA/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ↗ Open Drive Link
              </a>
            </div>
          </div>
        `
      },
      {
        id: "cert_react_frontend",
        name: "Frontend Development with React JS.cer",
        type: "file",
        extension: ".cer",
        icon: ICONS.fileCert,
        desc: "TechSimPlus Learning • Internship & Skills Certification",
        certUrl: "https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing",
        meta: {
          Credential: "Frontend Development with React JS",
          Institution: "TechSimPlus Learning",
          DirectLink: "https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing"
        },
        fullContent: `
          <div style="padding:18px; border:1px solid #D6E4F0; border-radius:var(--radius-md); background:#F4F8FC;">
            <h3 style="font-size:17px; font-weight:700; color:var(--dark-text); margin-bottom:8px;">TechSimPlus Learning</h3>
            <p style="font-size:13px; font-weight:600; color:var(--win-blue); margin-bottom:6px;">Frontend Development with React JS</p>
            <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:14px;">
              Certification for developing production-grade responsive React user interfaces with component state management.
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn-primary" onclick="openInBrowser('https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing', 'TechSimPlus React JS Certificate')">
                📜 View Certificate in In-OS Browser
              </button>
              <a href="https://drive.google.com/file/d/1iL2fmWAZnH18Zdbt9ZxI9Zx7HWbjOuQT/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                ↗ Open Drive Link
              </a>
            </div>
          </div>
        `
      }
    ]
  },

  interests: {
    id: "interests",
    title: "Interests & Soft Skills",
    parent: "home",
    type: "folder",
    icon: ICONS.heart,
    description: "Personal pursuits, soft skills, and languages",
    items: [
      {
        id: "item_interests",
        name: "Interests.txt",
        type: "file",
        extension: ".txt",
        icon: ICONS.fileDoc,
        desc: "Learning new things, Cooking",
        fullContent: `
          <h3 style="font-size:16px; font-weight:700; color:var(--dark-text); margin-bottom:12px;">Personal Pursuits</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <span style="font-size:18px;">💡</span>
              <div>
                <strong style="font-size:13.5px; color:var(--dark-text);">Learning New Things</strong>
                <p style="font-size:12px; color:var(--text-secondary);">Exploring emerging frameworks, analytics, and software patterns.</p>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <span style="font-size:18px;">🍳</span>
              <div>
                <strong style="font-size:13.5px; color:var(--dark-text);">Cooking</strong>
                <p style="font-size:12px; color:var(--text-secondary);">Enjoying the disciplined and creative craft of cooking diverse cuisines.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "item_soft_skills",
        name: "Soft_Skills.txt",
        type: "file",
        extension: ".txt",
        icon: ICONS.fileDoc,
        desc: "Problem Solving, Collaboration, Positive Attitude",
        fullContent: `
          <h3 style="font-size:16px; font-weight:700; color:var(--dark-text); margin-bottom:12px;">Core Professional Strengths</h3>
          <div class="skills-chips-wrapper">
            <span class="skill-chip" style="font-size:13px; padding:8px 14px;">🎯 Problem Solving</span>
            <span class="skill-chip" style="font-size:13px; padding:8px 14px;">🤝 Collaboration</span>
            <span class="skill-chip" style="font-size:13px; padding:8px 14px;">✨ Positive Attitude</span>
          </div>
        `
      },
      {
        id: "item_languages",
        name: "Languages.txt",
        type: "file",
        extension: ".txt",
        icon: ICONS.fileDoc,
        desc: "Hindi, English",
        fullContent: `
          <h3 style="font-size:16px; font-weight:700; color:var(--dark-text); margin-bottom:12px;">Spoken Languages</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="padding:14px; background:#F8FAFD; border:1px solid #E2E8F0; border-radius:var(--radius-sm);">
              <strong style="color:var(--dark-text); font-size:13.5px;">Hindi</strong>
              <p style="font-size:12px; color:var(--text-muted); margin-top:2px;">Native / Professional</p>
            </div>
            <div style="padding:14px; background:#F8FAFD; border:1px solid #E2E8F0; border-radius:var(--radius-sm);">
              <strong style="color:var(--dark-text); font-size:13.5px;">English</strong>
              <p style="font-size:12px; color:var(--text-muted); margin-top:2px;">Professional Working</p>
            </div>
          </div>
        `
      }
    ]
  },

  links: {
    id: "links",
    title: "Links",
    parent: "home",
    type: "folder",
    icon: ICONS.link,
    description: "Professional social profiles and online presence",
    items: [
      {
        id: "link_linkedin",
        name: "LinkedIn Profile.url",
        type: "file",
        extension: ".url",
        icon: ICONS.link,
        desc: "sachin-singh-chauhan-0572092b4",
        webUrl: LINKS.linkedin,
        meta: { Platform: "LinkedIn", URL: LINKS.linkedin },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); margin-bottom:16px;">
            Connect on LinkedIn to discuss software development opportunities, industry trends, and collaborative projects.
          </p>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="btn-primary" onclick="openInBrowser('${LINKS.linkedin}', 'Sachin Singh Chauhan - LinkedIn')">
              🌐 Open in In-OS Browser
            </button>
            <a href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
        `
      },
      {
        id: "link_github",
        name: "GitHub Repository.url",
        type: "file",
        extension: ".url",
        icon: ICONS.link,
        desc: "github.com/SachinSchauhann",
        webUrl: LINKS.github,
        meta: { Platform: "GitHub", URL: LINKS.github },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); margin-bottom:16px;">
            Explore open source contributions, repositories and code samples on GitHub.
          </p>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="btn-primary" onclick="openInBrowser('${LINKS.github}', 'SachinSchauhann - GitHub')">
              🌐 Open in In-OS Browser
            </button>
            <a href="${LINKS.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
        `
      },
      {
        id: "link_social",
        name: "Social Profile.url",
        type: "file",
        extension: ".url",
        icon: ICONS.link,
        desc: "sachinsinghchauhan.netlify.app",
        webUrl: LINKS.portfolio,
        meta: { Platform: "Web Portfolio", URL: LINKS.portfolio },
        fullContent: `
          <p style="font-size:13.5px; color:var(--text-secondary); margin-bottom:16px;">
            Live personal portfolio deployment showcasing design and code executions.
          </p>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="btn-primary" onclick="openInBrowser('${LINKS.portfolio}', 'Sachin Portfolio Website')">
              🌐 Open in In-OS Browser
            </button>
            <a href="${LINKS.portfolio}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              ↗ Open in New Tab
            </a>
          </div>
        `
      }
    ]
  },

  contact: {
    id: "contact",
    title: "Contact",
    parent: "home",
    type: "folder",
    icon: ICONS.mail,
    description: "Direct contact information, email, and phone coordinates",
    items: [
      {
        id: "contact_details",
        name: "Contact_Card.vcf",
        type: "file",
        extension: ".vcf",
        icon: ICONS.fileDoc,
        desc: "Email: sachins9598@gmail.com | Phone: +91-6386533538 | Lucknow, UP",
        meta: {
          Email: "sachins9598@gmail.com",
          Phone: "+91-6386533538",
          WhatsApp: "+91-6386533538",
          Location: "Matiyari, Lucknow, Uttar Pradesh"
        },
        fullContent: `
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; align-items:center; gap:14px; padding:12px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <div style="width:36px; height:36px; border-radius:6px; background:var(--win-blue-light); color:var(--win-blue); display:flex; align-items:center; justify-content:center;">
                ${ICONS.mail}
              </div>
              <div style="flex:1;">
                <div style="font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Email</div>
                <a href="${LINKS.email}" style="font-size:13.5px; font-weight:600; color:var(--win-blue);">${LINKS.email.replace('mailto:', '')}</a>
              </div>
              <button class="btn-secondary" onclick="navigator.clipboard.writeText('${LINKS.email.replace('mailto:', '')}'); alert('Email copied!');" style="font-size:11px; padding:5px 10px;">Copy</button>
            </div>

            <div style="display:flex; align-items:center; gap:14px; padding:12px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <div style="width:36px; height:36px; border-radius:6px; background:var(--win-blue-light); color:var(--win-blue); display:flex; align-items:center; justify-content:center;">
                📞
              </div>
              <div style="flex:1;">
                <div style="font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Phone</div>
                <a href="${LINKS.phone}" style="font-size:13.5px; font-weight:600; color:var(--win-blue);">+91-6386533538</a>
              </div>
              <button class="btn-secondary" onclick="navigator.clipboard.writeText('+916386533538'); alert('Phone copied!');" style="font-size:11px; padding:5px 10px;">Copy</button>
            </div>

            <div style="display:flex; align-items:center; gap:14px; padding:12px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <div style="width:36px; height:36px; border-radius:6px; background:#E8F8F0; color:#10B981; display:flex; align-items:center; justify-content:center;">
                💬
              </div>
              <div style="flex:1;">
                <div style="font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">WhatsApp Chat</div>
                <a href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer" style="font-size:13.5px; font-weight:600; color:#10B981;">Chat on WhatsApp</a>
              </div>
              <button class="btn-secondary" onclick="openInBrowser('${LINKS.whatsapp}', 'WhatsApp Web')" style="font-size:11px; padding:5px 10px;">Open in OS</button>
            </div>

            <div style="display:flex; align-items:center; gap:14px; padding:12px; background:#F8FAFD; border-radius:var(--radius-sm); border:1px solid #E2E8F0;">
              <div style="width:36px; height:36px; border-radius:6px; background:var(--win-blue-light); color:var(--win-blue); display:flex; align-items:center; justify-content:center;">
                📍
              </div>
              <div style="flex:1;">
                <div style="font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Location</div>
                <div style="font-size:13.5px; font-weight:600; color:var(--dark-text);">Matiyari, Lucknow, Uttar Pradesh</div>
              </div>
              <button class="btn-secondary" onclick="openInBrowser('${LINKS.maps}', 'Google Maps - Matiyari, Lucknow')" style="font-size:11px; padding:5px 10px;">View Map</button>
            </div>
          </div>
        `
      }
    ]
  }
};

/* ==========================================================================
   4. APPLICATION STATE & WINDOW SYSTEM
   ========================================================================== */
const State = {
  currentFolderId: "home",
  currentViewFile: null,
  history: ["home"],
  historyIndex: 0,
  selectedItemId: null,
  viewMode: "grid", // 'grid' | 'list'
  searchQuery: "",
  activeWindowId: null,
  highestZIndex: 200,
  startMenuOpen: false
};

/* ==========================================================================
   5. MULTI-WINDOW MANAGER (Explorer, Browser, Overview, Calc, Gallery, Notepad, Settings, Snake, Ball)
   ========================================================================== */
const Windows = {
  explorer: {
    id: "explorer",
    el: null,
    taskbarBtn: null,
    status: "closed", // all windows start closed for a clean desktop
    isMaximized: false
  },
  browser: {
    id: "browser",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false,
    currentUrl: "",
    currentTitle: "Microsoft Edge"
  },
  overview: {
    id: "overview",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  calc: {
    id: "calc",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  gallery: {
    id: "gallery",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  notepad: {
    id: "notepad",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  settings: {
    id: "settings",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  snake: {
    id: "snake",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  },
  ball: {
    id: "ball",
    el: null,
    taskbarBtn: null,
    status: "closed",
    isMaximized: false
  }
};

function initWindows() {
  Windows.explorer.el = document.getElementById("explorer-window");
  Windows.explorer.taskbarBtn = document.getElementById("taskbar-btn-explorer");

  Windows.browser.el = document.getElementById("browser-window");
  Windows.browser.taskbarBtn = document.getElementById("taskbar-btn-edge");

  Windows.overview.el = document.getElementById("overview-window");
  Windows.overview.taskbarBtn = document.getElementById("taskbar-btn-overview");

  Windows.calc.el = document.getElementById("calc-window");
  Windows.calc.taskbarBtn = document.getElementById("taskbar-btn-calc");

  Windows.gallery.el = document.getElementById("gallery-window");
  Windows.gallery.taskbarBtn = document.getElementById("taskbar-btn-gallery");

  Windows.notepad.el = document.getElementById("notepad-window");
  Windows.notepad.taskbarBtn = document.getElementById("taskbar-btn-notepad");

  Windows.settings.el = document.getElementById("settings-window");
  Windows.settings.taskbarBtn = document.getElementById("taskbar-btn-settings");

  Windows.snake.el = document.getElementById("snake-window");
  Windows.snake.taskbarBtn = document.getElementById("taskbar-btn-snake");

  Windows.ball.el = document.getElementById("ball-window");
  Windows.ball.taskbarBtn = document.getElementById("taskbar-btn-ball");

  // Attach focus event on mousedown
  Object.keys(Windows).forEach(key => {
    const win = Windows[key];
    if (win.el) {
      win.el.addEventListener("mousedown", () => bringToFront(key));
    }
    if (win.taskbarBtn) {
      win.taskbarBtn.addEventListener("click", () => toggleWindowFromTaskbar(key));
    }
  });

  // Attach window controls
  setupWindowControls("explorer", "win-btn-minimize", "win-btn-maximize", "win-btn-close");
  setupWindowControls("browser", "browser-win-minimize", "browser-win-maximize", "browser-win-close");
  setupWindowControls("overview", "overview-win-minimize", "overview-win-maximize", "overview-win-close");
  setupWindowControls("calc", "calc-win-minimize", "calc-win-maximize", "calc-win-close");
  setupWindowControls("gallery", "gallery-win-minimize", "gallery-win-maximize", "gallery-win-close");
  setupWindowControls("notepad", "notepad-win-minimize", "notepad-win-maximize", "notepad-win-close");
  setupWindowControls("settings", "settings-win-minimize", "settings-win-maximize", "settings-win-close");
  setupWindowControls("snake", "snake-win-minimize", "snake-win-maximize", "snake-win-close");
  setupWindowControls("ball", "ball-win-minimize", "ball-win-maximize", "ball-win-close");
}

function setupWindowControls(key, minId, maxId, closeId) {
  document.getElementById(minId)?.addEventListener("click", () => minimizeWindow(key));
  document.getElementById(maxId)?.addEventListener("click", () => toggleMaximizeWindow(key));
  document.getElementById(closeId)?.addEventListener("click", () => closeWindow(key));
}

function bringToFront(key) {
  const win = Windows[key];
  if (!win || !win.el) return;
  State.highestZIndex += 2;
  win.el.style.zIndex = State.highestZIndex;
  State.activeWindowId = key;

  Object.keys(Windows).forEach(k => {
    const w = Windows[k];
    if (w.el) {
      if (k === key) {
        w.el.classList.add("active-window");
        w.el.classList.remove("inactive-window");
      } else {
        w.el.classList.remove("active-window");
        w.el.classList.add("inactive-window");
      }
    }
  });
}

function openWindow(key) {
  const win = Windows[key];
  if (!win || !win.el) return;
  win.status = "open";
  win.el.classList.remove("minimized");
  win.el.classList.add("open");
  if (win.taskbarBtn) win.taskbarBtn.classList.add("active");
  bringToFront(key);

  if (key === "calc") {
    updateCalcDisplay();
  } else if (key === "gallery") {
    renderGallery();
  } else if (key === "notepad") {
    const textarea = document.getElementById("notepad-textarea");
    if (textarea && !textarea.value) {
      textarea.value = NOTEPAD_INITIAL_TEXT;
    }
  } else if (key === "snake") {
    if (typeof drawSnakeBoardInitial === "function") {
      drawSnakeBoardInitial();
    }
  } else if (key === "ball") {
    if (typeof drawBallBoardInitial === "function") {
      drawBallBoardInitial();
    }
  }
}

function closeWindow(key) {
  const win = Windows[key];
  if (!win || !win.el) return;
  win.status = "closed";
  win.el.classList.remove("open", "maximized", "active-window");
  if (win.taskbarBtn) win.taskbarBtn.classList.remove("active");

  if (key === "browser") {
    const iframe = document.getElementById("browser-iframe");
    if (iframe) iframe.src = "about:blank";
  } else if (key === "snake") {
    if (typeof pauseSnakeGame === "function") {
      pauseSnakeGame();
    }
  } else if (key === "ball") {
    if (typeof pauseBallGame === "function") {
      pauseBallGame();
    }
  }
}

function minimizeWindow(key) {
  const win = Windows[key];
  if (!win || !win.el) return;
  win.status = "minimized";
  win.el.classList.add("minimized");
  win.el.classList.remove("active-window");
  if (win.taskbarBtn) win.taskbarBtn.classList.remove("active");

  if (key === "snake" && typeof pauseSnakeGame === "function") {
    pauseSnakeGame();
  } else if (key === "ball" && typeof pauseBallGame === "function") {
    pauseBallGame();
  }
}

function toggleMaximizeWindow(key) {
  const win = Windows[key];
  if (!win || !win.el) return;
  win.isMaximized = !win.isMaximized;
  win.el.classList.toggle("maximized", win.isMaximized);
}

function toggleWindowFromTaskbar(key) {
  const win = Windows[key];
  if (!win) return;
  if (win.status === "open") {
    if (State.activeWindowId === key) {
      minimizeWindow(key);
    } else {
      bringToFront(key);
    }
  } else {
    openWindow(key);
  }
}

function minimizeAllWindows() {
  Object.keys(Windows).forEach(k => {
    if (Windows[k].status === "open") {
      minimizeWindow(k);
    }
  });
}

// Window Dragging Engine
function makeDraggable(windowEl, handleEl, winKey) {
  let isDragging = false;
  let startX = 0, startY = 0;
  let initialLeft = 0, initialTop = 0;

  handleEl.addEventListener("mousedown", (e) => {
    if (e.target.closest("button") || e.target.closest("input") || windowEl.classList.contains("maximized")) return;
    bringToFront(winKey);
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = windowEl.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;
    windowEl.style.margin = "0";
    windowEl.style.right = "auto";
    windowEl.style.bottom = "auto";
    windowEl.style.transform = "none";
    windowEl.style.width = rect.width + "px";
    windowEl.style.height = rect.height + "px";
    windowEl.style.left = initialLeft + "px";
    windowEl.style.top = initialTop + "px";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - 120, initialLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - 80, initialTop + dy));
    windowEl.style.left = newLeft + "px";
    windowEl.style.top = newTop + "px";
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  handleEl.addEventListener("dblclick", (e) => {
    if (e.target.closest("button") || e.target.closest("input")) return;
    toggleMaximizeWindow(winKey);
  });
}

function initWindowDragging() {
  const configs = [
    { win: Windows.explorer.el, bar: document.getElementById("explorer-titlebar"), key: "explorer" },
    { win: Windows.browser.el, bar: document.getElementById("browser-titlebar"), key: "browser" },
    { win: Windows.overview.el, bar: document.getElementById("overview-titlebar"), key: "overview" },
    { win: Windows.calc.el, bar: document.getElementById("calc-titlebar"), key: "calc" },
    { win: Windows.gallery.el, bar: document.getElementById("gallery-titlebar"), key: "gallery" },
    { win: Windows.notepad.el, bar: document.getElementById("notepad-titlebar"), key: "notepad" },
    { win: Windows.settings.el, bar: document.getElementById("settings-titlebar"), key: "settings" },
    { win: Windows.snake.el, bar: document.getElementById("snake-titlebar"), key: "snake" },
    { win: Windows.ball.el, bar: document.getElementById("ball-titlebar"), key: "ball" }
  ];

  configs.forEach(c => {
    if (c.win && c.bar) {
      makeDraggable(c.win, c.bar, c.key);
    }
  });
}

/* ==========================================================================
   6. IN-OS MICROSOFT EDGE BROWSER
   ========================================================================== */
function convertToEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("drive.google.com/file/d/")) {
    return url.replace(/\/view(\?usp=sharing)?/, "/preview");
  }
  return url;
}

function openInBrowser(rawUrl, title = "Web Page") {
  if (!rawUrl) return;

  const embedUrl = convertToEmbedUrl(rawUrl);
  Windows.browser.currentUrl = rawUrl;
  Windows.browser.currentTitle = title;

  const tabTitleEl = document.getElementById("browser-tab-title");
  const urlInputEl = document.getElementById("browser-url-input");
  const loadingBar = document.getElementById("browser-loading-bar");
  const fallbackCard = document.getElementById("browser-fallback-card");
  const fallbackBtn = document.getElementById("browser-fallback-open-btn");
  const iframe = document.getElementById("browser-iframe");

  if (tabTitleEl) tabTitleEl.textContent = title;
  if (urlInputEl) urlInputEl.value = rawUrl;
  if (fallbackCard) fallbackCard.classList.remove("visible");

  openWindow("browser");

  if (loadingBar) loadingBar.style.width = "40%";
  if (iframe) iframe.src = embedUrl;

  setTimeout(() => {
    if (loadingBar) loadingBar.style.width = "75%";
  }, 250);

  if (iframe) {
    iframe.onload = () => {
      if (loadingBar) {
        loadingBar.style.width = "100%";
        setTimeout(() => { loadingBar.style.width = "0%"; }, 350);
      }
    };
  }

  if (fallbackBtn) {
    fallbackBtn.onclick = () => {
      window.open(rawUrl, "_blank", "noopener,noreferrer");
    };
  }
}

// Browser toolbar handlers
document.getElementById("browser-btn-reload")?.addEventListener("click", () => {
  const iframe = document.getElementById("browser-iframe");
  if (iframe && iframe.src) {
    const s = iframe.src;
    iframe.src = s;
  }
});

document.getElementById("browser-btn-external")?.addEventListener("click", () => {
  if (Windows.browser.currentUrl) {
    window.open(Windows.browser.currentUrl, "_blank", "noopener,noreferrer");
  }
});

document.getElementById("browser-btn-copy-url")?.addEventListener("click", () => {
  if (Windows.browser.currentUrl) {
    navigator.clipboard.writeText(Windows.browser.currentUrl);
    alert("URL copied to clipboard!");
  }
});

/* ==========================================================================
   7. FILE EXPLORER NAVIGATION ENGINE
   ========================================================================== */
function navigateTo(folderId, pushHistory = true) {
  if (!PORTFOLIO[folderId]) return;

  State.currentFolderId = folderId;
  State.currentViewFile = null;
  State.selectedItemId = null;
  State.searchQuery = "";

  const searchInput = document.getElementById("explorer-search-input");
  if (searchInput) searchInput.value = "";

  if (pushHistory) {
    if (State.historyIndex < State.history.length - 1) {
      State.history = State.history.slice(0, State.historyIndex + 1);
    }
    State.history.push(folderId);
    State.historyIndex = State.history.length - 1;
  }

  openWindow("explorer");
  renderAllExplorer();
}

function goBack() {
  if (State.currentViewFile) {
    State.currentViewFile = null;
    renderAllExplorer();
    return;
  }
  if (State.historyIndex > 0) {
    State.historyIndex--;
    const prevFolderId = State.history[State.historyIndex];
    navigateTo(prevFolderId, false);
  }
}

function goForward() {
  if (State.historyIndex < State.history.length - 1) {
    State.historyIndex++;
    const nextFolderId = State.history[State.historyIndex];
    navigateTo(nextFolderId, false);
  }
}

function goUp() {
  if (State.currentViewFile) {
    State.currentViewFile = null;
    renderAllExplorer();
    return;
  }
  const current = PORTFOLIO[State.currentFolderId];
  if (current && current.parent) {
    navigateTo(current.parent);
  }
}

function viewFileDetails(fileItem) {
  State.currentViewFile = fileItem;
  State.selectedItemId = fileItem.id;
  renderAllExplorer();
}

function renderSidebar() {
  const quickItems = [
    { id: "home", name: "Home", icon: ICONS.home },
    { id: "about", name: "About Me", icon: ICONS.user },
    { id: "skills", name: "Skills", icon: ICONS.code },
    { id: "projects", name: "Projects", icon: ICONS.briefcase },
    { id: "education", name: "Education", icon: ICONS.book },
    { id: "experience", name: "Experience", icon: ICONS.briefcase },
    { id: "certificates", name: "Certificates", icon: ICONS.award }
  ];

  const profItems = [
    { id: "interests", name: "Interests & Soft Skills", icon: ICONS.heart },
    { id: "links", name: "Links", icon: ICONS.link },
    { id: "contact", name: "Contact", icon: ICONS.mail }
  ];

  const quickEl = document.getElementById("sidebar-quick-access");
  const profEl = document.getElementById("sidebar-professional");

  if (quickEl) {
    quickEl.innerHTML = quickItems.map(item => `
      <li class="sidebar-nav-item ${State.currentFolderId === item.id ? 'active' : ''}" data-folder-id="${item.id}" role="button" tabindex="0">
        <span>${item.name}</span>
      </li>
    `).join("");
  }

  if (profEl) {
    profEl.innerHTML = profItems.map(item => `
      <li class="sidebar-nav-item ${State.currentFolderId === item.id ? 'active' : ''}" data-folder-id="${item.id}" role="button" tabindex="0">
        <span>${item.name}</span>
      </li>
    `).join("");
  }

  document.querySelectorAll(".sidebar-nav-item").forEach(el => {
    el.addEventListener("click", () => {
      const folderId = el.getAttribute("data-folder-id");
      navigateTo(folderId);
    });
  });
}

function renderBreadcrumbs() {
  const crumbsEl = document.getElementById("explorer-breadcrumbs");
  if (!crumbsEl) return;

  const crumbs = [];
  let curr = PORTFOLIO[State.currentFolderId];

  while (curr) {
    crumbs.unshift(curr);
    curr = curr.parent ? PORTFOLIO[curr.parent] : null;
  }

  crumbsEl.innerHTML = `
    <span class="crumb-item" data-folder-id="home" role="button" tabindex="0">This PC</span>
    <span class="crumb-sep">›</span>
  ` + crumbs.map((crumb, idx) => `
    <span class="crumb-item" data-folder-id="${crumb.id}" role="button" tabindex="0">${crumb.title}</span>
    ${idx < crumbs.length - 1 ? '<span class="crumb-sep">›</span>' : ''}
  `).join("");

  if (State.currentViewFile) {
    crumbsEl.innerHTML += `
      <span class="crumb-sep">›</span>
      <span class="crumb-item" style="font-weight:600; color:var(--win-blue);">${State.currentViewFile.name}</span>
    `;
  }

  crumbsEl.querySelectorAll(".crumb-item[data-folder-id]").forEach(el => {
    el.addEventListener("click", () => {
      const folderId = el.getAttribute("data-folder-id");
      navigateTo(folderId);
    });
  });
}

function renderToolbarNavState() {
  const backBtn = document.getElementById("nav-btn-back");
  const forwardBtn = document.getElementById("nav-btn-forward");
  const upBtn = document.getElementById("nav-btn-up");

  if (backBtn) backBtn.disabled = !State.currentViewFile && State.historyIndex <= 0;
  if (forwardBtn) forwardBtn.disabled = !!State.currentViewFile || State.historyIndex >= State.history.length - 1;
  if (upBtn) upBtn.disabled = !State.currentViewFile && !PORTFOLIO[State.currentFolderId]?.parent;
}

function renderAllExplorer() {
  const folder = PORTFOLIO[State.currentFolderId];
  if (!folder) return;

  const folderNameEl = document.getElementById("explorer-folder-name");
  const titleIconEl = document.getElementById("explorer-title-icon");
  const mainContentEl = document.getElementById("explorer-main-content");
  const countEl = document.getElementById("status-bar-items-count");
  const statusContextEl = document.getElementById("status-bar-context");

  if (folderNameEl) folderNameEl.textContent = `${State.currentViewFile ? State.currentViewFile.name : folder.title} - File Explorer`;
  if (titleIconEl) titleIconEl.innerHTML = "";

  renderSidebar();
  renderBreadcrumbs();
  renderToolbarNavState();

  if (State.currentViewFile) {
    renderFileDetail(State.currentViewFile);
    if (countEl) countEl.textContent = "1 item";
    if (statusContextEl) statusContextEl.textContent = `File Inspector • ${State.currentViewFile.name}`;
    return;
  }

  let itemsToRender = folder.items || [];
  if (State.searchQuery.trim() !== "") {
    const q = State.searchQuery.toLowerCase().trim();
    itemsToRender = itemsToRender.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(q);
      const descMatch = (item.desc || "").toLowerCase().includes(q);
      const skillsMatch = (item.skillsList || []).some(s => s.toLowerCase().includes(q));
      return nameMatch || descMatch || skillsMatch;
    });
  }

  let html = "";

  // Explorer Home Profile Card
  if (folder.id === "home" && State.searchQuery.trim() === "") {
    html += `
      <div class="explorer-home-profile-card">
        <div class="explorer-home-avatar">
          <img src="Sachin.png" alt="Sachin Singh Chauhan" onerror="this.onerror=null; this.src='sachin.png';">
        </div>
        <div class="explorer-home-info">
          <div class="explorer-home-tag">Portfolio Operating System • System Profile</div>
          <h3 class="explorer-home-name">Sachin Singh Chauhan</h3>
          <div class="explorer-home-role">Software Developer | Web Developer | Data Analytics</div>
          <div class="explorer-home-loc">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Matiyari, Lucknow, Uttar Pradesh
          </div>
          <p class="explorer-home-bio">"Entry-level developer focused on programming, analytical thinking and problem solving, with an interest in building scalable software and web solutions."</p>
          <div class="explorer-home-stats">
            <span class="stat-pill"><strong>Academic:</strong> B.Tech CSE (2021–25, 7.9 CGPA)</span>
            <span class="stat-pill"><strong>Training:</strong> IIT Guwahati Data Analytics</span>
            <span class="stat-pill"><strong>Certificates:</strong> Verified Drive Links Available</span>
          </div>
        </div>
      </div>
    `;
  }

  html += `
    <div class="content-folder-header">
      <div>
        <h2 class="content-folder-title">
          ${folder.title}
        </h2>
        <div class="content-folder-desc">${folder.description}</div>
      </div>
      <div style="font-size:12px; color:var(--text-muted); font-weight:600;">
        ${itemsToRender.length} ${itemsToRender.length === 1 ? 'item' : 'items'}
      </div>
    </div>
  `;

  if (itemsToRender.length === 0) {
    html += `
      <div style="padding:40px; text-align:center; color:var(--text-muted);">
        <p style="font-size:14px; font-weight:600;">No items found matching "${State.searchQuery}"</p>
        <p style="font-size:12px; margin-top:4px;">Try searching another keyword.</p>
      </div>
    `;
  } else if (State.viewMode === "grid") {
    html += renderGridView(itemsToRender);
  } else {
    html += renderListView(itemsToRender);
  }

  if (mainContentEl) mainContentEl.innerHTML = html;
  if (countEl) countEl.textContent = `${itemsToRender.length} ${itemsToRender.length === 1 ? 'item' : 'items'}`;
  if (statusContextEl) statusContextEl.textContent = `Portfolio OS • Ready`;

  attachItemEventHandlers();
}

function renderGridView(items) {
  return `
    <div class="items-grid-view">
      ${items.map(item => {
        const hasExternalLink = item.certUrl || item.webUrl;
        const linkTarget = item.certUrl || item.webUrl;
        const linkLabel = item.certUrl ? "📜 View Certificate" : (item.webUrl ? "🌐 Open Link" : "");

        return `
          <div class="explorer-card ${State.selectedItemId === item.id ? 'selected' : ''}" data-item-id="${item.id}" data-item-type="${item.type}" tabindex="0" role="button" aria-label="${item.name}">
            <div class="card-title">${item.name}</div>
            <div class="card-desc">${item.desc || ""}</div>
            <div class="card-bottom-bar">
              ${item.type === 'folder' ? '<span class="card-badge">Folder</span>' : (item.extension ? `<span class="card-badge">${item.extension.toUpperCase()}</span>` : '')}
              ${hasExternalLink ? `
                <span class="card-action-link" onclick="event.stopPropagation(); openInBrowser('${linkTarget}', '${item.name}')">
                  ${linkLabel}
                </span>
              ` : ''}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderListView(items) {
  return `
    <table class="items-list-view">
      <thead>
        <tr>
          <th style="width: 40%;">Name</th>
          <th style="width: 20%;">Type</th>
          <th style="width: 40%;">Details & Actions</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => {
          const hasExternalLink = item.certUrl || item.webUrl;
          const linkTarget = item.certUrl || item.webUrl;
          return `
            <tr class="${State.selectedItemId === item.id ? 'selected' : ''}" data-item-id="${item.id}" data-item-type="${item.type}" tabindex="0">
              <td>
                <div class="list-name-col">
                  <span>${item.name}</span>
                </div>
              </td>
              <td>${item.type === 'folder' ? 'File Folder' : (item.extension ? item.extension.slice(1).toUpperCase() + ' Document' : 'Document')}</td>
              <td>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                  <span style="color:var(--text-secondary);">${item.desc || '—'}</span>
                  ${hasExternalLink ? `
                    <button class="btn-primary" style="font-size:11px; padding:3px 8px;" onclick="event.stopPropagation(); openInBrowser('${linkTarget}', '${item.name}')">
                      Open In OS
                    </button>
                  ` : ''}
                </div>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

function renderFileDetail(file) {
  let metaRows = "";
  if (file.meta) {
    metaRows = Object.entries(file.meta).map(([key, val]) => `
      <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #EBEBEB; font-size:12px;">
        <strong style="color:var(--dark-text);">${key}:</strong>
        <span style="color:var(--text-secondary);">${val}</span>
      </div>
    `).join("");
  }

  const mainContentEl = document.getElementById("explorer-main-content");
  if (!mainContentEl) return;

  mainContentEl.innerHTML = `
    <div class="file-detail-view">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
        <button class="btn-secondary" id="file-btn-back-to-folder" style="font-size:12px; padding:6px 12px;">
          ← Back to ${PORTFOLIO[State.currentFolderId].title}
        </button>
      </div>

      <div class="file-detail-header-card">
        <div class="file-detail-main">
          <h2 class="file-detail-title">${file.name}</h2>
          <div class="file-detail-type">${file.type === 'folder' ? 'Directory' : (file.extension ? file.extension.toUpperCase() + ' System Document' : 'Document')}</div>
          ${metaRows ? `<div style="margin-top:10px; max-width:480px;">${metaRows}</div>` : ''}
        </div>
      </div>

      <div class="file-detail-body">
        ${file.fullContent || `<p>${file.desc || 'No additional content.'}</p>`}
      </div>
    </div>
  `;

  document.getElementById("file-btn-back-to-folder")?.addEventListener("click", () => {
    State.currentViewFile = null;
    renderAllExplorer();
  });
}

function attachItemEventHandlers() {
  const mainContentEl = document.getElementById("explorer-main-content");
  if (!mainContentEl) return;

  const items = mainContentEl.querySelectorAll("[data-item-id]");
  items.forEach(el => {
    const itemId = el.getAttribute("data-item-id");
    const itemType = el.getAttribute("data-item-type");
    let lastClickTime = 0;

    el.addEventListener("click", () => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastClickTime;

      if (timeDiff < 320 && timeDiff > 0) {
        openItemById(itemId, itemType);
        lastClickTime = 0;
        return;
      }

      items.forEach(i => i.classList.remove("selected"));
      el.classList.add("selected");
      State.selectedItemId = itemId;
      lastClickTime = currentTime;
    });

    el.addEventListener("dblclick", () => {
      openItemById(itemId, itemType);
    });

    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        openItemById(itemId, itemType);
      }
    });
  });
}

function openItemById(itemId, itemType) {
  if (itemType === "folder") {
    navigateTo(itemId);
  } else {
    const folder = PORTFOLIO[State.currentFolderId];
    const file = folder.items.find(i => i.id === itemId);
    if (file) {
      viewFileDetails(file);
    }
  }
}

/* ==========================================================================
   8. DESKTOP SHORTCUTS & ICONS
   ========================================================================== */
function renderDesktopShortcuts() {
  const container = document.getElementById("desktop-shortcuts");
  if (!container) return;

  const shortcuts = [
    { id: "overview", name: "Portfolio Overview", icon: `<span style="font-size:32px;">👤</span>`, isWinApp: true, winKey: "overview" },
    { id: "explorer", name: "File Explorer", icon: ICONS.folder, isWinApp: true, winKey: "explorer" },
    { id: "home", name: "This PC", icon: ICONS.thisPC, isWinApp: false },
    { id: "calc", name: "Calculator", icon: `<span style="font-size:32px;">🧮</span>`, isWinApp: true, winKey: "calc" },
    { id: "gallery", name: "Photos", icon: `<span style="font-size:32px;">🖼️</span>`, isWinApp: true, winKey: "gallery" },
    { id: "notepad", name: "ReadMe.txt", icon: `<span style="font-size:32px;">📝</span>`, isWinApp: true, winKey: "notepad" },
    { id: "settings", name: "Settings", icon: `<span style="font-size:32px;">⚙️</span>`, isWinApp: true, winKey: "settings" },
    { id: "snake", name: "Snake Arcade", icon: `<span style="font-size:32px;">🐍</span>`, isWinApp: true, winKey: "snake" },
    { id: "ball", name: "DX-Ball Brick Breaker", icon: `<span style="font-size:32px;">🎾</span>`, isWinApp: true, winKey: "ball" },
    { id: "edge_browser", name: "Microsoft Edge", icon: ICONS.edgeBrowser, isWinApp: true, winKey: "browser" },
    { id: "projects", name: "Projects", icon: ICONS.folderProjects, isWinApp: false },
    { id: "certificates", name: "Certificates", icon: ICONS.folderCert, isWinApp: false },
    { id: "skills", name: "Skills", icon: ICONS.folderSkills, isWinApp: false },
    { id: "experience", name: "Experience", icon: ICONS.folder, isWinApp: false },
    { id: "education", name: "Education", icon: ICONS.folderEdu, isWinApp: false },
    { id: "contact", name: "Contact", icon: ICONS.folder, isWinApp: false }
  ];

  container.innerHTML = shortcuts.map(item => `
    <div class="desktop-shortcut" data-item-id="${item.id}" data-is-win-app="${item.isWinApp ? 'true' : 'false'}" data-win-key="${item.winKey || ''}" tabindex="0" role="button" aria-label="${item.name}">
      <div class="desktop-shortcut-icon">${item.icon}</div>
      <div class="desktop-shortcut-label">${item.name}</div>
    </div>
  `).join("");

  const shortcutEls = container.querySelectorAll(".desktop-shortcut");
  shortcutEls.forEach(el => {
    let lastClickTime = 0;

    el.addEventListener("click", () => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastClickTime;

      if (timeDiff < 320 && timeDiff > 0) {
        handleShortcutOpen(el);
        lastClickTime = 0;
        return;
      }

      shortcutEls.forEach(s => s.classList.remove("selected"));
      el.classList.add("selected");
      lastClickTime = currentTime;
    });

    el.addEventListener("dblclick", () => {
      handleShortcutOpen(el);
    });

    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleShortcutOpen(el);
      }
    });
  });
}

function handleShortcutOpen(el) {
  const isWinApp = el.getAttribute("data-is-win-app") === "true";
  const winKey = el.getAttribute("data-win-key");
  const id = el.getAttribute("data-item-id");

  if (isWinApp && winKey) {
    if (winKey === "browser") {
      openInBrowser("https://sachinsinghchauhan.netlify.app/", "Sachin Singh Chauhan - Portfolio");
    } else {
      openWindow(winKey);
    }
  } else {
    navigateTo(id);
  }
}

/* ==========================================================================
   9. START MENU
   ========================================================================== */
function toggleStartMenu() {
  State.startMenuOpen = !State.startMenuOpen;
  const startMenu = document.getElementById("start-menu");
  const startBtn = document.getElementById("taskbar-start-btn");

  if (State.startMenuOpen) {
    startMenu?.classList.add("open");
    startMenu?.setAttribute("aria-hidden", "false");
    startBtn?.classList.add("active");
  } else {
    startMenu?.classList.remove("open");
    startMenu?.setAttribute("aria-hidden", "true");
    startBtn?.classList.remove("active");
  }
}

function renderStartMenuPinned() {
  const grid = document.getElementById("start-pinned-grid");
  if (!grid) return;

  const pins = [
    { id: "overview", name: "Portfolio Overview", icon: `<span style="font-size:26px;">👤</span>`, winKey: "overview" },
    { id: "explorer", name: "File Explorer", icon: ICONS.thisPC, winKey: "explorer" },
    { id: "edge", name: "Microsoft Edge", icon: ICONS.edgeBrowser, winKey: "browser" },
    { id: "calc", name: "Calculator", icon: `<span style="font-size:26px;">🧮</span>`, winKey: "calc" },
    { id: "gallery", name: "Photos", icon: `<span style="font-size:26px;">🖼️</span>`, winKey: "gallery" },
    { id: "notepad", name: "Notepad", icon: `<span style="font-size:26px;">📝</span>`, winKey: "notepad" },
    { id: "settings", name: "Settings", icon: `<span style="font-size:26px;">⚙️</span>`, winKey: "settings" },
    { id: "snake", name: "Snake Arcade", icon: `<span style="font-size:26px;">🐍</span>`, winKey: "snake" },
    { id: "ball", name: "DX-Ball Game", icon: `<span style="font-size:26px;">🎾</span>`, winKey: "ball" },
    { id: "projects", name: "Projects", icon: ICONS.folderProjects, folderId: "projects" },
    { id: "certificates", name: "Certificates", icon: ICONS.folderCert, folderId: "certificates" },
    { id: "skills", name: "Skills", icon: ICONS.folderSkills, folderId: "skills" },
    { id: "experience", name: "Experience", icon: ICONS.folder, folderId: "experience" },
    { id: "education", name: "Education", icon: ICONS.folderEdu, folderId: "education" },
    { id: "contact", name: "Contact", icon: ICONS.folder, folderId: "contact" }
  ];

  grid.innerHTML = pins.map(pin => `
    <button class="start-pin-btn" data-win-key="${pin.winKey || ''}" data-folder-id="${pin.folderId || ''}" aria-label="Open ${pin.name}">
      ${pin.icon}
      <span>${pin.name}</span>
    </button>
  `).join("");

  grid.querySelectorAll(".start-pin-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const winKey = btn.getAttribute("data-win-key");
      const folderId = btn.getAttribute("data-folder-id");
      toggleStartMenu();

      if (winKey) {
        if (winKey === "browser") {
          openInBrowser("https://sachinsinghchauhan.netlify.app/", "Sachin Portfolio Website");
        } else {
          openWindow(winKey);
        }
      } else if (folderId) {
        navigateTo(folderId);
      }
    });
  });

  document.getElementById("start-btn-about")?.addEventListener("click", () => {
    toggleStartMenu();
    openWindow("overview");
  });
}

/* ==========================================================================
   10. REAL-TIME CLOCK & CALENDAR FLYOUT
   ========================================================================== */
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  // Taskbar Short Clock
  const clockTimeVal = document.getElementById("clock-time-val");
  if (clockTimeVal) {
    clockTimeVal.textContent = `${hours12}:${minutes} ${ampm}`;
  }

  const monthStr = String(now.getMonth() + 1).padStart(2, "0");
  const dayStr = String(now.getDate()).padStart(2, "0");
  const yearStr = now.getFullYear();

  const clockDateVal = document.getElementById("clock-date-val");
  if (clockDateVal) {
    clockDateVal.textContent = `${monthStr}/${dayStr}/${yearStr}`;
  }

  // Calendar Flyout Clock with Live Seconds!
  const flyoutClockVal = document.getElementById("flyout-clock-val");
  if (flyoutClockVal) {
    flyoutClockVal.textContent = `${hours12}:${minutes}:${seconds} ${ampm}`;
  }

  const flyoutDateVal = document.getElementById("flyout-date-val");
  if (flyoutDateVal) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    flyoutDateVal.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }
}

let calCurrentYear = new Date().getFullYear();
let calCurrentMonth = new Date().getMonth();

function renderCalendar() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const titleEl = document.getElementById("calendar-month-title");
  if (titleEl) {
    titleEl.textContent = `${monthNames[calCurrentMonth]} ${calCurrentYear}`;
  }

  const gridEl = document.getElementById("calendar-days-grid");
  if (!gridEl) return;

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let html = weekDays.map(d => `<div class="cal-day-header">${d}</div>`).join("");

  const firstDayIndex = new Date(calCurrentYear, calCurrentMonth, 1).getDay();
  const daysInCurrentMonth = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(calCurrentYear, calCurrentMonth, 0).getDate();

  const today = new Date();
  const isThisMonth = today.getFullYear() === calCurrentYear && today.getMonth() === calCurrentMonth;

  // Previous month padding days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    html += `<div class="cal-day-cell other-month">${daysInPrevMonth - i}</div>`;
  }

  // Current month days
  for (let d = 1; d <= daysInCurrentMonth; d++) {
    const isToday = isThisMonth && today.getDate() === d;
    html += `<div class="cal-day-cell ${isToday ? 'today' : ''}" onclick="selectCalDate(${d})">${d}</div>`;
  }

  // Next month padding days to complete grid
  const totalCells = Math.ceil((firstDayIndex + daysInCurrentMonth) / 7) * 7;
  const remainingCells = totalCells - (firstDayIndex + daysInCurrentMonth);
  for (let n = 1; n <= remainingCells; n++) {
    html += `<div class="cal-day-cell other-month">${n}</div>`;
  }

  gridEl.innerHTML = html;
}

function selectCalDate(day) {
  // Highlight clicked date
  const cells = document.querySelectorAll(".cal-day-cell");
  cells.forEach(c => {
    if (!c.classList.contains("other-month")) {
      if (c.textContent == day) {
        c.classList.add("today");
      } else {
        c.classList.remove("today");
      }
    }
  });
}

function toggleCalendarFlyout() {
  const flyout = document.getElementById("calendar-flyout");
  if (!flyout) return;
  const isOpen = flyout.classList.toggle("open");
  flyout.setAttribute("aria-hidden", !isOpen);
  if (isOpen) {
    calCurrentYear = new Date().getFullYear();
    calCurrentMonth = new Date().getMonth();
    renderCalendar();
  }
}

/* ==========================================================================
   11. CALCULATOR ENGINE
   ========================================================================== */
const CalcState = {
  displayVal: "0",
  prevVal: null,
  op: null,
  resetNext: false
};

function updateCalcDisplay() {
  const historyEl = document.getElementById("calc-history");
  const resultEl = document.getElementById("calc-result");
  if (resultEl) resultEl.textContent = CalcState.displayVal;
  if (historyEl) {
    if (CalcState.prevVal !== null && CalcState.op) {
      historyEl.textContent = `${CalcState.prevVal} ${CalcState.op}`;
    } else {
      historyEl.textContent = "";
    }
  }
}

function handleCalcDigit(digit) {
  if (CalcState.resetNext || CalcState.displayVal === "0") {
    CalcState.displayVal = String(digit);
    CalcState.resetNext = false;
  } else {
    if (CalcState.displayVal.length < 14) {
      CalcState.displayVal += String(digit);
    }
  }
  updateCalcDisplay();
}

function handleCalcDecimal() {
  if (CalcState.resetNext) {
    CalcState.displayVal = "0.";
    CalcState.resetNext = false;
  } else if (!CalcState.displayVal.includes(".")) {
    CalcState.displayVal += ".";
  }
  updateCalcDisplay();
}

function handleCalcOp(op) {
  const current = parseFloat(CalcState.displayVal);
  if (CalcState.prevVal !== null && CalcState.op && !CalcState.resetNext) {
    calculateResult();
  } else {
    CalcState.prevVal = current;
  }
  CalcState.op = op;
  CalcState.resetNext = true;
  updateCalcDisplay();
}

function calculateResult() {
  if (CalcState.prevVal === null || !CalcState.op) return;
  const prev = parseFloat(CalcState.prevVal);
  const curr = parseFloat(CalcState.displayVal);
  let res = 0;
  switch (CalcState.op) {
    case "+": res = prev + curr; break;
    case "-": res = prev - curr; break;
    case "×": case "*": res = prev * curr; break;
    case "÷": case "/":
      if (curr === 0) {
        CalcState.displayVal = "Error";
        CalcState.prevVal = null;
        CalcState.op = null;
        CalcState.resetNext = true;
        updateCalcDisplay();
        return;
      }
      res = prev / curr;
      break;
    default: return;
  }
  res = Math.round(res * 1000000000) / 1000000000;
  CalcState.displayVal = String(res);
  CalcState.prevVal = null;
  CalcState.op = null;
  CalcState.resetNext = true;
  updateCalcDisplay();
}

function handleCalcClear() {
  CalcState.displayVal = "0";
  CalcState.prevVal = null;
  CalcState.op = null;
  CalcState.resetNext = false;
  updateCalcDisplay();
}

function handleCalcCE() {
  CalcState.displayVal = "0";
  updateCalcDisplay();
}

function handleCalcBackspace() {
  if (CalcState.resetNext) return;
  if (CalcState.displayVal.length > 1) {
    CalcState.displayVal = CalcState.displayVal.slice(0, -1);
  } else {
    CalcState.displayVal = "0";
  }
  updateCalcDisplay();
}

function handleCalcNegate() {
  if (CalcState.displayVal === "0" || CalcState.displayVal === "Error") return;
  if (CalcState.displayVal.startsWith("-")) {
    CalcState.displayVal = CalcState.displayVal.slice(1);
  } else {
    CalcState.displayVal = "-" + CalcState.displayVal;
  }
  updateCalcDisplay();
}

function initCalculator() {
  const calcWindow = document.getElementById("calc-window");
  if (!calcWindow) return;

  calcWindow.querySelectorAll(".calc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const num = btn.getAttribute("data-num");
      const op = btn.getAttribute("data-op");
      const action = btn.getAttribute("data-action");

      if (num !== null) {
        handleCalcDigit(num);
      } else if (op !== null) {
        handleCalcOp(op);
      } else if (action !== null) {
        switch (action) {
          case "clear": handleCalcClear(); break;
          case "ce": handleCalcCE(); break;
          case "backspace": handleCalcBackspace(); break;
          case "decimal": handleCalcDecimal(); break;
          case "negate": handleCalcNegate(); break;
          case "equals": calculateResult(); break;
        }
      }
    });
  });
}

/* ==========================================================================
   12. PHOTOS / GALLERY APP
   ========================================================================== */
const GALLERY_ITEMS = [
  {
    title: "Sachin Singh Chauhan - Profile & Identity",
    src: "Sachin.png",
    thumb: "Sachin.png"
  },
  {
    title: "Sky Consultancy Group - Fullstack Web Platform",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "StackVix IT Solutions - Enterprise Dashboard & Services",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "Comprehensive Digital Board - Interactive Classroom Canvas",
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "IIT Guwahati - Data Analytics & Modeling Credential",
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "Cybrom - Java Fullstack & Spring Boot Credential",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "TechSimPlus - React.js Web Development Credential",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80"
  },
  {
    title: "Master of Cybersecurity & Threat Defense Credential",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&q=80"
  }
];

let galleryCurrentIndex = 0;

function renderGallery() {
  const current = GALLERY_ITEMS[galleryCurrentIndex];
  const mainImg = document.getElementById("gallery-main-img");
  const titleEl = document.getElementById("gallery-img-title");
  const counterEl = document.getElementById("gallery-img-counter");
  const stripEl = document.getElementById("gallery-thumbnails-strip");

  if (mainImg) {
    mainImg.src = current.src;
    mainImg.alt = current.title;
  }
  if (titleEl) titleEl.textContent = current.title;
  if (counterEl) counterEl.textContent = `${galleryCurrentIndex + 1} / ${GALLERY_ITEMS.length}`;

  if (stripEl) {
    stripEl.innerHTML = GALLERY_ITEMS.map((item, idx) => `
      <div class="gallery-thumb ${idx === galleryCurrentIndex ? 'active' : ''}" onclick="selectGalleryItem(${idx})">
        <img src="${item.thumb}" alt="${item.title}" onerror="this.onerror=null; this.src='Sachin.png';">
      </div>
    `).join("");
  }
}

function selectGalleryItem(idx) {
  galleryCurrentIndex = idx;
  renderGallery();
}

function initGallery() {
  document.getElementById("gallery-prev-btn")?.addEventListener("click", () => {
    galleryCurrentIndex = (galleryCurrentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    renderGallery();
  });

  document.getElementById("gallery-next-btn")?.addEventListener("click", () => {
    galleryCurrentIndex = (galleryCurrentIndex + 1) % GALLERY_ITEMS.length;
    renderGallery();
  });
}

/* ==========================================================================
   13. NOTEPAD INITIALIZATION
   ========================================================================== */
const NOTEPAD_INITIAL_TEXT = `=====================================================
SACHIN SINGH CHAUHAN - PORTFOLIO OPERATING SYSTEM
Software Developer | Web Developer | Data Analytics
Location: Matiyari, Lucknow, Uttar Pradesh
=====================================================

👋 Welcome! Thank you for inspecting my Portfolio OS.

📌 CAREER OBJECTIVE:
"Entry-level Software / Web Development / Data Analytics role 
where I can apply programming, analytical, and problem-solving 
skills to build scalable solutions."

💼 CORE TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Redux Toolkit
- Backend: Core Java, Java EE, Spring Boot, REST APIs, Node.js basics
- Data & Analytics: Python (Pandas, NumPy, Matplotlib), SQL, Power BI, Excel
- Databases: MySQL, PostgreSQL, MongoDB
- Tools: Git, GitHub, VS Code, Postman, Linux

🏆 VERIFIED CERTIFICATES (Check "Certificates" folder or Photos app):
1. Master of Cybersecurity (Google Drive verified)
2. Microsoft Office Specialist (MOS)
3. IIT Guwahati - Data Analytics
4. Cybrom - Java Fullstack Development
5. TechSimPlus - React.js Web Development

🌐 QUICK CONTACT:
- Phone / WhatsApp: +91 6386533538
- Email: sachins9598@gmail.com
- LinkedIn: https://www.linkedin.com/in/sachin-singh-chauhan-0572092b4/
- GitHub: https://github.com/SachinSchauhann
- Web Portfolio: https://sachinsinghchauhan.netlify.app/

* This Notepad is fully interactive. You can write your notes here! *
`;

/* ==========================================================================
   14. PERSONALIZATION & SETTINGS ENGINE
   ========================================================================== */
function showSettingsTab(tabName) {
  const personalizationTab = document.getElementById("settings-tab-personalization");
  const aboutTab = document.getElementById("settings-tab-about");
  const navPersonalization = document.getElementById("settings-nav-personalization");
  const navAbout = document.getElementById("settings-nav-about");

  if (tabName === "personalization") {
    if (personalizationTab) personalizationTab.style.display = "block";
    if (aboutTab) aboutTab.style.display = "none";
    navPersonalization?.classList.add("active");
    navAbout?.classList.remove("active");
  } else if (tabName === "about") {
    if (personalizationTab) personalizationTab.style.display = "none";
    if (aboutTab) aboutTab.style.display = "block";
    navPersonalization?.classList.remove("active");
    navAbout?.classList.add("active");
  }
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);

  const lightCard = document.getElementById("theme-card-light");
  const darkCard = document.getElementById("theme-card-dark");
  if (isDark) {
    darkCard?.classList.add("active");
    lightCard?.classList.remove("active");
  } else {
    lightCard?.classList.add("active");
    darkCard?.classList.remove("active");
  }

  localStorage.setItem("portfolio_theme", theme);
}

function setWallpaper(wpClass) {
  const screen = document.getElementById("desktop-screen");
  if (!screen) return;

  const validWallpapers = [
    "wallpaper-bloom-light",
    "wallpaper-bloom-dark",
    "wallpaper-cyberpunk",
    "wallpaper-sunset",
    "wallpaper-ocean",
    "wallpaper-nature"
  ];

  validWallpapers.forEach(cls => screen.classList.remove(cls));
  screen.classList.add(wpClass);

  document.querySelectorAll(".wallpaper-card").forEach(card => {
    if (card.getAttribute("data-wp") === wpClass) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  localStorage.setItem("portfolio_wallpaper", wpClass);
}

function setAccentColor(color) {
  document.documentElement.style.setProperty("--win-blue", color);

  document.querySelectorAll(".accent-color-btn").forEach(btn => {
    if (btn.getAttribute("onclick")?.includes(color)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  localStorage.setItem("portfolio_accent", color);
}

function setFont(fontName) {
  const fontValue = fontName === "JetBrains Mono" 
    ? `'JetBrains Mono', monospace` 
    : `'${fontName}', sans-serif`;

  document.documentElement.style.setProperty("--font-fluent", fontValue);

  document.querySelectorAll(".font-choice-btn").forEach(btn => {
    if (btn.getAttribute("onclick")?.includes(fontName)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  localStorage.setItem("portfolio_font", fontName);
}

function loadSavedSettings() {
  const savedTheme = localStorage.getItem("portfolio_theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }

  const savedWp = localStorage.getItem("portfolio_wallpaper");
  if (savedWp) {
    setWallpaper(savedWp);
  }

  const savedAccent = localStorage.getItem("portfolio_accent");
  if (savedAccent) {
    setAccentColor(savedAccent);
  }

  const savedFont = localStorage.getItem("portfolio_font");
  if (savedFont) {
    setFont(savedFont);
  }
}

/* ==========================================================================
   15. SNAKE ARCADE GAME ENGINE
   ========================================================================== */
const SnakeState = {
  canvas: null,
  ctx: null,
  gridSize: 15,
  cols: 24,
  rows: 20,
  snake: [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }],
  direction: "RIGHT",
  nextDirection: "RIGHT",
  food: { x: 16, y: 10 },
  score: 0,
  highScore: parseInt(localStorage.getItem("snake_high_score") || "0", 10),
  isRunning: false,
  isGameOver: false,
  timer: null,
  speed: 120
};

function drawSnakeBoardInitial() {
  if (!SnakeState.canvas) {
    SnakeState.canvas = document.getElementById("snake-canvas");
    if (SnakeState.canvas) {
      SnakeState.ctx = SnakeState.canvas.getContext("2d");
    }
  }
  if (!SnakeState.ctx) return;

  const highScoreEl = document.getElementById("snake-high-score");
  if (highScoreEl) highScoreEl.textContent = String(SnakeState.highScore);

  renderSnakeFrame();

  if (!SnakeState.isRunning && !SnakeState.isGameOver) {
    const ctx = SnakeState.ctx;
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.fillRect(0, 0, SnakeState.canvas.width, SnakeState.canvas.height);
    ctx.fillStyle = "#10B981";
    ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🐍 Retro Snake Arcade", SnakeState.canvas.width / 2, 120);
    ctx.fillStyle = "#E2E8F0";
    ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Press 'Start Game' or Space to Play", SnakeState.canvas.width / 2, 150);
    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Use Arrow keys, WASD, or On-screen D-pad", SnakeState.canvas.width / 2, 180);
  }
}

function startSnakeGame() {
  if (SnakeState.isRunning) return;
  if (SnakeState.isGameOver) {
    restartSnakeGame();
    return;
  }
  SnakeState.isRunning = true;
  SnakeState.isGameOver = false;
  const startBtn = document.getElementById("snake-btn-start");
  if (startBtn) startBtn.textContent = "Pause";

  clearInterval(SnakeState.timer);
  SnakeState.timer = setInterval(snakeGameTick, SnakeState.speed);
}

function pauseSnakeGame() {
  if (!SnakeState.isRunning) return;
  SnakeState.isRunning = false;
  clearInterval(SnakeState.timer);
  const startBtn = document.getElementById("snake-btn-start");
  if (startBtn) startBtn.textContent = "Resume";

  if (SnakeState.ctx && !SnakeState.isGameOver) {
    const ctx = SnakeState.ctx;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, SnakeState.canvas.width, SnakeState.canvas.height);
    ctx.fillStyle = "#F59E0B";
    ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GAME PAUSED", SnakeState.canvas.width / 2, SnakeState.canvas.height / 2);
  }
}

function restartSnakeGame() {
  clearInterval(SnakeState.timer);
  SnakeState.snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
  SnakeState.direction = "RIGHT";
  SnakeState.nextDirection = "RIGHT";
  SnakeState.score = 0;
  SnakeState.isGameOver = false;
  SnakeState.isRunning = true;
  SnakeState.speed = 120;
  spawnSnakeFood();

  const scoreEl = document.getElementById("snake-score");
  if (scoreEl) scoreEl.textContent = "0";

  const startBtn = document.getElementById("snake-btn-start");
  if (startBtn) startBtn.textContent = "Pause";

  SnakeState.timer = setInterval(snakeGameTick, SnakeState.speed);
  renderSnakeFrame();
}

function spawnSnakeFood() {
  let valid = false;
  let newFood = { x: 0, y: 0 };
  while (!valid) {
    newFood.x = Math.floor(Math.random() * SnakeState.cols);
    newFood.y = Math.floor(Math.random() * SnakeState.rows);
    valid = !SnakeState.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
  }
  SnakeState.food = newFood;
}

function handleSnakeKey(key) {
  if (!SnakeState.isRunning && (key === " " || key === "Enter")) {
    startSnakeGame();
    return;
  }

  const dir = SnakeState.direction;
  if ((key === "ArrowUp" || key === "KeyW" || key === "w" || key === "W") && dir !== "DOWN") {
    SnakeState.nextDirection = "UP";
  } else if ((key === "ArrowDown" || key === "KeyS" || key === "s" || key === "S") && dir !== "UP") {
    SnakeState.nextDirection = "DOWN";
  } else if ((key === "ArrowLeft" || key === "KeyA" || key === "a" || key === "A") && dir !== "RIGHT") {
    SnakeState.nextDirection = "LEFT";
  } else if ((key === "ArrowRight" || key === "KeyD" || key === "d" || key === "D") && dir !== "LEFT") {
    SnakeState.nextDirection = "RIGHT";
  }
}

function snakeGameTick() {
  if (!SnakeState.isRunning || SnakeState.isGameOver) return;

  SnakeState.direction = SnakeState.nextDirection;
  const head = { ...SnakeState.snake[0] };

  switch (SnakeState.direction) {
    case "UP": head.y -= 1; break;
    case "DOWN": head.y += 1; break;
    case "LEFT": head.x -= 1; break;
    case "RIGHT": head.x += 1; break;
  }

  // Wall collisions
  if (head.x < 0 || head.x >= SnakeState.cols || head.y < 0 || head.y >= SnakeState.rows) {
    handleSnakeGameOver();
    return;
  }

  // Self collision
  if (SnakeState.snake.some(s => s.x === head.x && s.y === head.y)) {
    handleSnakeGameOver();
    return;
  }

  SnakeState.snake.unshift(head);

  // Check food collision
  if (head.x === SnakeState.food.x && head.y === SnakeState.food.y) {
    SnakeState.score += 10;
    const scoreEl = document.getElementById("snake-score");
    if (scoreEl) scoreEl.textContent = String(SnakeState.score);

    if (SnakeState.score > SnakeState.highScore) {
      SnakeState.highScore = SnakeState.score;
      localStorage.setItem("snake_high_score", String(SnakeState.highScore));
      const highScoreEl = document.getElementById("snake-high-score");
      if (highScoreEl) highScoreEl.textContent = String(SnakeState.highScore);
    }

    spawnSnakeFood();

    if (SnakeState.speed > 65 && SnakeState.score % 40 === 0) {
      SnakeState.speed -= 5;
      clearInterval(SnakeState.timer);
      SnakeState.timer = setInterval(snakeGameTick, SnakeState.speed);
    }
  } else {
    SnakeState.snake.pop();
  }

  renderSnakeFrame();
}

function handleSnakeGameOver() {
  SnakeState.isGameOver = true;
  SnakeState.isRunning = false;
  clearInterval(SnakeState.timer);

  const startBtn = document.getElementById("snake-btn-start");
  if (startBtn) startBtn.textContent = "Start Game";

  renderSnakeFrame();

  const ctx = SnakeState.ctx;
  if (!ctx) return;

  ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
  ctx.fillRect(0, 0, SnakeState.canvas.width, SnakeState.canvas.height);

  ctx.fillStyle = "#EF4444";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("💥 GAME OVER", SnakeState.canvas.width / 2, 110);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Final Score: ${SnakeState.score}`, SnakeState.canvas.width / 2, 145);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Click 'Restart' to try again", SnakeState.canvas.width / 2, 180);
}

function renderSnakeFrame() {
  const ctx = SnakeState.ctx;
  const canvas = SnakeState.canvas;
  if (!ctx || !canvas) return;

  // Background
  ctx.fillStyle = "#0A0F1D";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle grid
  ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += SnakeState.gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += SnakeState.gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw Food (glowing apple)
  const fx = SnakeState.food.x * SnakeState.gridSize;
  const fy = SnakeState.food.y * SnakeState.gridSize;
  const radius = SnakeState.gridSize / 2;

  ctx.shadowColor = "#EF4444";
  ctx.shadowBlur = 8;
  ctx.fillStyle = "#EF4444";
  ctx.beginPath();
  ctx.arc(fx + radius, fy + radius, radius - 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.fillStyle = "#FCA5A5";
  ctx.beginPath();
  ctx.arc(fx + radius - 2, fy + radius - 2, 2, 0, Math.PI * 2);
  ctx.fill();

  // Draw Snake
  SnakeState.snake.forEach((segment, idx) => {
    const sx = segment.x * SnakeState.gridSize;
    const sy = segment.y * SnakeState.gridSize;

    if (idx === 0) {
      ctx.shadowColor = "#10B981";
      ctx.shadowBlur = 6;
      ctx.fillStyle = "#10B981";
      ctx.beginPath();
      ctx.roundRect(sx + 1, sy + 1, SnakeState.gridSize - 2, SnakeState.gridSize - 2, 4);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Eyes
      ctx.fillStyle = "#0A0F1D";
      if (SnakeState.direction === "RIGHT" || SnakeState.direction === "LEFT") {
        const eyeX = SnakeState.direction === "RIGHT" ? sx + SnakeState.gridSize - 4 : sx + 4;
        ctx.fillRect(eyeX, sy + 3, 2, 2);
        ctx.fillRect(eyeX, sy + SnakeState.gridSize - 5, 2, 2);
      } else {
        const eyeY = SnakeState.direction === "DOWN" ? sy + SnakeState.gridSize - 4 : sy + 4;
        ctx.fillRect(sx + 3, eyeY, 2, 2);
        ctx.fillRect(sx + SnakeState.gridSize - 5, eyeY, 2, 2);
      }
    } else {
      const alpha = Math.max(0.4, 1 - (idx / SnakeState.snake.length) * 0.6);
      ctx.fillStyle = `rgba(52, 211, 153, ${alpha})`;
      ctx.beginPath();
      ctx.roundRect(sx + 1, sy + 1, SnakeState.gridSize - 2, SnakeState.gridSize - 2, 3);
      ctx.fill();
    }
  });
}

function initSnakeGame() {
  SnakeState.canvas = document.getElementById("snake-canvas");
  if (SnakeState.canvas) {
    SnakeState.ctx = SnakeState.canvas.getContext("2d");
  }

  document.getElementById("snake-btn-start")?.addEventListener("click", () => {
    if (SnakeState.isRunning) {
      pauseSnakeGame();
    } else {
      startSnakeGame();
    }
  });

  document.getElementById("snake-btn-restart")?.addEventListener("click", restartSnakeGame);

  // Touch / D-pad Controls
  document.getElementById("dpad-up")?.addEventListener("click", () => handleSnakeKey("ArrowUp"));
  document.getElementById("dpad-down")?.addEventListener("click", () => handleSnakeKey("ArrowDown"));
  document.getElementById("dpad-left")?.addEventListener("click", () => handleSnakeKey("ArrowLeft"));
  document.getElementById("dpad-right")?.addEventListener("click", () => handleSnakeKey("ArrowRight"));

  drawSnakeBoardInitial();
}

/* ==========================================================================
   16. DX-BALL / BRICK BREAKER GAME ENGINE ("Boll Game")
   ========================================================================== */
const BallState = {
  canvas: null,
  ctx: null,
  score: 0,
  lives: 3,
  level: 1,
  isRunning: false,
  isGameOver: false,
  isWon: false,
  animId: null,

  paddleWidth: 76,
  paddleHeight: 10,
  paddleX: 172,
  paddleSpeed: 7,

  ballX: 210,
  ballY: 250,
  ballDx: 3,
  ballDy: -3,
  ballRadius: 6,

  brickRowCount: 4,
  brickColumnCount: 7,
  brickWidth: 48,
  brickHeight: 13,
  brickPadding: 8,
  brickOffsetTop: 28,
  brickOffsetLeft: 18,
  bricks: []
};

const BRICK_ROW_COLORS = ["#F43F5E", "#F59E0B", "#10B981", "#06B6D4"];

function initBricks() {
  BallState.bricks = [];
  for (let c = 0; c < BallState.brickColumnCount; c++) {
    BallState.bricks[c] = [];
    for (let r = 0; r < BallState.brickRowCount; r++) {
      BallState.bricks[c][r] = { x: 0, y: 0, status: 1, color: BRICK_ROW_COLORS[r] };
    }
  }
}

function drawBallBoardInitial() {
  if (!BallState.canvas) {
    BallState.canvas = document.getElementById("ball-canvas");
    if (BallState.canvas) {
      BallState.ctx = BallState.canvas.getContext("2d");
    }
  }
  if (!BallState.ctx) return;

  initBricks();
  resetBallAndPaddle();
  renderBallFrame();

  if (!BallState.isRunning && !BallState.isGameOver && !BallState.isWon) {
    const ctx = BallState.ctx;
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.fillRect(0, 0, BallState.canvas.width, BallState.canvas.height);
    ctx.fillStyle = "#38BDF8";
    ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🎾 DX-Ball Brick Breaker", BallState.canvas.width / 2, 115);
    ctx.fillStyle = "#E2E8F0";
    ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Press 'Start Game' to Launch Ball", BallState.canvas.width / 2, 145);
    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Use Mouse or Left/Right Arrow Keys to control Paddle", BallState.canvas.width / 2, 175);
  }
}

function resetBallAndPaddle() {
  if (!BallState.canvas) return;
  BallState.paddleX = (BallState.canvas.width - BallState.paddleWidth) / 2;
  BallState.ballX = BallState.canvas.width / 2;
  BallState.ballY = BallState.canvas.height - 35;
  const speed = 3 + (BallState.level - 1) * 0.5;
  BallState.ballDx = speed * (Math.random() > 0.5 ? 1 : -1);
  BallState.ballDy = -speed;
}

function startBallGame() {
  if (BallState.isRunning) return;
  if (BallState.isGameOver || BallState.isWon) {
    restartBallGame();
    return;
  }
  BallState.isRunning = true;
  const startBtn = document.getElementById("ball-btn-start");
  if (startBtn) startBtn.textContent = "Pause";

  cancelAnimationFrame(BallState.animId);
  BallState.animId = requestAnimationFrame(ballGameLoop);
}

function pauseBallGame() {
  if (!BallState.isRunning) return;
  BallState.isRunning = false;
  cancelAnimationFrame(BallState.animId);

  const startBtn = document.getElementById("ball-btn-start");
  if (startBtn) startBtn.textContent = "Resume";

  if (BallState.ctx && !BallState.isGameOver && !BallState.isWon) {
    const ctx = BallState.ctx;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, BallState.canvas.width, BallState.canvas.height);
    ctx.fillStyle = "#F59E0B";
    ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GAME PAUSED", BallState.canvas.width / 2, BallState.canvas.height / 2);
  }
}

function restartBallGame() {
  cancelAnimationFrame(BallState.animId);
  BallState.score = 0;
  BallState.lives = 3;
  BallState.level = 1;
  BallState.isGameOver = false;
  BallState.isWon = false;
  BallState.isRunning = true;

  updateBallHeaderUI();
  initBricks();
  resetBallAndPaddle();

  const startBtn = document.getElementById("ball-btn-start");
  if (startBtn) startBtn.textContent = "Pause";

  BallState.animId = requestAnimationFrame(ballGameLoop);
}

function updateBallHeaderUI() {
  const scoreEl = document.getElementById("ball-score");
  const livesEl = document.getElementById("ball-lives");
  const levelEl = document.getElementById("ball-level");

  if (scoreEl) scoreEl.textContent = String(BallState.score);
  if (levelEl) levelEl.textContent = String(BallState.level);
  if (livesEl) {
    livesEl.textContent = "❤️".repeat(Math.max(0, BallState.lives)) || "💀";
  }
}

function handleBallKey(key) {
  if (!BallState.canvas) return;
  if (!BallState.isRunning && (key === " " || key === "Enter")) {
    startBallGame();
    return;
  }

  if (key === "ArrowLeft") {
    BallState.paddleX = Math.max(0, BallState.paddleX - BallState.paddleSpeed * 3);
  } else if (key === "ArrowRight") {
    BallState.paddleX = Math.min(BallState.canvas.width - BallState.paddleWidth, BallState.paddleX + BallState.paddleSpeed * 3);
  }
}

function ballGameLoop() {
  if (!BallState.isRunning) return;

  const canvas = BallState.canvas;
  const ctx = BallState.ctx;
  if (!canvas || !ctx) return;

  // Move Ball
  BallState.ballX += BallState.ballDx;
  BallState.ballY += BallState.ballDy;

  // Wall collisions (Left & Right)
  if (BallState.ballX + BallState.ballRadius > canvas.width) {
    BallState.ballX = canvas.width - BallState.ballRadius;
    BallState.ballDx = -Math.abs(BallState.ballDx);
  } else if (BallState.ballX - BallState.ballRadius < 0) {
    BallState.ballX = BallState.ballRadius;
    BallState.ballDx = Math.abs(BallState.ballDx);
  }

  // Top Wall Collision
  if (BallState.ballY - BallState.ballRadius < 0) {
    BallState.ballY = BallState.ballRadius;
    BallState.ballDy = Math.abs(BallState.ballDy);
  }

  // Paddle Collision
  const paddleY = canvas.height - 20;
  if (
    BallState.ballY + BallState.ballRadius >= paddleY &&
    BallState.ballY - BallState.ballRadius <= paddleY + BallState.paddleHeight &&
    BallState.ballX >= BallState.paddleX &&
    BallState.ballX <= BallState.paddleX + BallState.paddleWidth
  ) {
    const hitPoint = (BallState.ballX - (BallState.paddleX + BallState.paddleWidth / 2)) / (BallState.paddleWidth / 2);
    const speed = Math.sqrt(BallState.ballDx * BallState.ballDx + BallState.ballDy * BallState.ballDy);
    
    BallState.ballDx = hitPoint * (speed * 0.85);
    BallState.ballDy = -Math.sqrt(Math.max(4, speed * speed - BallState.ballDx * BallState.ballDx));
    BallState.ballY = paddleY - BallState.ballRadius - 1;
  }

  // Bottom Edge Collision (Life lost)
  if (BallState.ballY + BallState.ballRadius > canvas.height) {
    BallState.lives--;
    updateBallHeaderUI();

    if (BallState.lives <= 0) {
      handleBallGameOver();
      return;
    } else {
      resetBallAndPaddle();
    }
  }

  // Brick Collisions
  let remainingBricks = 0;
  for (let c = 0; c < BallState.brickColumnCount; c++) {
    for (let r = 0; r < BallState.brickRowCount; r++) {
      const b = BallState.bricks[c][r];
      if (b.status === 1) {
        remainingBricks++;
        if (
          BallState.ballX > b.x &&
          BallState.ballX < b.x + BallState.brickWidth &&
          BallState.ballY > b.y &&
          BallState.ballY < b.y + BallState.brickHeight
        ) {
          BallState.ballDy = -BallState.ballDy;
          b.status = 0;
          BallState.score += 15;
          updateBallHeaderUI();
        }
      }
    }
  }

  // Level Complete / Victory
  if (remainingBricks === 0) {
    BallState.level++;
    BallState.score += 100;
    updateBallHeaderUI();
    initBricks();
    resetBallAndPaddle();
  }

  renderBallFrame();

  if (BallState.isRunning) {
    BallState.animId = requestAnimationFrame(ballGameLoop);
  }
}

function handleBallGameOver() {
  BallState.isRunning = false;
  BallState.isGameOver = true;
  cancelAnimationFrame(BallState.animId);

  const startBtn = document.getElementById("ball-btn-start");
  if (startBtn) startBtn.textContent = "Start Game";

  renderBallFrame();

  const ctx = BallState.ctx;
  if (!ctx) return;

  ctx.fillStyle = "rgba(17, 24, 39, 0.88)";
  ctx.fillRect(0, 0, BallState.canvas.width, BallState.canvas.height);

  ctx.fillStyle = "#EF4444";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("💥 GAME OVER", BallState.canvas.width / 2, 110);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Final Score: ${BallState.score}`, BallState.canvas.width / 2, 145);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Click 'Restart' to play again", BallState.canvas.width / 2, 180);
}

function renderBallFrame() {
  const ctx = BallState.ctx;
  const canvas = BallState.canvas;
  if (!ctx || !canvas) return;

  // Background
  ctx.fillStyle = "#0B0F19";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Bricks
  for (let c = 0; c < BallState.brickColumnCount; c++) {
    for (let r = 0; r < BallState.brickRowCount; r++) {
      if (BallState.bricks[c][r].status === 1) {
        const brickX = c * (BallState.brickWidth + BallState.brickPadding) + BallState.brickOffsetLeft;
        const brickY = r * (BallState.brickHeight + BallState.brickPadding) + BallState.brickOffsetTop;
        BallState.bricks[c][r].x = brickX;
        BallState.bricks[c][r].y = brickY;

        ctx.fillStyle = BallState.bricks[c][r].color;
        ctx.shadowColor = BallState.bricks[c][r].color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.roundRect(brickX, brickY, BallState.brickWidth, BallState.brickHeight, 3);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }

  // Draw Paddle
  const paddleY = canvas.height - 20;
  ctx.fillStyle = "#38BDF8";
  ctx.shadowColor = "#38BDF8";
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.roundRect(BallState.paddleX, paddleY, BallState.paddleWidth, BallState.paddleHeight, 4);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Draw Ball
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "#67E8F9";
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(BallState.ballX, BallState.ballY, BallState.ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function initBallGame() {
  BallState.canvas = document.getElementById("ball-canvas");
  if (BallState.canvas) {
    BallState.ctx = BallState.canvas.getContext("2d");

    // Mouse tracking for paddle
    BallState.canvas.addEventListener("mousemove", (e) => {
      const rect = BallState.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - (BallState.paddleWidth / 2);
      BallState.paddleX = Math.max(0, Math.min(BallState.canvas.width - BallState.paddleWidth, mouseX));
    });
  }

  document.getElementById("ball-btn-start")?.addEventListener("click", () => {
    if (BallState.isRunning) {
      pauseBallGame();
    } else {
      startBallGame();
    }
  });

  document.getElementById("ball-btn-restart")?.addEventListener("click", restartBallGame);

  drawBallBoardInitial();
}

/* ==========================================================================
   17. EVENT LISTENERS & WIRING
   ========================================================================== */
function initEvents() {
  // Explorer toolbar search
  document.getElementById("explorer-search-input")?.addEventListener("input", (e) => {
    State.searchQuery = e.target.value;
    renderAllExplorer();
  });

  // View toggles
  document.getElementById("view-toggle-grid")?.addEventListener("click", () => {
    State.viewMode = "grid";
    document.getElementById("view-toggle-grid")?.classList.add("active");
    document.getElementById("view-toggle-list")?.classList.remove("active");
    renderAllExplorer();
  });

  document.getElementById("view-toggle-list")?.addEventListener("click", () => {
    State.viewMode = "list";
    document.getElementById("view-toggle-list")?.classList.add("active");
    document.getElementById("view-toggle-grid")?.classList.remove("active");
    renderAllExplorer();
  });

  // Navigation buttons
  document.getElementById("nav-btn-back")?.addEventListener("click", goBack);
  document.getElementById("nav-btn-forward")?.addEventListener("click", goForward);
  document.getElementById("nav-btn-up")?.addEventListener("click", goUp);

  // Start button
  document.getElementById("taskbar-start-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleStartMenu();
  });

  document.addEventListener("click", (e) => {
    const startMenu = document.getElementById("start-menu");
    const startBtn = document.getElementById("taskbar-start-btn");
    if (State.startMenuOpen && startMenu && !startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      toggleStartMenu();
    }
  });

  // Calendar Flyout triggers
  document.getElementById("system-clock")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleCalendarFlyout();
  });

  document.getElementById("cal-prev-month")?.addEventListener("click", (e) => {
    e.stopPropagation();
    calCurrentMonth--;
    if (calCurrentMonth < 0) {
      calCurrentMonth = 11;
      calCurrentYear--;
    }
    renderCalendar();
  });

  document.getElementById("cal-next-month")?.addEventListener("click", (e) => {
    e.stopPropagation();
    calCurrentMonth++;
    if (calCurrentMonth > 11) {
      calCurrentMonth = 0;
      calCurrentYear++;
    }
    renderCalendar();
  });

  document.addEventListener("click", (e) => {
    const flyout = document.getElementById("calendar-flyout");
    const clock = document.getElementById("system-clock");
    if (flyout && flyout.classList.contains("open")) {
      if (!flyout.contains(e.target) && !clock.contains(e.target)) {
        flyout.classList.remove("open");
        flyout.setAttribute("aria-hidden", "true");
      }
    }
  });

  // Global Keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const flyout = document.getElementById("calendar-flyout");
      if (flyout?.classList.contains("open")) {
        flyout.classList.remove("open");
        flyout.setAttribute("aria-hidden", "true");
      } else if (State.startMenuOpen) {
        toggleStartMenu();
      } else if (State.activeWindowId && Windows[State.activeWindowId]?.status === "open") {
        closeWindow(State.activeWindowId);
      }
    }

    if (e.altKey && e.key === "ArrowLeft") {
      e.preventDefault();
      goBack();
    }
    if (e.altKey && e.key === "ArrowRight") {
      e.preventDefault();
      goForward();
    }
    if (e.key === "Backspace" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      goUp();
    }

    // Calculator active keyboard support
    if (State.activeWindowId === "calc" && Windows.calc.status === "open") {
      if (e.key >= "0" && e.key <= "9") {
        handleCalcDigit(e.key);
      } else if (e.key === ".") {
        handleCalcDecimal();
      } else if (e.key === "+" || e.key === "-") {
        handleCalcOp(e.key);
      } else if (e.key === "*") {
        handleCalcOp("×");
      } else if (e.key === "/") {
        handleCalcOp("÷");
      } else if (e.key === "Enter" || e.key === "=") {
        calculateResult();
      } else if (e.key === "Backspace") {
        handleCalcBackspace();
      }
    }

    // Snake Game active keyboard support
    if (State.activeWindowId === "snake" && Windows.snake.status === "open") {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "s", "a", "d", "W", "S", "A", "D", " "].includes(e.key)) {
        e.preventDefault();
        handleSnakeKey(e.key);
      }
    }

    // DX-Ball Game active keyboard support
    if (State.activeWindowId === "ball" && Windows.ball.status === "open") {
      if (["ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
        handleBallKey(e.key);
      }
    }
  });
}

/* ==========================================================================
   18. INITIALIZATION
   ========================================================================== */
function init() {
  initWindows();
  initCalculator();
  initGallery();
  initSnakeGame();
  initBallGame();
  loadSavedSettings();
  initEvents();
  renderDesktopShortcuts();
  renderStartMenuPinned();
  renderAllExplorer();
  initWindowDragging();

  // Clock tick every 1000ms
  setInterval(updateClock, 1000);
  updateClock();
}

document.addEventListener("DOMContentLoaded", init);
