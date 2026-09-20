// // 'use client';

// // import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
// // import {
// //   ArrowRight,
// //   BriefcaseBusiness,
// //   Code2,
// //   Cpu,
// //   Database,
// //   Download,
// //   GitBranch,
// //   GraduationCap,
// //   Layers3,
// //   Link2,
// //   Mail,
// //   Menu,
// //   Send,
// //   Sparkles,
// //   X,
// // } from 'lucide-react';
// // import { useEffect, useRef, useState } from 'react';
// // import HeroScene from './HeroScene';

// // const navItems = [
// //   { label: 'Home', href: '#home' },
// //   { label: 'About', href: '#about' },
// //   { label: 'Skills', href: '#skills' },
// //   { label: 'Projects', href: '#projects' },
// //   { label: 'Education', href: '#education' },
// //   { label: 'Contact', href: '#contact' },
// // ];

// // const stats = [
// //   { value: '2000+', label: 'User Records Analyzed' },
// //   { value: '6+', label: 'Full-Stack Projects' },
// //   { value: '4+', label: 'AI/ML Projects' },
// //   { value: 'DSA', label: 'Strong Problem-Solving Foundation' },
// // ];

// // const skillGroups = [
// //   {
// //     title: 'Programming',
// //     icon: Code2,
// //     items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
// //   },
// //   {
// //     title: 'Frontend',
// //     icon: Layers3,
// //     items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS','Bootstrap', 'Material UI'],
// //   },
// //   {
// //     title: 'Backend',
// //     icon: Cpu,
// //     items: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'REST APIs', 'Security', 'Authentication', 'JWT'],
// //   },
// //   {
// //     title: 'Database',
// //     icon: Database,
// //     items: ['MongoDB', 'MySQL', 'PostgreSQL',  'Redis'],
// //   },
// //   {
// //     title: 'AI/ML',
// //     icon: Sparkles,
// //     items: ['Machine Learning', 'Generative AI', 'LLMs', 'AI Agents', 'RAG', 'Data Analysis', 'Pandas', 'NumPy', 'Scikit-learn' ,'LLM', 'PySpark' ],
// //   },
// //   {
// //     title: 'Tools',
// //     icon: BriefcaseBusiness,
// //     items: ['Git', 'GitHub', 'Docker' ,'CI/CD', 'VS Code', 'Postman', 'jupyter Notebook', 'Linux', 'AWS-EC2', 'AWS-S3', ],
// //   },
// // ];

// // const projects = [
// //   {
// //     name: 'Blood Donation Platform',
// //     summary: 'A responsive donor management platform with secure authentication and admin control for blood requests and donor discovery.',
// //     tech: ['Next.js', 'MongoDB', 'JWT Authentication', 'Responsive UI', 'Donor Search', 'Admin CRUD'],
// //     accent: 'from-pink-500/40 via-rose-500/15 to-cyan-500/20',
// //     previewClass: 'border-pink-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.45),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))]',
// //     github: 'https://github.com',
// //     demo: '#contact',
// //   },
// //   {
// //     name: 'Secure Notes Application',
// //     summary: 'A private note-taking solution focused on authentication, encrypted-safe storage, and a clean admin dashboard for user-specific notes.',
// //     tech: ['Next.js', 'MongoDB', 'JWT', 'bcrypt', 'Authentication', 'User-specific notes', 'Admin dashboard'],
// //     accent: 'from-violet-500/40 via-indigo-500/15 to-sky-500/20',
// //     previewClass: 'border-violet-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.45),_transparent_35%),linear-gradient(135deg,rgba(17,24,39,0.96),rgba(49,46,129,0.9))]',
// //     github: 'https://github.com',
// //     demo: '#contact',
// //   },
// //   {
// //     name: 'Real Estate Application',
// //     summary: 'A property marketplace experience for browsing listings, managing properties, and exploring modern real-estate workflows.',
// //     tech: ['Next.js', 'Firebase', 'MongoDB', 'Authentication', 'Property listing'],
// //     accent: 'from-emerald-500/40 via-cyan-500/15 to-blue-500/20',
// //     previewClass: 'border-emerald-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.45),_transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(8,47,73,0.9))]',
// //     github: 'https://github.com',
// //     demo: '#contact',
// //   },
// // ];

// // const education = [
// //   {
// //     period: '2023 - 2027',
// //     title: 'B.Tech — Computer Science & Engineering (AI/ML)',
// //     place: 'Gandhi Engineering College',
// //     description: 'Focused on software engineering, machine learning, data-driven applications, and modern web development fundamentals.',
// //   },
// //   {
// //     period: '2021 - 2023',
// //     title: 'Development Experience & Independent Learning',
// //     place: 'Self-driven engineering projects',
// //     description: 'Built full-stack apps, explored AI workflows, and developed practical problem-solving skills through hands-on builds and DSA practice.',
// //   },
// // ];

// // const dsaTopics = ['Arrays', 'Strings', 'Hashing', 'Two Pointers', 'Sliding Window', 'Matrix', 'Binary Search', 'Stack', 'Linked List'];

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 28 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
// //   return (
// //     <div className="mb-12 max-w-2xl">
// //       <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
// //       <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
// //       <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
// //     </div>
// //   );
// // }

// // function ProjectCard({ project }: { project: (typeof projects)[number] }) {
// //   const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 24, mass: 0.45 });
// //   const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 24, mass: 0.45 });

// //   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
// //     const rect = event.currentTarget.getBoundingClientRect();
// //     const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
// //     const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
// //     rotateX.set(y * -7);
// //     rotateY.set(x * 10);
// //   };

// //   return (
// //     <motion.article
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.2 }}
// //       transition={{ duration: 0.5, ease: 'easeOut' }}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={() => {
// //         rotateX.set(0);
// //         rotateY.set(0);
// //       }}
// //       className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformPerspective: 1200,
// //       }}
// //     >
// //       <div className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 p-4 ${project.previewClass}`}>
// //         <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
// //           <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Project</span>
// //           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
// //         </div>

// //         <div className="space-y-3">
// //           <div className="h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
// //           <div className="grid grid-cols-3 gap-3">
// //             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
// //             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
// //             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
// //           </div>
// //           <div className="h-10 w-3/5 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
// //         </div>
// //       </div>

// //       <div className="relative mt-6">
// //         <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
// //         <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

// //         <div className="mt-5 flex flex-wrap gap-2">
// //           {project.tech.map((tech) => (
// //             <span key={tech} className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-2.5 py-1 text-[11px] font-medium text-cyan-100">
// //               {tech}
// //             </span>
// //           ))}
// //         </div>

// //         <div className="mt-7 flex items-center gap-3">
// //           <a
// //             href={project.github}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
// //           >
// //             GitHub
// //           </a>
// //           <a
// //             href={project.demo}
// //             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
// //           >
// //             Live Demo
// //             <ArrowRight className="h-4 w-4" />
// //           </a>
// //         </div>
// //       </div>
// //     </motion.article>
// //   );
// // }

// // export default function Portfolio() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const shouldReduceMotion = useReducedMotion();
// //   const shellRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     if (shouldReduceMotion) return;

// //     const shell = shellRef.current;
// //     if (!shell) return;

// //     let frame = 0;
// //     const updatePointer = (event: PointerEvent) => {
// //       cancelAnimationFrame(frame);
// //       frame = requestAnimationFrame(() => {
// //         shell.style.setProperty('--pointer-x', `${event.clientX}px`);
// //         shell.style.setProperty('--pointer-y', `${event.clientY}px`);
// //       });
// //     };

// //     window.addEventListener('pointermove', updatePointer, { passive: true });
// //     return () => {
// //       cancelAnimationFrame(frame);
// //       window.removeEventListener('pointermove', updatePointer);
// //     };
// //   }, [shouldReduceMotion]);

// //   return (
// //     <div ref={shellRef} className="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
// //       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_30%)]" />
// //       <div className="pointer-events-none fixed inset-0 z-0 opacity-100 [background:radial-gradient(520px_circle_at_var(--pointer-x)_var(--pointer-y),rgba(34,211,238,0.1),transparent_68%)] motion-reduce:hidden" />
// //       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

// //       <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
// //         <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
// //           <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.08em] text-white uppercase">
// //             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950">
// //               P
// //             </span>
// //             Papu
// //           </a>

// //           <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
// //             {navItems.map((item) => (
// //               <a key={item.href} href={item.href} className="transition hover:text-white">
// //                 {item.label}
// //               </a>
// //             ))}
// //           </div>

// //           <div className="hidden md:block">
// //             <a
// //               href="#contact"
// //               className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
// //             >
// //               Let&apos;s Talk
// //               <ArrowRight className="h-4 w-4" />
// //             </a>
// //           </div>

// //           <button
// //             type="button"
// //             aria-label="Toggle menu"
// //             onClick={() => setMenuOpen((open) => !open)}
// //             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
// //           >
// //             {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
// //           </button>
// //         </nav>

// //         {menuOpen && (
// //           <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
// //             <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-200">
// //               {navItems.map((item) => (
// //                 <a
// //                   key={item.href}
// //                   href={item.href}
// //                   onClick={() => setMenuOpen(false)}
// //                   className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
// //                 >
// //                   {item.label}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </header>

// //       <main id="home" className="relative z-10">
// //         <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
// //           <motion.div
// //             initial={shouldReduceMotion ? false : 'hidden'}
// //             animate={shouldReduceMotion ? undefined : 'visible'}
// //             variants={fadeUp}
// //             transition={{ duration: 0.6, ease: 'easeOut' }}
// //             className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
// //           >
// //             <div>
// //               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100">
// //                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
// //                 Available for opportunities
// //               </div>

// //               <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
// //                 Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">Papu Sahoo</span>
// //               </h1>

// //               <p className="mt-5 text-xl font-medium text-cyan-200 sm:text-2xl">Software Engineer</p>
// //               <p className="mt-5 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
// //                 I build  scalable web applications and intelligent software solutions using modern technologies.
// //               </p>

// //               <div className="mt-8 flex flex-col gap-4 sm:flex-row">
// //                 <a
// //                   href="#projects"
// //                   className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
// //                 >
// //                   View Projects
// //                   <ArrowRight className="h-4 w-4" />
// //                 </a>
// //                 <a
// //                   href="/Papu-Sahoo-Resume.pdf"
// //                   download
// //                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
// //                 >
// //                   <Download className="h-4 w-4" />
// //                   Download Resume
// //                 </a>
// //                 <a
// //                   href="#contact"
// //                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
// //                 >
// //                   <Mail className="h-4 w-4" />
// //                   Contact Me
// //                 </a>
// //               </div>

// //               <div className="mt-8 flex items-center gap-4 text-slate-300">
// //                 <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
// //                   <GitBranch className="h-5 w-5" />
// //                 </a>
// //                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
// //                   <Link2 className="h-5 w-5" />
// //                 </a>
// //               </div>
// //             </div>

// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, x: 26 }}
// //               animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
// //               transition={{ duration: 0.8, ease: 'easeOut' }}
// //             >
// //               <HeroScene />
// //             </motion.div>
// //           </motion.div>
// //         </section>

// //         <motion.section id="about" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
// //           <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
// //             <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
// //               <div className="mb-6 flex items-center gap-3 text-cyan-200">
// //                 <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2">
// //                   <GraduationCap className="h-5 w-5" />
// //                 </div>
// //                 <span className="text-sm font-medium uppercase tracking-[0.2em]">About</span>
// //               </div>
// //               <p className="text-lg leading-8 text-slate-200">
// //                 I&apos;m a Computer Science &amp; Engineering student focused on software engineering, AI/ML, and modern web development.
// //               </p>
// //             </div>

// //             <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// //               {stats.map((stat, index) => (
// //                 <motion.div key={stat.label} initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
// //                   <div className="text-3xl font-semibold text-white">{stat.value}</div>
// //                   <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.section>

// //         <motion.section id="skills" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
// //           <SectionHeading
// //             eyebrow="Skills"
// //             title="Full-stack building blocks with AI-driven thinking"
// //             description="From modern frontend systems to AI workflows and backend architecture, I enjoy designing performant products that combine product thinking with engineering discipline."
// //           />

// //           <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
// //             {skillGroups.map(({ title, icon: Icon, items }) => (
// //               <motion.div key={title} whileHover={shouldReduceMotion ? undefined : { y: -6 }} className="rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.4)] backdrop-blur-xl">
// //                 <div className="mb-6 flex items-center gap-3">
// //                   <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-200">
// //                     <Icon className="h-5 w-5" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-white">{title}</h3>
// //                 </div>
// //                 <div className="flex flex-wrap gap-2.5">
// //                   {items.map((item) => (
// //                     <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-100">
// //                       {item}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.section>

// //         <motion.section id="projects" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
// //           <SectionHeading
// //             eyebrow="Projects"
// //             title="Products built with purpose and technical depth"
// //             description="I design and ship user-focused applications with clear architecture, measurable value, and a polished product experience."
// //           />

// //           <div className="grid gap-6 xl:grid-cols-3">
// //             {projects.map((project) => (
// //               <ProjectCard key={project.name} project={project} />
// //             ))}
// //           </div>
// //         </motion.section>

// //         <motion.section id="education" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
// //           <SectionHeading
// //             eyebrow="Experience & Education"
// //             title="Building with engineering fundamentals and practical product experience"
// //             description="My journey combines formal learning with project-driven practice across software engineering, AI, and modern web application development."
// //           />

// //           <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-violet-500/30 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
// //             {education.map((item, index) => (
// //               <div key={item.title} className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
// //                 <div className="ml-10 rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl md:ml-0 md:max-w-md">
// //                   <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100">
// //                     {item.period}
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-white">{item.title}</h3>
// //                   <p className="mt-2 text-base font-medium text-cyan-200">{item.place}</p>
// //                   <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
// //                 </div>
// //                 <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 md:left-1/2 md:-translate-x-1/2">
// //                   <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.section>

// //         <motion.section initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
// //           <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8">
// //             <div className="mb-8 flex items-center gap-3 text-cyan-200">
// //               <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
// //                 <Code2 className="h-5 w-5" />
// //               </div>
// //               <span className="text-sm font-medium uppercase tracking-[0.2em]">DSA</span>
// //             </div>
// //             <div className="flex flex-wrap gap-3">
// //               {dsaTopics.map((topic) => (
// //                 <motion.span key={topic} whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }} className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
// //                   {topic}
// //                 </motion.span>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.section>

// //         <motion.section initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8">
// //           <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.86))] p-8 text-center shadow-[0_18px_80px_rgba(15,23,42,0.7)]">
// //             <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Resume</p>
// //             <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Interested in working together?</h2>
// //             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
// //               <a href="/Papu-Sahoo-Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
// //                 <Download className="h-4 w-4" />
// //                 Download Resume
// //               </a>
// //               <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
// //                 <Mail className="h-4 w-4" />
// //                 Contact Me
// //               </a>
// //             </div>
// //           </div>
// //         </motion.section>

// //         <motion.section id="contact" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
// //           <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
// //             <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-7 backdrop-blur-xl">
// //               <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Contact</p>
// //               <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s build something meaningful.</h2>
// //               <p className="mt-4 text-base leading-7 text-slate-300">
// //                 I&apos;m open to software engineering roles, AI-driven product work, and collaborative opportunities where thoughtful engineering can create real impact.
// //               </p>
// //               <div className="mt-8 space-y-4 text-slate-200">
// //                 <a href="mailto:spapu5449@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
// //                   <Mail className="h-5 w-5 text-cyan-300" />
// //                   spapu5449@gmail.com
// //                 </a>
// //               </div>
// //             </div>

// //             <form
// //               onSubmit={(event) => {
// //                 event.preventDefault();
// //                 const form = event.currentTarget as HTMLFormElement;
// //                 const name = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '';
// //                 const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';
// //                 const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '';
// //                 const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
// //                 const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
// //                 window.location.href = `mailto:spapu5449@gmail.com?subject=${subject}&body=${body}`;
// //               }}
// //               className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
// //             >
// //               <div className="grid gap-5 sm:grid-cols-2">
// //                 <label className="block text-sm text-slate-200">
// //                   <span className="mb-2 block">Name</span>
// //                   <input name="name" type="text" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Your name" />
// //                 </label>
// //                 <label className="block text-sm text-slate-200">
// //                   <span className="mb-2 block">Email</span>
// //                   <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="you@example.com" />
// //                 </label>
// //               </div>

// //               <label className="mt-5 block text-sm text-slate-200">
// //                 <span className="mb-2 block">Message</span>
// //                 <textarea name="message" required rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Tell me about your project or opportunity" />
// //               </label>

// //               <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
// //                 Send Message
// //                 <Send className="h-4 w-4" />
// //               </button>
// //             </form>
// //           </div>
// //         </motion.section>
// //       </main>
// //     </div>
// //   );
// // }




// 'use client';

// import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   Code2,
//   Cpu,
//   Database,
//   Download,
//   GitBranch,
//   GraduationCap,
//   Layers3,
//   Link2,
//   Mail,
//   Menu,
//   Send,
//   Sparkles,
//   X,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import HeroScene from './HeroScene';

// const navItems = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Education', href: '#education' },
//   { label: 'Contact', href: '#contact' },
// ];

// const stats = [
//   { value: '2000+', label: 'User Records Analyzed' },
//   { value: '6+', label: 'Full-Stack Projects' },
//   { value: '4+', label: 'AI/ML Projects' },
//   { value: 'DSA', label: 'Strong Problem-Solving Foundation' },
// ];

// const skillGroups = [
//   {
//     title: 'Programming',
//     icon: Code2,
//     items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
//   },
//   {
//     title: 'Frontend',
//     icon: Layers3,
//     items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS','Bootstrap', 'Material UI'],
//   },
//   {
//     title: 'Backend',
//     icon: Cpu,
//     items: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'REST APIs', 'Security', 'Authentication', 'JWT'],
//   },
//   {
//     title: 'Database',
//     icon: Database,
//     items: ['MongoDB', 'MySQL', 'PostgreSQL',  'Redis'],
//   },
//   {
//     title: 'AI/ML',
//     icon: Sparkles,
//     items: ['Machine Learning', 'Generative AI', 'LLMs', 'AI Agents', 'RAG', 'Data Analysis', 'Pandas', 'NumPy', 'Scikit-learn' ,'LLM', 'PySpark' ],
//   },
//   {
//     title: 'Tools',
//     icon: BriefcaseBusiness,
//     items: ['Git', 'GitHub', 'Docker' ,'CI/CD', 'VS Code', 'Postman', 'jupyter Notebook', 'Linux', 'AWS-EC2', 'AWS-S3', ],
//   },
// ];

// const projects = [
//   {
//     name: 'Blood Donation Platform',
//     summary: 'A responsive donor management platform with secure authentication and admin control for blood requests and donor discovery.',
//     tech: ['Next.js', 'MongoDB', 'JWT Authentication', 'Responsive UI', 'Donor Search', 'Admin CRUD'],
//     accent: 'from-pink-500/40 via-rose-500/15 to-cyan-500/20',
//     previewClass: 'border-pink-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.45),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))]',
//     github: 'https://github.com',
//     demo: '#contact',
//   },
//   {
//     name: 'Secure Notes Application',
//     summary: 'A private note-taking solution focused on authentication, encrypted-safe storage, and a clean admin dashboard for user-specific notes.',
//     tech: ['Next.js', 'MongoDB', 'JWT', 'bcrypt', 'Authentication', 'User-specific notes', 'Admin dashboard'],
//     accent: 'from-violet-500/40 via-indigo-500/15 to-sky-500/20',
//     previewClass: 'border-violet-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.45),_transparent_35%),linear-gradient(135deg,rgba(17,24,39,0.96),rgba(49,46,129,0.9))]',
//     github: 'https://github.com',
//     demo: '#contact',
//   },
//   {
//     name: 'Real Estate Application',
//     summary: 'A property marketplace experience for browsing listings, managing properties, and exploring modern real-estate workflows.',
//     tech: ['Next.js', 'Firebase', 'MongoDB', 'Authentication', 'Property listing'],
//     accent: 'from-emerald-500/40 via-cyan-500/15 to-blue-500/20',
//     previewClass: 'border-emerald-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.45),_transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(8,47,73,0.9))]',
//     github: 'https://github.com',
//     demo: '#contact',
//   },
// ];

// const education = [
//   {
//     period: '2023 - 2027',
//     title: 'B.Tech — Computer Science & Engineering (AI/ML)',
//     place: 'Gandhi Engineering College',
//     description: 'Focused on software engineering, machine learning, data-driven applications, and modern web development fundamentals.',
//   },
//   {
//     period: '2021 - 2023',
//     title: 'Development Experience & Independent Learning',
//     place: 'Self-driven engineering projects',
//     description: 'Built full-stack apps, explored AI workflows, and developed practical problem-solving skills through hands-on builds and DSA practice.',
//   },
// ];

// const dsaTopics = ['Arrays', 'Strings', 'Hashing', 'Two Pointers', 'Sliding Window', 'Matrix', 'Binary Search', 'Stack', 'Linked List'];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0 },
// };

// function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
//   return (
//     <div className="mb-12 max-w-2xl">
//       <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
//       <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
//       <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
//     </div>
//   );
// }

// function ProjectCard({ project }: { project: (typeof projects)[number] }) {
//   const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 24, mass: 0.45 });
//   const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 24, mass: 0.45 });

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//     const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
//     rotateX.set(y * -7);
//     rotateY.set(x * 10);
//   };

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         rotateX.set(0);
//         rotateY.set(0);
//       }}
//       className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1200,
//       }}
//     >
//       <div className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 p-4 ${project.previewClass}`}>
//         <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
//           <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Project</span>
//           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
//         </div>

//         <div className="space-y-3">
//           <div className="h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
//           <div className="grid grid-cols-3 gap-3">
//             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
//             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
//             <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
//           </div>
//           <div className="h-10 w-3/5 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
//         </div>
//       </div>

//       <div className="relative mt-6">
//         <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
//         <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

//         <div className="mt-5 flex flex-wrap gap-2">
//           {project.tech.map((tech) => (
//             <span key={tech} className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-2.5 py-1 text-[11px] font-medium text-cyan-100">
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="mt-7 flex items-center gap-3">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
//           >
//             GitHub
//           </a>
//           <a
//             href={project.demo}
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
//           >
//             Live Demo
//             <ArrowRight className="h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function Portfolio() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const shouldReduceMotion = useReducedMotion();
//   const shellRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (shouldReduceMotion) return;

//     const shell = shellRef.current;
//     if (!shell) return;

//     let frame = 0;
//     const updatePointer = (event: PointerEvent) => {
//       cancelAnimationFrame(frame);
//       frame = requestAnimationFrame(() => {
//         shell.style.setProperty('--pointer-x', `${event.clientX}px`);
//         shell.style.setProperty('--pointer-y', `${event.clientY}px`);
//       });
//     };

//     window.addEventListener('pointermove', updatePointer, { passive: true });
//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('pointermove', updatePointer);
//     };
//   }, [shouldReduceMotion]);

//   return (
//     <div ref={shellRef} className="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_30%)]" />
//       <div className="pointer-events-none fixed inset-0 z-0 opacity-100 [background:radial-gradient(520px_circle_at_var(--pointer-x)_var(--pointer-y),rgba(34,211,238,0.1),transparent_68%)] motion-reduce:hidden" />
//       <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

//       <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//           <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.08em] text-white uppercase">
//             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950">
//               P
//             </span>
//             Papu
//           </a>

//           <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
//             {navItems.map((item) => (
//               <a key={item.href} href={item.href} className="transition hover:text-white">
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           <div className="hidden md:block">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
//             >
//               Let&apos;s Talk
//               <ArrowRight className="h-4 w-4" />
//             </a>
//           </div>

//           <button
//             type="button"
//             aria-label="Toggle menu"
//             onClick={() => setMenuOpen((open) => !open)}
//             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
//           >
//             {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </nav>

//         {menuOpen && (
//           <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
//             <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-200">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       <main id="home" className="relative z-10">
//         <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
//           <motion.div
//             initial={shouldReduceMotion ? false : 'hidden'}
//             animate={shouldReduceMotion ? undefined : 'visible'}
//             variants={fadeUp}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
//           >
//             <div>
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                 Available for opportunities
//               </div>

//               <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
//                 Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">Papu Sahoo</span>
//               </h1>

//               <p className="mt-5 text-xl font-medium text-cyan-200 sm:text-2xl">Software Engineer</p>
//               <p className="mt-5 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
//                 I build  scalable web applications and intelligent software solutions using modern technologies.
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href="#projects"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
//                 >
//                   View Projects
//                   <ArrowRight className="h-4 w-4" />
//                 </a>
//                 <a
//                   href="/Papu-Sahoo-Resume.pdf"
//                   download
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
//                 >
//                   <Download className="h-4 w-4" />
//                   Download Resume
//                 </a>
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
//                 >
//                   <Mail className="h-4 w-4" />
//                   Contact Me
//                 </a>
//               </div>

//               <div className="mt-8 flex items-center gap-4 text-slate-300">
//                 <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
//                   <GitBranch className="h-5 w-5" />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
//                   <Link2 className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, x: 26 }}
//               animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//             >
//               <HeroScene />
//             </motion.div>
//           </motion.div>
//         </section>

//         <motion.section id="about" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
//             <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//               <div className="mb-6 flex items-center gap-3 text-cyan-200">
//                 <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2">
//                   <GraduationCap className="h-5 w-5" />
//                 </div>
//                 <span className="text-sm font-medium uppercase tracking-[0.2em]">About</span>
//               </div>
//               <p className="text-lg leading-8 text-slate-200">
//                 I&apos;m a Computer Science &amp; Engineering student focused on software engineering, AI/ML, and modern web development.
//               </p>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <motion.div key={stat.label} initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
//                   <div className="text-3xl font-semibold text-white">{stat.value}</div>
//                   <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         <motion.section id="skills" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <SectionHeading
//             eyebrow="Skills"
//             title="Full-stack building blocks with AI-driven thinking"
//             description="From modern frontend systems to AI workflows and backend architecture, I enjoy designing performant products that combine product thinking with engineering discipline."
//           />

//           <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {skillGroups.map(({ title, icon: Icon, items }) => (
//               <motion.div key={title} whileHover={shouldReduceMotion ? undefined : { y: -6 }} className="rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.4)] backdrop-blur-xl">
//                 <div className="mb-6 flex items-center gap-3">
//                   <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-200">
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">{title}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2.5">
//                   {items.map((item) => (
//                     <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-100">
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         <motion.section id="projects" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <SectionHeading
//             eyebrow="Projects"
//             title="Products built with purpose and technical depth"
//             description="I design and ship user-focused applications with clear architecture, measurable value, and a polished product experience."
//           />

//           <div className="grid gap-6 xl:grid-cols-3">
//             {projects.map((project) => (
//               <ProjectCard key={project.name} project={project} />
//             ))}
//           </div>
//         </motion.section>

//         <motion.section id="education" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <SectionHeading
//             eyebrow="Experience & Education"
//             title="Building with engineering fundamentals and practical product experience"
//             description="My journey combines formal learning with project-driven practice across software engineering, AI, and modern web application development."
//           />

//           <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-violet-500/30 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
//             {education.map((item, index) => (
//               <div key={item.title} className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
//                 <div className="ml-10 rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl md:ml-0 md:max-w-md">
//                   <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100">
//                     {item.period}
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//                   <p className="mt-2 text-base font-medium text-cyan-200">{item.place}</p>
//                   <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
//                 </div>
//                 <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 md:left-1/2 md:-translate-x-1/2">
//                   <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.section>

//         <motion.section initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8">
//             <div className="mb-8 flex items-center gap-3 text-cyan-200">
//               <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
//                 <Code2 className="h-5 w-5" />
//               </div>
//               <span className="text-sm font-medium uppercase tracking-[0.2em]">DSA</span>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {dsaTopics.map((topic) => (
//                 <motion.span key={topic} whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }} className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
//                   {topic}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         <motion.section initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8">
//           <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.86))] p-8 text-center shadow-[0_18px_80px_rgba(15,23,42,0.7)]">
//             <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Resume</p>
//             <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Interested in working together?</h2>
//             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//               <a href="/Papu-Sahoo-Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
//                 <Download className="h-4 w-4" />
//                 Download Resume
//               </a>
//               <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
//                 <Mail className="h-4 w-4" />
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section id="contact" initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
//           <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
//             <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-7 backdrop-blur-xl">
//               <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Contact</p>
//               <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s build something meaningful.</h2>
//               <p className="mt-4 text-base leading-7 text-slate-300">
//                 I&apos;m open to software engineering roles, AI-driven product work, and collaborative opportunities where thoughtful engineering can create real impact.
//               </p>
//               <div className="mt-8 space-y-4 text-slate-200">
//                 <a href="mailto:spapu5449@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
//                   <Mail className="h-5 w-5 text-cyan-300" />
//                   spapu5449@gmail.com
//                 </a>
//               </div>
//             </div>

//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 const form = event.currentTarget as HTMLFormElement;
//                 const name = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '';
//                 const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';
//                 const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '';
//                 const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
//                 const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
//                 window.location.href = `mailto:spapu5449@gmail.com?subject=${subject}&body=${body}`;
//               }}
//               className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <label className="block text-sm text-slate-200">
//                   <span className="mb-2 block">Name</span>
//                   <input name="name" type="text" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Your name" />
//                 </label>
//                 <label className="block text-sm text-slate-200">
//                   <span className="mb-2 block">Email</span>
//                   <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="you@example.com" />
//                 </label>
//               </div>

//               <label className="mt-5 block text-sm text-slate-200">
//                 <span className="mb-2 block">Message</span>
//                 <textarea name="message" required rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Tell me about your project or opportunity" />
//               </label>

//               <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
//                 Send Message
//                 <Send className="h-4 w-4" />
//               </button>
//             </form>
//           </div>
//         </motion.section>
//       </main>
//     </div>
//   );
// }



'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';

import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Link2,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import HeroScene from './HeroScene';

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: '2000+',
    label: 'User Records Analyzed',
  },
  {
    value: '6+',
    label: 'Full-Stack Projects',
  },
  {
    value: '4+',
    label: 'AI/ML Projects',
  },
  {
    value: 'DSA',
    label: 'Problem-Solving Foundation',
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    items: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },

  {
    title: 'Software Engineering',
    icon: Layers3,
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Spring Boot',
      'REST APIs',
      'Authentication',
      'JWT',
    ],
  },

  {
    title: 'Data Engineering',
    icon: Database,
    items: [
      'SQL',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'PySpark',
      'Pandas',
      'ETL',
      'AWS S3',
    ],
  },

  {
    title: 'AI / Machine Learning',
    icon: Sparkles,
    items: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'AI Agents',
      'RAG',
      'Scikit-learn',
      'NumPy',
      'Pandas',
    ],
  },

  {
    title: 'Cloud & DevOps',
    icon: Cpu,
    items: [
      'AWS EC2',
      'AWS S3',
      'Docker',
      'CI/CD',
      'Linux',
      'Git',
      'GitHub',
      'Postman',
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    name: 'Blood Donation Platform',

    summary:
      'A scalable donor management platform with secure authentication, database integration, donor discovery, and admin CRUD workflows.',

    details:
      'The platform helps donors find nearby opportunities and helps administrators manage requests from one dashboard. I focused on clear data relationships, protected actions, and a responsive experience that works well on phones.',

    tech: [
      'Next.js',
      'MongoDB',
      'JWT',
      'REST APIs',
      'Authentication',
      'Admin CRUD',
      'Responsive UI',
    ],

    accent:
      'from-pink-500/40 via-rose-500/15 to-cyan-500/20',

    previewClass:
      'border-pink-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.45),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))]',

    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',

    highlight: 'Donor discovery and admin workflows',

    github: 'https://github.com/techaddtion-lang/',

    demo: '#contact',
  },

  {
    name: 'Agentic AI Real-Time Market Intelligence System',

    summary:
      'An agentic AI system that monitors real-time market signals, synthesizes trusted sources, and turns fast-moving data into actionable intelligence.',

    details:
      'Multiple specialized agents collect, validate, and summarize market information before presenting it in an easy-to-scan intelligence view. The workflow combines real-time ingestion, retrieval-augmented generation, and explainable insights for faster decisions.',

    tech: [
      'Next.js',
      'Python',
      'Generative AI',
      'AI Agents',
      'Real-Time Data',
      'RAG',
      'Market Analytics',
    ],

    accent:
      'from-violet-500/40 via-indigo-500/15 to-sky-500/20',

    previewClass:
      'border-violet-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.45),_transparent_35%),linear-gradient(135deg,rgba(17,24,39,0.96),rgba(49,46,129,0.9))]',

    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',

    highlight: 'Real-time signals and AI-powered insights',

    github: 'https://github.com/techaddtion-lang/',

    demo: '#contact',
  },

  {
    name: 'Real Estate Application',

    summary:
      'A property marketplace application for managing listings, storing property data, authentication, and building modern real-estate workflows.',

    details:
      'Users can explore property listings, review important details, and manage property data through a clean marketplace interface. Authentication and database-backed workflows keep listing management organized and reliable.',

    tech: [
      'Next.js',
      'Firebase',
      'MongoDB',
      'Authentication',
      'Property Listings',
      'Database',
    ],

    accent:
      'from-emerald-500/40 via-cyan-500/15 to-blue-500/20',

    previewClass:
      'border-emerald-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.45),_transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(8,47,73,0.9))]',

    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',

    highlight: 'Property listings and data management',

    github: 'https://github.com/techaddtion-lang/',

    demo: '#contact',
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    period: '2023 - 2027',

    title:
      'B.Tech — Computer Science & Engineering (AI/ML)',

    place:
      'Gandhi Engineering College',

    description:
      'Focused on software engineering, machine learning, data-driven applications, problem solving, and modern web development.',
  },

  {
    period: '2021 - 2023',

    title:
      'Development Experience & Independent Learning',

    place:
      'Self-driven engineering projects',

    description:
      'Built full-stack applications, explored AI workflows, worked with databases and data analysis, and developed problem-solving skills through DSA practice.',
  },

  {
    period: 'College Hackathon',

    title:
      'Hackathon Participant',

    place:
      'Gandhi Engineering College',

    description:
      'Collaborated with a team to design and build a practical technology solution under time constraints, strengthening rapid prototyping, teamwork, and problem-solving skills.',
  },

  {
    period: 'NPTEL Course',

    title:
      'Internet of Things and Edge Computing',

    place:
      'IIT Kharagpur',

    description:
      'Studied connected devices, IoT communication, sensor data, edge architecture, and distributed processing through an NPTEL course from IIT Kharagpur.',
  },
];

/* =========================================================
   DSA
========================================================= */

const dsaTopics = [
  'Arrays',
  'Strings',
  'Hashing',
  'Two Pointers',
  'Sliding Window',
  'Matrix',
  'Binary Search',
  'Stack',
  'Linked List',
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 260,
    damping: 24,
    mass: 0.45,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 260,
    damping: 24,
    mass: 0.45,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      ((event.clientY - rect.top) / rect.height) * 2 - 1;

    rotateX.set(y * -7);
    rotateY.set(x * 10);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="group flex h-full min-w-0 flex-col rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
    >
      {/* Project Preview */}

      <div
        className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 p-3 sm:p-4 ${project.previewClass}`}
      >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        width={1200}
        height={675}
        className="h-36 w-full rounded-2xl border border-white/10 object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 sm:h-44"
        loading="lazy"
      />

      <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
            Project
          </span>

          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/35 px-3 py-2.5">
          <p className="text-xs font-medium leading-5 text-cyan-100">
            {project.highlight}
          </p>
        </div>
      </div>

      {/* Project Information */}

      <div className="relative mt-6 flex flex-1 flex-col">
        <h3 className="break-words text-2xl font-semibold leading-tight text-white">
          {project.name}
        </h3>

        <p className="mt-3 break-words text-sm leading-6 text-slate-300">
          {project.summary}
        </p>

        <p className="mt-3 break-words text-sm leading-6 text-slate-400">
          {project.details}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-2.5 py-1 text-[11px] font-medium text-cyan-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
          >
            Live Demo

            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const shellRef =
    useRef<HTMLDivElement>(null);

  /* Mouse glow */

  useEffect(() => {
    if (shouldReduceMotion) return;

    const shell = shellRef.current;

    if (!shell) return;

    let frame = 0;

    const updatePointer = (
      event: PointerEvent
    ) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        shell.style.setProperty(
          '--pointer-x',
          `${event.clientX}px`
        );

        shell.style.setProperty(
          '--pointer-y',
          `${event.clientY}px`
        );
      });
    };

    window.addEventListener(
      'pointermove',
      updatePointer,
      {
        passive: true,
      }
    );

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        'pointermove',
        updatePointer
      );
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={shellRef}
      className="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_30%)]" />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-100 [background:radial-gradient(520px_circle_at_var(--pointer-x)_var(--pointer-y),rgba(34,211,238,0.1),transparent_68%)] motion-reduce:hidden" />

      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <a
            href="#home"
            className="flex items-center gap-3 text-lg font-semibold tracking-[0.08em] text-white uppercase"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950">
              P
            </span>

            Papu
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Talk Button */}

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              Let&apos;s Talk

              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu */}

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() =>
              setMenuOpen((open) => !open)
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main
        id="home"
        className="relative z-10"
      >

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : 'hidden'
            }
            animate={
              shouldReduceMotion
                ? undefined
                : 'visible'
            }
            variants={fadeUp}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                Available for opportunities
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                Building Software.

                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Data. AI.
                </span>
              </h1>

              <p className="mt-6 text-xl font-medium text-cyan-200 sm:text-2xl">
                Software Engineer | AI/ML &amp; Data
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I build scalable software, data-driven
                applications, and intelligent systems
                using modern web, data, cloud, and AI
                technologies.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  View Projects

                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <Mail className="h-4 w-4" />

                  Contact
                </a>
              </div>

              {/* Social */}

              <div className="mt-8 flex items-center gap-4 text-slate-300">

                <a
                  href="https://github.com/techaddtion-lang/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <GitBranch className="h-5 w-5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Link2 className="h-5 w-5" />
                </a>

              </div>
            </div>

            {/* 3D Hero */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.96,
                      x: 26,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }
              }
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <HeroScene />
            </motion.div>

          </motion.div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <motion.section
          id="about"
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <div className="mb-6 flex items-center gap-3 text-cyan-200">

                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <span className="text-sm font-medium uppercase tracking-[0.2em]">
                  About
                </span>

              </div>

              <p className="text-lg leading-8 text-slate-200">
                I&apos;m a Computer Science &amp;
                Engineering student with a focus on
                software engineering, data, and AI/ML.
                I enjoy building scalable applications,
                working with data, and developing
                intelligent systems that solve practical
                problems.
              </p>

            </div>

            {/* Stats */}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {stats.map((stat, index) => (

                <motion.div
                  key={stat.label}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                >

                  <div className="text-3xl font-semibold text-white">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>
          </div>
        </motion.section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <motion.section
          id="skills"
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >

          <SectionHeading
            eyebrow="Skills"
            title="Software, Data & AI"
            description="A broad engineering foundation across software development, data processing, machine learning, cloud technologies, and modern application architecture."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {skillGroups.map(
              ({
                title,
                icon: Icon,
                items,
              }) => (

                <motion.div
                  key={title}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.4)] backdrop-blur-xl"
                >

                  <div className="mb-6 flex items-center gap-3">

                    <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {title}
                    </h3>

                  </div>

                  <div className="flex flex-wrap gap-2.5">

                    {items.map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-100"
                      >
                        {item}
                      </span>

                    ))}

                  </div>
                </motion.div>
              )
            )}

          </div>
        </motion.section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <motion.section
          id="projects"
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >

          <SectionHeading
            eyebrow="Projects"
            title="Engineering across software, data and AI"
            description="Hands-on projects demonstrating full-stack development, databases, authentication, data analysis, and AI/ML workflows."
          />

          <div className="grid gap-6 xl:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}

          </div>
        </motion.section>

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <motion.section
          id="education"
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >

          <SectionHeading
            eyebrow="Experience & Education"
            title="Engineering fundamentals with hands-on experience"
            description="My journey combines formal computer science education with practical projects across software engineering, data, AI, and modern web development."
          />

          <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-violet-500/30 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">

            {education.map(
              (item, index) => (

                <div
                  key={item.title}
                  className={`relative md:flex ${
                    index % 2 === 0
                      ? 'md:justify-start'
                      : 'md:justify-end'
                  }`}
                >

                  <div className="ml-10 rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl md:ml-0 md:max-w-md">

                    <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100">
                      {item.period}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-medium text-cyan-200">
                      {item.place}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                  </div>

                  <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 md:left-1/2 md:-translate-x-1/2">

                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                  </div>

                </div>
              )
            )}

          </div>
        </motion.section>

        {/* =====================================================
            DSA
        ===================================================== */}

        <motion.section
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8">

            <div className="mb-8 flex items-center gap-3 text-cyan-200">

              <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
                <Code2 className="h-5 w-5" />
              </div>

              <span className="text-sm font-medium uppercase tracking-[0.2em]">
                DSA
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              {dsaTopics.map((topic) => (

                <motion.span
                  key={topic}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.04,
                          y: -2,
                        }
                  }
                  className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.12)]"
                >
                  {topic}
                </motion.span>

              ))}

            </div>
          </div>
        </motion.section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <motion.section
          id="contact"
          initial={
            shouldReduceMotion
              ? false
              : 'hidden'
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : 'visible'
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Contact Information */}

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-7 backdrop-blur-xl">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Let&apos;s connect.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                I&apos;m open to opportunities across software
                engineering, data engineering, AI/ML, and
                data-driven product development.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=spapu5449%40gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <Mail className="h-5 w-5 text-cyan-300" />

                  spapu5449@gmail.com
                </a>

              </div>
            </div>

            {/* Contact Form */}

            <form
              onSubmit={(event) => {
                event.preventDefault();

                const form =
                  event.currentTarget as HTMLFormElement;

                const name =
                  (
                    form.elements.namedItem(
                      'name'
                    ) as HTMLInputElement
                  )?.value ?? '';

                const email =
                  (
                    form.elements.namedItem(
                      'email'
                    ) as HTMLInputElement
                  )?.value ?? '';

                const message =
                  (
                    form.elements.namedItem(
                      'message'
                    ) as HTMLTextAreaElement
                  )?.value ?? '';

                const subject =
                  encodeURIComponent(
                    `Portfolio inquiry from ${name}`
                  );

                const body =
                  encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  );

                const gmailComposeUrl =
                  `https://mail.google.com/mail/?view=cm&fs=1&to=spapu5449%40gmail.com&su=${subject}&body=${body}`;

                window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
              }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <label className="block text-sm text-slate-200">

                  <span className="mb-2 block">
                    Name
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
                    placeholder="Your name"
                  />

                </label>

                <label className="block text-sm text-slate-200">

                  <span className="mb-2 block">
                    Email
                  </span>

                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
                    placeholder="you@example.com"
                  />

                </label>

              </div>

              <label className="mt-5 block text-sm text-slate-200">

                <span className="mb-2 block">
                  Message
                </span>

                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
                  placeholder="Tell me about your project or opportunity"
                />

              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Send Message

                <Send className="h-4 w-4" />
              </button>

            </form>

          </div>
        </motion.section>

      </main>
    </div>
  );
}