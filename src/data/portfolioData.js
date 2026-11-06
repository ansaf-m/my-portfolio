export const PERSONAL_INFO = {
  name: "Ansaf M",
  role: "Software Engineer",
  tagline: "Software Engineer specializing in scalable distributed backends, robust RESTful APIs, and responsive React web applications.",
  bio: "Software Engineer proficient in Java, Spring Boot, React.js, and Node.js. Experienced in designing scalable distributed systems, secure RESTful microservices, JWT authentication, and relational database architectures. Passionate about clean code, SOLID design principles, and building high-performance software systems.",
  location: "Kanniyakumari, Tamil Nadu, India · Open to Remote & Relocation",
  phone: "+91 9042108322",
  whatsapp: "https://wa.me/919042108322",
  email: "ansafmuadh@gmail.com",
  github: "https://github.com/ansaf-m",
  linkedin: "https://www.linkedin.com/in/ansaf-m-70a612339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  availability: "Available for full-time Software Engineer opportunities",
  experienceYears: "B.E. Computer Science (2022 - 2026)",
  avatarUrl: "/images/ansaf-hero.png",
  avatarOriginal: "/images/ansaf-hero.png",
  resumePdfUrl: "/Ansaf_Resume.pdf",
  stats: [
    { label: "REST APIs Engineered", value: "25+" },
    { label: "Full-Stack Projects Built", value: "8+" },
    { label: "Query Speedup Gain", value: "3.5x" },
    { label: "Production Certifications", value: "Verified" }
  ]
};

export const ABOUT = {
  label: "Software Engineer · Systems & Architecture",
  statementStrong: "Engineering scalable distributed backends,",
  statementMuted: "crafting modern fluid web experiences.",
  description: "I'm a passionate Software Engineer focused on building robust, high-throughput distributed architectures, scalable RESTful microservices, and modern responsive web applications. Proficient in Java, Spring Boot, React.js, and high-concurrency database systems, I transform complex engineering problems into clean, battle-tested software following industry best practices.",
  tags: [
    "Full Stack Development",
    "Java & Spring Boot 3",
    "React 19 & Custom Hooks",
    "REST APIs & Microservices",
    "MySQL & ACID Systems"
  ]
};

export const TYPING_ROLES = [
  "Software Engineer",
  "Full Stack Systems Engineer",
  "Java & Spring Boot Specialist",
  "React.js & Frontend Architect",
  "Database & API Architect"
];

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills", count: 22 },
  { id: "frontend", label: "Frontend Development", count: 6 },
  { id: "backend", label: "Backend Development", count: 6 },
  { id: "database", label: "Database", count: 3 },
  { id: "tools", label: "Tools & Platforms", count: 6 },
  { id: "ecommerce", label: "E-commerce", count: 1 }
];

export const SKILL_GROUPS = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Modern, Responsive & Fluid User Interfaces",
    skills: [
      { name: "HTML5", category: "frontend", icon: "html5", description: "Semantic markup, modern web accessibility & standards" },
      { name: "CSS3", category: "frontend", icon: "css3", description: "Advanced layouts, animations, Flexbox & Grid systems" },
      { name: "JavaScript", category: "frontend", icon: "javascript", description: "ES6+, async programming, closures & DOM mechanics" },
      { name: "React.js", category: "frontend", icon: "react", description: "Component architecture, Custom Hooks & state management" },
      { name: "Vite", category: "frontend", icon: "vite", description: "Lightning-fast frontend build tooling & Hot Module Reload" },
      { name: "Bootstrap", category: "frontend", icon: "bootstrap", description: "Responsive grid systems & rapid utility styling" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "High-Throughput Microservices & Scalable Systems",
    skills: [
      { name: "Java", category: "backend", icon: "java", description: "Core OOP, Collections, Multithreading & Stream API" },
      { name: "Spring Boot", category: "backend", icon: "springboot", description: "Enterprise REST microservices, JPA & dependency injection" },
      { name: "Express.js", category: "backend", icon: "express", description: "Fast, unopinionated Node.js REST server framework" },
      { name: "Node.js", category: "backend", icon: "node", description: "Asynchronous event-driven JavaScript server runtime" },
      { name: "REST APIs", category: "backend", icon: "restapis", description: "Scalable endpoint design, status codes & contract testing" },
      { name: "Spring Security", category: "backend", icon: "springsecurity", description: "Stateless JWT authentication & role-based access control" }
    ]
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Relational Schemas, Document Stores & ACID Guarantees",
    skills: [
      { name: "MySQL", category: "database", icon: "mysql", description: "Relational design, foreign keys, indexing & complex JOINs" },
      { name: "MongoDB", category: "database", icon: "mongodb", description: "NoSQL document modeling, JSON collections & flexible schemas" },
      { name: "PostgreSQL", category: "database", icon: "postgresql", description: "Enterprise relational database with ACID compliance" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Containerization, Version Control & Developer Workflow",
    skills: [
      { name: "Docker", category: "tools", icon: "docker", description: "Application containerization, reproducible builds & isolation" },
      { name: "Git", category: "tools", icon: "git", description: "Version control, branching strategies & clean commit history" },
      { name: "GitHub", category: "tools", icon: "github", description: "Collaborative workflows, code reviews, PRs & repositories" },
      { name: "Postman", category: "tools", icon: "postman", description: "Automated API endpoint testing, contracts & mock servers" },
      { name: "Vercel", category: "tools", icon: "vercel", description: "Frontend cloud deployment, edge networks & global hosting" },
      { name: "VS Code", category: "tools", icon: "vscode", description: "Full-stack code editing, extensions, linting & debugging" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Commercial Storefronts & Online Retail Solutions",
    skills: [
      { name: "Shopify", category: "ecommerce", icon: "shopify", description: "Digital commerce storefront setup, themes & platform workflows" }
    ]
  }
];

export const SKILLS = SKILL_GROUPS.flatMap(group =>
  group.skills.map(skill => ({
    ...skill,
    groupTitle: group.title
  }))
);

export const PROJECTS = [
  {
    id: "clothing-ecommerce",
    number: "01",
    title: "E-Commerce Clothing Management Platform",
    subtitle: "Enterprise Full-Stack Retail & Inventory Engine",
    category: "SYSTEMS & FULL-STACK",
    badge: "Featured Full-Stack System",
    image: "/images/project-clothing-store.png",
    images: [
      {
        url: "/images/project-clothing-store.png",
        title: "Hype Clothing — Storefront & Hero Showcase",
        label: "Storefront"
      },
      {
        url: "/images/project-clothing-admin.png",
        title: "Hype Clothing — Admin Dashboard & Inventory Overview",
        label: "Admin Dashboard"
      }
    ],
    description: "A comprehensive full-stack clothing catalog and inventory management platform built with React.js, Java Spring Boot, Spring Security, JWT, and MySQL. Features role-based access control, an intuitive admin dashboard, product category filtering, size variations, and real-time inventory management.",
    technologies: ["React.js", "Java 21", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate", "Axios"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com/clothing",
    thumbnails: [
      { tag: "AUTH & SECURITY", title: "JWT & Spring Security Filter", detail: "Stateless RBAC with Token Expiry" },
      { tag: "DATABASE", title: "Normalized MySQL & JPA", detail: "Stock Locking & ACID Integrity" }
    ],
    caseStudy: {
      problem: "Retail clothing management requires fine-grained inventory tracking across sizes, secure role-based admin controls, and fast product filtering without UI lag or database locking.",
      architecture: "Separation of concerns using Spring Boot REST controllers, service layers, and Spring Data JPA repositories communicating with MySQL. React frontend manages client state and communicates via JWT-authenticated Axios calls.",
      solution: "Engineered JWT authentication with Spring Security filter chains, relational tables with foreign keys connecting apparel categories, sizes, and stock counts, plus an administrative dashboard for inventory and image uploads.",
      metrics: [
        { label: "Role Security", value: "Admin & User RBAC" },
        { label: "API Endpoints", value: "18+ REST Services" },
        { label: "Database", value: "Normalized MySQL" }
      ],
      keyFeatures: [
        "JWT-based stateless authentication and protected client routes",
        "Role-based API authorization (Admin vs Customer privileges)",
        "RESTful APIs for products, categories, inventory, sizes, and images using Spring Data JPA",
        "Admin dashboard for product catalog management, stock alerts, and customer orders"
      ]
    }
  },
  {
    id: "movie-discovery",
    number: "02",
    title: "Movie Search & Favorites Management System",
    subtitle: "Interactive Cinema Discovery & Bookmarking Portal",
    category: "WEB DEVELOPMENT",
    badge: "React & REST API Application",
    image: "/images/project-movies-home.jpg",
    images: [
      {
        url: "/images/project-movies-home.jpg",
        title: "Movie App — Discovery Feed & Trending Cinema Titles",
        label: "Discovery Feed"
      },
      {
        url: "/images/project-movies-search.jpg",
        title: "Movie App — Real-Time Debounced Search Engine (e.g. Avengers)",
        label: "Search Engine"
      }
    ],
    description: "A dynamic, responsive cinema discovery web platform built with React.js and the TMDB REST API. Integrates real-time movie search, interactive genre filters, detailed movie synopsis views, and a persistent favorites bookmarking system.",
    technologies: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "TMDB REST API", "Axios"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com/movies",
    thumbnails: [
      { tag: "REST INTEGRATION", title: "TMDB API Query Engine", detail: "< 150ms Debounced Real-Time Search" },
      { tag: "CLIENT STATE", title: "Favorites Drawer System", detail: "Persistent Bookmarking & Filters" }
    ],
    caseStudy: {
      problem: "Users need an intuitive, latency-free platform to discover trending films, search through vast catalogs, and save personal favorites across browsing sessions without unnecessary page reloads.",
      architecture: "Modular React component architecture powered by reusable UI elements, debounced search query hooks, and asynchronous REST integration with TMDB API endpoints.",
      solution: "Engineered responsive movie cards with hover synopsis overlays, dynamic genre filter pills, client-side favorites persistence, and mobile-friendly fluid CSS layouts.",
      metrics: [
        { label: "Catalog Data", value: "Real-Time TMDB" },
        { label: "Search Latency", value: "< 150ms Debounced" },
        { label: "Layout", value: "100% Responsive" }
      ],
      keyFeatures: [
        "Real-time movie search and category discovery utilizing TMDB REST API",
        "Reusable, modular React components with dynamic search and filtering",
        "Interactive Favorites Drawer allowing users to save and access selected movies",
        "Clean, responsive, user-friendly interface optimized for mobile and desktop screens"
      ]
    }
  },
  {
    id: "sayfstore-ecommerce",
    number: "03",
    title: "SAYF STORE — 3D E-Commerce Platform",
    subtitle: "Modern Beard Care Brand & Interactive 3D Product Experience",
    category: "3D WEB & COMMERCIAL",
    badge: "Live Production · sayfstore.in",
    image: "/images/project-sayf-3d.jpg",
    images: [
      {
        url: "/images/project-sayf-3d.jpg",
        title: "SAYF Store — Interactive 3D Rotating Product Bottle & Feature Callouts",
        label: "3D Bottle Showcase"
      },
      {
        url: "/images/project-sayf-product.jpg",
        title: "SAYF Store — Product Detail, Quantity Selection & Direct Cart Ordering",
        label: "Product & Cart"
      }
    ],
    description: "Developed a modern e-commerce platform for SAYF Store, a beard oil product brand, featuring an interactive 3D rotating product animation, responsive product interface, and dynamic shopping cart. Integrated direct order placement that sends selected products and cart details to the store owner's contact number. Configured a custom GoDaddy domain and deployed the website on Vercel.",
    technologies: ["React.js", "Three.js", "JavaScript ES6+", "Modern CSS3", "Vercel", "GoDaddy DNS"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://sayfstore.in",
    thumbnails: [
      { tag: "3D VISUALIZATION", title: "Three.js Spinning Bottle", detail: "Interactive 3D Product Presentation" },
      { tag: "COMMERCE WORKFLOW", title: "Direct Contact Order Routing", detail: "Dynamic Cart Payload to Owner Number" }
    ],
    caseStudy: {
      problem: "A direct-to-consumer beard oil brand needed an engaging, modern digital storefront that stands out through immersive 3D product visuals and streamlines conversion without the friction of complex multi-step checkouts.",
      architecture: "React component architecture utilizing Three.js for client-side GPU-rendered 3D bottle rotation, custom state hooks for shopping cart management, and URL encoding for direct order message dispatch to the owner's contact channel.",
      solution: "Designed and developed the complete website from scratch, crafted the 3D rotating product presentation with feature callouts, built dynamic cart management with order redirection to the owner's WhatsApp, configured the custom domain via GoDaddy, and deployed the production site on Vercel.",
      metrics: [
        { label: "Live Domain", value: "sayfstore.in" },
        { label: "3D Engine", value: "Interactive Three.js" },
        { label: "Order Routing", value: "Direct WhatsApp Flow" }
      ],
      keyFeatures: [
        "Interactive 3D spinning beard oil bottle animation showcasing product benefits and ingredients",
        "Modern, responsive e-commerce interface optimized for mobile and desktop shoppers",
        "Dynamic shopping cart with quantity selection (1, 2, or 3 bottles) and bundle pricing",
        "Direct order placement dispatching selected items and cart summaries to the owner's number",
        "Custom DNS configuration with GoDaddy and automated CI/CD deployment on Vercel"
      ]
    }
  },
  {
    id: "smart-expense-classifier",
    number: "04",
    title: "SMART EXPENSE CLASSIFIER — AI-Powered Expense Tracker",
    subtitle: "Machine Learning Expense Categorization & Budget Analytics",
    category: "AI & FINTECH APPLICATION",
    badge: "AI-Powered Personal Finance",
    image: "/images/project-expense-dashboard.png",
    images: [
      {
        url: "/images/project-expense-dashboard.png",
        title: "Smart Expense Classifier — Monthly Budget Dashboard & Spending Progress",
        label: "Budget Dashboard"
      },
      {
        url: "/images/project-expense-list.png",
        title: "Smart Expense Classifier — Expense List, Categorization & Transaction Actions",
        label: "Expense List"
      }
    ],
    description: "An intelligent expense management application that simplifies personal finance tracking through machine learning-based transaction categorization. Features include expense management, automated classification, interactive financial dashboards, spending analytics with pie chart breakdown, and transaction history to help users better understand and manage their spending habits.",
    technologies: ["React.js", "Python / ML", "JavaScript ES6+", "Chart.js", "REST APIs", "Modern CSS3"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com/expense-tracker",
    thumbnails: [
      { tag: "BUDGET CONTROL", title: "Monthly Budget & Live Bar", detail: "Real-time limit tracking with visual progress indicator" },
      { tag: "SPENDING ANALYTICS", title: "Interactive Pie Chart Analytics", detail: "Automated ML categorization & expense breakdown" }
    ],
    caseStudy: {
      problem: "Personal finance tracking frequently suffers from tedious manual data entry and lack of visual clarity, leading users to abandon tracking and exceed monthly budget thresholds without real-time feedback.",
      architecture: "React dashboard frontend paired with REST API microservices, machine learning classification model for automated expense categorization, and Chart.js pie chart rendering for category breakdown.",
      solution: "Engineered an intuitive personal finance platform where users set monthly budgets, add expenses with automatic ML category classification, track budget consumption in real-time with visual indicators, and analyze spending patterns through dynamic pie charts.",
      metrics: [
        { label: "Categorization", value: "Automated ML" },
        { label: "Analytics", value: "Pie Chart Visuals" },
        { label: "Budgeting", value: "Real-Time Tracking" }
      ],
      keyFeatures: [
        "Monthly budget configuration with live progress bar tracking budget utilization vs total limit",
        "Machine learning-driven automatic transaction categorization for seamless expense logging",
        "Interactive financial dashboard with dynamic pie chart spending analytics across categories",
        "Comprehensive expense history table with inline edit, delete, and date filtering capabilities",
        "Responsive, lightweight user interface optimized for fast daily transaction tracking"
      ]
    }
  },
  {
    id: "interactive-digital-engine",
    number: "05",
    title: "Interactive 3D Portfolio & Digital Systems Showcase",
    subtitle: "High-Performance Three.js & Multi-Theme Architecture",
    category: "DIGITAL EXPERIENCES",
    badge: "Creative Engineering & 3D Web",
    image: "/images/project-interactive-portfolio.jpg",
    images: [
      {
        url: "/images/project-interactive-portfolio.jpg",
        title: "Ansaf's Space — High-Performance Editorial Hero & Interactive Multi-Theme Experience",
        label: "Portfolio Showcase"
      }
    ],
    description: "A high-performance modern developer portfolio showcasing 3D particle physics, dynamic theme-reactive volumetric lighting, and synchronized scroll card stacking interactions crafted with React, Three.js, and modern CSS architecture.",
    technologies: ["React", "Three.js", "React Three Fiber", "Modern CSS", "Vite", "Canvas API"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://ansafdev.com",
    thumbnails: [
      { tag: "3D PARTICLE SYSTEM", title: "Shader-Driven Particle Orb", detail: "NormalBlending & Latitudinal Math" },
      { tag: "DESIGN SYSTEMS", title: "3 Distinct Visual Themes", detail: "Minimalism, Surrealism & Glassmorphism" }
    ],
    caseStudy: {
      problem: "Creating a standout engineering portfolio that highlights both deep distributed backend expertise and bleeding-edge creative frontend animation capabilities without compromising performance.",
      architecture: "React with Vite, GPU-accelerated Three.js canvas shaders, and synchronized CSS scroll stacking layers with zero runtime overhead.",
      solution: "Built custom particle mathematics, dynamic theme color propagation via CSS custom properties, and seamless sticky stacking card decks matching top-tier design references.",
      metrics: [
        { label: "Framerate", value: "Solid 60 FPS" },
        { label: "Architecture", value: "React + Three.js" },
        { label: "Theme Modes", value: "3 Distinct Themes" }
      ],
      keyFeatures: [
        "3D spherical particle orb that dynamically disperses on scroll",
        "Cinematic diagonal volumetric spotlight adapting to active theme colors",
        "Physical stacking card deck with progressive sticky overlap",
        "Three distinct visual design identities: Editorial Minimalism, Surrealism, and Glassmorphism",
        "Full keyboard accessibility and native browser back navigation support"
      ]
    }
  }
];

export const TIMELINE = [
  {
    type: "experience",
    period: "Internship Experience",
    role: "Full Stack Developer Intern",
    organization: "AK Infopark",
    location: "On-site / Hybrid",
    description: "Gained in-depth hands-on experience in front-end development and active exposure to backend technologies. Worked on real-world web projects, contributing to design, development, and implementation of high-performance, user-friendly interfaces.",
    skills: ["React.js", "JavaScript", "HTML/CSS", "REST APIs", "Git", "UI/UX"]
  },
  {
    type: "certification",
    period: "Professional Credential",
    role: "Java Full Stack Developer Certification",
    organization: "Telusko",
    location: "Verified Certification",
    description: "Completed an extensive Java Full Stack Developer certification program covering Core Java, Spring Boot, MySQL, Postman, Docker, and REST API development. Gained project-based experience building working full-stack applications covering the complete software engineering lifecycle.",
    skills: ["Java", "Spring Boot", "MySQL", "Postman", "Docker", "REST API"]
  },
  {
    type: "education",
    period: "2022 – 2026",
    role: "Bachelor of Engineering in Computer Science",
    organization: "Mar Ephraem College of Engineering and Technology",
    location: "Kanniyakumari, India",
    description: "Pursuing Bachelor of Engineering in Computer Science. Core coursework in Data Structures, Database Management Systems (DBMS), Object-Oriented Software Engineering, Computer Networks, and Full-Stack Development.",
    skills: ["Computer Science", "DSA", "DBMS", "Software Engineering", "Java"]
  }
];

export const CODE_SNIPPETS = {
  java: {
    filename: "ClothingCatalogController.java",
    language: "Java (Spring Boot 3 + Spring Security)",
    code: `@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*")
public class ClothingCatalogController {

    private final ProductService productService;

    public ClothingCatalogController(ProductService productService) {
        this.productService = productService;
    }

    // Role-based authorization for administrative product management
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductResponseDTO> createProduct(
            @Valid @RequestBody ProductCreateDTO request) {
        ProductResponseDTO created = productService.saveProductWithInventory(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping("/category/{categoryName}")
    public ResponseEntity<List<ProductResponseDTO>> getProductsByCategory(
            @PathVariable String categoryName,
            @RequestParam(required = false) String size) {
        return ResponseEntity.ok(productService.findFilteredProducts(categoryName, size));
    }
}`
  },
  react: {
    filename: "useMovieDiscovery.jsx",
    language: "React.js (Custom Search Hook)",
    code: `import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useMovieDiscovery = (query, genreId) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = query 
        ? \`/api/movies/search?q=\${encodeURIComponent(query)}\`
        : \`/api/movies/trending?genre=\${genreId || ''}\`;
      const response = await axios.get(endpoint);
      setMovies(response.data.results || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching cinema catalog');
    } finally {
      setLoading(false);
    }
  }, [query, genreId]);

  useEffect(() => {
    const timer = setTimeout(fetchMovies, 300); // 300ms debounce
    return () => clearTimeout(timer);
  }, [fetchMovies]);

  return { movies, loading, error, refetch: fetchMovies };
};`
  },
  sql: {
    filename: "clothing_inventory_schema.sql",
    language: "SQL (MySQL 8 Schema & Indexing)",
    code: `-- Clothing Inventory & Category Schema with Composite Indexing
CREATE TABLE clothing_products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    sku VARCHAR(64) UNIQUE NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Composite index to accelerate filtered catalog queries
    INDEX idx_category_price (category_id, price),
    CONSTRAINT fk_clothing_category 
        FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC;

-- Query Plan Verification:
EXPLAIN ANALYZE
SELECT id, name, price, stock_quantity
FROM clothing_products
WHERE category_id = 4 AND price BETWEEN 25.00 AND 80.00;
-- Executes via B-Tree Index Range Scan with sub-millisecond latency`
  }
};

export const TERMINAL_COMMANDS = {
  help: `Available commands for Ansaf's CLI:
  • about       - Overview of my background & engineering focus
  • skills      - Core tech stack (React.js, Java, Spring Boot, MySQL)
  • projects    - Key projects (E-Commerce Platform, Movie Search, Backend Hub)
  • experience  - Internship at AK Infopark & Telusko Certification
  • education   - B.E. Computer Science at Mar Ephraem College
  • contact     - Phone, Email, Location & Social channels
  • resume      - Open / Download Ansaf's ATS Resume (PDF)
  • sudo hire   - Priority hiring dispatch
  • clear       - Clear terminal output`,

  about: `Ansaf M | Full Stack Developer
Location: Kanniyakumari, Tamil Nadu, India (Open to Remote / Relocation)
Proficient in: React.js, Java, Spring Boot, Node.js, Express.js, MySQL, PostgreSQL, Docker
Focus: Building secure RESTful APIs, modern reactive frontend applications, and clean database architectures.`,

  skills: `Technical Competencies:
  [Frontend]    React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Axios
  [Backend]     Java, Spring Boot, Spring Security, JWT, Node.js, Express.js
  [Databases]   MySQL, PostgreSQL, MongoDB, JPA/Hibernate ORM
  [DevOps]      Docker, Git/GitHub, Postman API Testing`,

  projects: `Featured Projects:
  1. E-Commerce Clothing Management Platform (React.js, Spring Boot, JWT, MySQL)
  2. Movie Search & Favorites Management System (React.js, TMDB API, CSS3)
  3. Enterprise Backend REST API & Microservice Hub (Java 21, Spring Boot, Docker)`,

  experience: `Internship & Training:
  • Full Stack Developer Intern at AK Infopark (Front-end & back-end exposure)
  • Java Full Stack Developer Certification from Telusko (Spring Boot, MySQL, Postman, Docker)`,

  education: `Bachelor of Engineering in Computer Science (2022 – 2026)
Mar Ephraem College of Engineering and Technology`,

  contact: `Direct Contact:
  • Email: ansafmuadh@gmail.com
  • Phone / WhatsApp: +91 9042108322 (https://wa.me/919042108322)
  • GitHub: https://github.com/ansaf-m
  • LinkedIn: https://www.linkedin.com/in/ansaf-m-70a612339
  • Location: Kanniyakumari, India`,

  resume: `Resume: Ansaf_Resume.pdf
Click "Download CV" in the hero or navbar to open and download the official PDF!`,

  "sudo hire": `ACCESS GRANTED!
🎉 Thank you for considering Ansaf M for your team!
Phone: +91 9042108322 | Email: ansafmuadh@gmail.com
Scroll down to the Contact section or click "Contact Me" to connect right away.`
};
