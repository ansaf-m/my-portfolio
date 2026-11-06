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
    image: "/images/project-clothing.jpg",
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
    image: "/images/project-movies.jpg",
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
    id: "cloud-microservices-hub",
    number: "03",
    title: "Enterprise Backend REST API & Microservice Hub",
    subtitle: "Scalable Java Spring Boot & SQL Engine",
    category: "SYSTEMS & ARCHITECTURE",
    badge: "Cloud Backend Architecture",
    image: "/images/project-microservices.jpg",
    description: "An enterprise-grade distributed backend architecture implemented with Java Spring Boot, MySQL, and Docker. Implements clean layered architecture, HikariCP connection pooling, and automated Postman API validation suites.",
    technologies: ["Java 21", "Spring Boot", "MySQL", "PostgreSQL", "Docker", "Postman", "Swagger/OpenAPI"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com/backend-hub",
    thumbnails: [
      { tag: "METRICS & MONITORING", title: "HikariCP & 3.5x Speedup", detail: "Composite Indexing & Connection Pool" },
      { tag: "CONTRACT TESTING", title: "Postman Automated Suites", detail: "End-to-End Validation & Swagger Spec" }
    ],
    caseStudy: {
      problem: "Building backend systems that maintain high throughput, data consistency across multiple relational tables, and clear API contracts for frontend consumers.",
      architecture: "Clean layered architecture with DTOs, custom exception handlers, Spring Data JPA repositories with optimized queries, and Docker Compose orchestration.",
      solution: "Implemented comprehensive REST contracts with Swagger/OpenAPI documentation, indexed MySQL schemas, and end-to-end automated Postman test suites.",
      metrics: [
        { label: "Query Speedup", value: "3.5x with Indexing" },
        { label: "Test Coverage", value: "Postman Collections" },
        { label: "Deployment", value: "Dockerized Containers" }
      ],
      keyFeatures: [
        "Clean DTO patterns separating database models from API payloads",
        "Global exception handling with structured JSON error responses",
        "Optimized MySQL relational schemas with foreign key integrity and B-tree indexes",
        "Postman test collections covering status codes, validation, and auth flows"
      ]
    }
  },
  {
    id: "freelance-client-portals",
    number: "04",
    title: "Freelance Client Applications & Business Portals",
    subtitle: "Tailored Business Portals & Responsive Interfaces",
    category: "WEB DEVELOPMENT",
    badge: "Freelance & Commercial Systems",
    image: "/images/project-clothing.jpg",
    description: "Developed multiple custom web applications and business portals for freelance clients, covering tailored administrative workflows, responsive interfaces, role-based administration panels, and business-specific REST API functionality.",
    technologies: ["React.js", "JavaScript ES6+", "Node.js", "Express.js", "MySQL", "REST APIs", "Modern CSS3"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com/client-portals",
    thumbnails: [
      { tag: "CLIENT ADMIN", title: "Custom Admin Dashboards", detail: "Dynamic Workflows & Data Tables" },
      { tag: "RESPONSIVE UI", title: "Cross-Device Adaptive Layout", detail: "Mobile-First Fluid Interfaces" }
    ],
    caseStudy: {
      problem: "Freelance clients need dependable, custom-built web portals tailored to their unique operational workflows without cumbersome licensing overhead or slow interfaces.",
      architecture: "Modular React client communicating with a lightweight Node.js/Express REST backend and normalized MySQL database with secure token authorization.",
      solution: "Engineered responsive client dashboards, dynamic lead and order forms, customer relationship tracking, and administrative control panels.",
      metrics: [
        { label: "Deployment", value: "Production Deployed" },
        { label: "Responsiveness", value: "Mobile & Desktop 100%" },
        { label: "Client Satisfaction", value: "Verified Delivery" }
      ],
      keyFeatures: [
        "Tailored administrative panels for managing client orders and services",
        "Mobile-first responsive layouts tested across iOS, Android, and desktop browsers",
        "Automated form validation, instant email dispatch, and secure database persistence",
        "Clean, maintainable component hierarchy allowing rapid client updates"
      ]
    }
  },
  {
    id: "interactive-digital-engine",
    number: "05",
    title: "Interactive 3D Portfolio & Digital Systems Showcase",
    subtitle: "High-Performance Three.js & Framer Motion Experience",
    category: "DIGITAL EXPERIENCES",
    badge: "Creative Engineering & 3D Web",
    image: "/images/project-movies.jpg",
    description: "A high-performance modern developer portfolio showcasing 3D particle physics, dynamic theme-reactive volumetric lighting, and synchronized scroll card stacking interactions crafted with React 19, Three.js, and Framer Motion.",
    technologies: ["React 19", "Three.js", "React Three Fiber", "Framer Motion", "Vite", "Modern CSS"],
    githubUrl: "https://github.com/ansaf-m",
    liveUrl: "https://demo.ansafdev.com",
    thumbnails: [
      { tag: "3D PARTICLE SYSTEM", title: "Shader-Driven Particle Orb", detail: "NormalBlending & Latitudinal Math" },
      { tag: "SCROLL DYNAMICS", title: "Sticky Card Stacking Deck", detail: "Hardware-Accelerated Native Scroll" }
    ],
    caseStudy: {
      problem: "Creating a standout engineering portfolio that highlights both deep distributed backend expertise and bleeding-edge creative frontend animation capabilities without compromising performance.",
      architecture: "React 19 with Vite, GPU-accelerated Three.js canvas shaders, and synchronized CSS scroll stacking layers with zero runtime overhead.",
      solution: "Built custom GLSL particle shaders, dynamic theme color propagation via CSS custom properties, and seamless sticky stacking card decks matching top-tier design references.",
      metrics: [
        { label: "Framerate", value: "Solid 60 FPS" },
        { label: "Bundle Size", value: "Vite Optimized" },
        { label: "Theme Modes", value: "4 Adaptive Themes" }
      ],
      keyFeatures: [
        "3D spherical particle orb that dynamically disperses on scroll",
        "Cinematic diagonal volumetric spotlight adapting to active theme colors",
        "Physical stacking card deck with progressive sticky overlap",
        "Full keyboard accessibility and prefers-reduced-motion compliance"
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
