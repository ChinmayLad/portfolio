/* ═══════════════════════════════════════════════════════════
   ✏️  YOUR PORTFOLIO CONTENT
   This is the only file you need to edit to update your site.
═══════════════════════════════════════════════════════════ */

export const DATA = {

  /* ── Identity ── */
  name:     "Chinmaya Lad",
  initials: "CL.",
  title:    "Software Development Engineer",
  tagline:  "Distributed systems · Machine learning · Scale",
  status:   "Open to new roles",
  location: "Seattle, WA",

  /* ── Hero ── */
  hero: {
    displayName: ["Chinmaya", "Lad"],  // second line becomes italic + accent
    desc: "Full-stack Software Engineer with 6+ years of experience building scalable, high-performance systems serving millions of users. Proven track record in system design, performance optimization, and driving measurable business impact through data-driven solutions. Strong technical leader with experience mentoring engineers, improving team processes, and delivering complex projects end-to-end. Expertise in distributed systems, cloud infrastructure, and modern web technologies.",
    links: [
      { label: "View Resume",  href: "/portfolio/chinmaya_lad_resume.pdf",  primary: true  },
      { label: "GitHub",       href: "https://github.com/ChinmayLad",       primary: false },
      { label: "LinkedIn",     href: "https://linkedin.com/in/chinmayalad", primary: false },
    ],
  },

  /* ── About ── */
  about: {
    meta: [
      { label: "Currently",    value: "Open to opportunities" },
      { label: "Based in",     value: "Seattle, WA" },
      { label: "Education",    value: "M.S. Computer Science · University at Buffalo" },
      { label: "Interests",    tags: ["Distributed Systems", "ML/AI Infrastructure", "System Design", "Robotics"] },
    ],
    bio: [
      "I'm a software engineer with a focus on large-scale distributed systems and machine learning infrastructure. Most recently, I led pricing infrastructure work at AWS — scaling across 7 global partitions, cutting artifact generation latency by 64%, and shipping IPv6 dual-stack architecture.",
      "My background spans both industry and research. At UB I worked on semi-supervised learning, reaching 94.2% F1 on a benchmark that stumped several prior approaches. Earlier, at e-Yantra, I built robotics programming tools for engineering students across India.",
      "I care about systems that are both fast and correct — and about understanding problems deeply before touching a keyboard.",
    ],
  },

  /* ── Experience ──
     To add a job: copy one block { ... } and fill it in.
  ─────────────────────────────────────────────────────── */
  experience: [
    {
      role:      "Software Development Engineer II",
      company:   "Amazon Web Services",
      dates:     "Apr 2022 — Present",
      location:  "Seattle, WA",
      desc:      "Pricing infrastructure team — global scale, high availability, and correctness at the intersection of AWS's commercial core.",
      highlights: [
        "Scaled pricing artifact generation across 7 AWS partitions (commercial, govcloud, China) with zero-downtime rollout",
        "Reduced pricing artifact generation time by 64% through pipeline parallelisation",
        "Cut e-invoicing onboarding customizations by 50% with generic SAP ARIBA and COUPA templates, eliminating per-customer manual work",
        "Designed and shipped IPv6 dual-stack architecture for all pricing services",
      ],
      tech: ["Java", "NodeJS", "Lambda", "DynamoDB", "S3", "CloudFormation", "Step Functions", "IPv6", "React"],
    },
    {
      role:      "Software Development Engineer I",
      company:   "Amazon Web Services",
      dates:     "Apr 2021 — Mar 2022",
      location:  "Seattle, WA",
      desc:      "Initial SDE role on the pricing team before promotion to SDE II.",
      highlights: [
        "Built data pipeline to ingest and validate pricing metadata from 40+ service teams",
        "Automated pricing region onboarding with custom tooling, cutting launch time 80% from 5 weeks to 1 week",
        "Launched AWS pricing for China market — shipped 15+ pages and calculators to a new partition, establishing compliance patterns adopted by future launches",
      ],
      tech: ["NodeJS", "Python", "Ruby", "S3", "Lambda"],
    },
    {
      role:      "Graduate Research Assistant",
      company:   "University at Buffalo",
      dates:     "Jun 2019 — Dec 2019",
      location:  "Buffalo, NY",
      desc:      "Semi-supervised learning research focused on low-label-count scenarios.",
      highlights: [
        "Developed semi-supervised segmentation model using adversarial loss for medical imaging, achieving 94.2% F1 on mouse kidney dataset",,
      ],
      tech: ["Python", "PyTorch", "scikit-learn"],
    },
    {
      role:      "Software Developer",
      company:   "Mirraw Online Services",
      dates:     "Nov 2016 — Jun 2018",
      location:  "Mumbai, India",
      desc:      "Full-stack engineering on a high-traffic ethnic fashion e-commerce marketplace serving customers across India and globally.",
      highlights: [
        "Resolved critical memory leaks through systematic debugging, lifting application availability from 92% to 99.6%",
        "Cut Android rendering time by 36% using GPU Profiler to eliminate overdraw and view hierarchy bottlenecks",
        "Built API-driven modular home page with configurable widgets, reducing marketing dependency on engineering and improving code reuse by 40%",
      ],
      tech: ["Android", "Java", "GPU Profiler", "REST APIs", "JavaScript"],
    },
    {
      role:      "Developer Intern",
      company:   "e-Yantra, IIT Bombay",
      dates:     "May 2015 - July 2015",
      location:  "Mumbai, India",
      desc:      "Developed educational programming tools for the national e-Yantra robotics competition.",
      highlights: [
        "Built web-based programming tutor to teach coding fundamentals through visual block-based interface",
        "Implemented server-side compiler for translating visual programs and run them on educational robots",
      ],
      tech: ["C", "PHP", "Blockly", "Laravel"],
    },
  ],

  /* ── Projects ──
     To add a project: copy one block { ... } and fill it in.
     Set a link to null to hide it.
  ─────────────────────────────────────────────────────── */
  projects: [
    {
      title: "Neural Style Transfer",
      desc:  "Multi-style transfer network using Conditional Instance Normalization, trained on 80K COCO images across 6 artistic styles. Runs fast enough to stylize video in real-time.",
      tech:  ["PyTorch", "Python", "VGG", "OpenCV", "Jupyter"],
      links: { 
        github: "https://github.com/ChinmayLad/neural-style-transfer",
        blog: "https://medium.com/analytics-vidhya/understanding-neural-style-transfer-3061cd92648",
      },
    },
    {
      title: "Image Generation using Self-Attention GAN",
      desc:  "PyTorch implementation of Self-Attention GAN and DCGAN, using self-attention layers to model long-range dependencies in image generation.",
      tech:  ["PyTorch", "Python", "GANs", "Jupyter"],
      links: { github: "https://github.com/ChinmayLad/self_attention_gan" },
    },
    {
      title: "Shamir's Secret Sharing",
      desc:  "Python implementation of Shamir's Secret Sharing — splits a private key into n shares using polynomial interpolation, requiring a threshold of k shares to reconstruct it.",
      tech:  ["Python", "Cryptography", "Number Theory"],
      links: { github: "https://github.com/ChinmayLad/shamirs-secret-sharing" },
    },
    {
      title: "Flappy Bird NEAT",
      desc:  "AI agent trained to play Flappy Bird using NeuroEvolution of Augmenting Topologies (NEAT) — evolves neural network topology and weights through gameplay generations.",
      tech:  ["Python", "NEAT", "pygame"],
      links: { github: "https://github.com/ChinmayLad/flappy-bird" },
    },
  ],

  /* ── Skills ── */
  skills: [
    { category: "Languages",          items: ["Java", "Python", "JavaScript", "C", "SQL"] },
    { category: "ML / AI",            items: ["PyTorch", "TensorFlow","scikit-learn", "Transformers", "Neural Networks", "Convolutional Neural Networks", "NEAT"] },
    { category: "Distributed Systems",items: ["AWS Lambda", "Fargate", "DynamoDB", "S3", "Step Functions", "Redis", "Kafka"] },
    { category: "Infrastructure",     items: ["CloudFormation / CDK", "IPv6 Networking"] },
    { category: "Practices",          items: ["System Design", "API Versioning", "Observability", "CI / CD", " Modularization"] },
  ],

  /* ── Writing / Posts ──
     Leave empty [] to show the placeholder.
     To add a post: { date: "Jan 2025", title: "Post title", tag: "Systems", href: "/posts/slug.html" }
  ─────────────────────────────────────────────────────── */
  posts: [
    {
      date:  "Dec 2019",
      title: "Understanding Neural Style Transfer",
      tag:   "ML",
      href:  "https://medium.com/analytics-vidhya/understanding-neural-style-transfer-3061cd92648",
    },
    // { date: "Feb 2025", title: "How I cut our pricing pipeline latency by 64%", tag: "Systems", href: "#" },
    // { date: "Jan 2025", title: "BOTE calculations that actually drive architecture", tag: "Design",  href: "#" },
  ],

  /* ── Contact ── */
  contact: {
    heading: ["Let's", "build", "something."],  // middle word becomes italic accent
    sub:     "I'm actively looking for roles in ML engineering and distributed systems. If you're working on something interesting — or just want to talk shop — reach out.",
    cta:     { label: "Send an Email", href: "mailto:ladchinmay@gmail.com" },
    links: [
      { label: "Email",    value: "ladchinmay@gmail.com",                href: "mailto:ladchinmay@gmail.com",               icon: "mail"     },
      { label: "LinkedIn", value: "linkedin.com/in/chinmayalad",   href: "https://linkedin.com/in/chinmayalad", icon: "linkedin" },
      { label: "GitHub",   value: "github.com/ChinmayLad",         href: "https://github.com/ChinmayLad",       icon: "github"   },
    ],
  },

  footer: {
    stack: "React · Vite · GitHub Pages",
  },
}
