// ── Skills Data ──────────────────────────────────────────────────────────────
export const skillCategories = [{
        icon: '☁',
        name: 'DevOps & Cloud Engineering',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible',
            'CI/CD Pipelines', 'GitHub Actions', 'Jenkins', 'Infrastructure as Code',
            'Linux', 'Networking', 'Prometheus', 'Grafana'
        ],
    },
    {
        icon: '⚙',
        name: 'Backend Development',
        skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Django',
            'REST APIs', 'Auth & Authorization', 'Middleware Architecture',
            'Microservices', 'API Security'
        ],
    },
    {
        icon: '◈',
        name: 'Frontend Development',
        skills: ['React', 'HTML / CSS', 'Tailwind CSS', 'Responsive UI',
            'Frontend API Integration'
        ],
    },
    {
        icon: '🗄',
        name: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Sequelize ORM', 'Database Design'],
    },
    {
        icon: '{ }',
        name: 'Programming Languages',
        skills: ['JavaScript(Nodejs,Expressjs)', 'Python', 'Bash Scripting'],
    },
    {
        icon: '📊',
        name: 'Data Science & Analytics',
        skills: ['Data Analysis', 'Predictive Analytics', 'Statistical Modeling',
            'Data Visualization', 'ML Fundamentals'
        ],
    },
    {
        icon: '🤖',
        name: 'AI & Automation',
        skills: ['AI Workflow Automation', 'LLM Integrations', 'AI Agents',
            'Automation Systems', 'AI-Powered Business Tools'
        ],
    },
    {
        icon: '💹',
        name: 'Business & Financial Analysis',
        skills: ['Financial Modeling', 'Feasibility Analysis',
            'Cost-Benefit Analysis', 'Investment Evaluation'
        ],
    },
]

// ── Projects Data ─────────────────────────────────────────────────────────────
export const projects = [{
        category: 'devops',
        type: 'DevOps',
        name: 'CI/CD Automation Pipeline',
        desc: 'Fully automated delivery pipeline from code commit to production. Includes build, test, security scanning, and zero-downtime rollout stages with rollback capabilities.',
        stack: ['GitHub Actions', 'Docker', 'Jenkins', 'AWS'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'devops',
        type: 'DevOps',
        name: 'Kubernetes Microservices Infrastructure',
        desc: 'Production-grade Kubernetes cluster orchestrating microservices with auto-scaling, load balancing, service mesh, and integrated monitoring dashboards.',
        stack: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'devops',
        type: 'DevOps',
        name: 'Terraform Infrastructure Automation',
        desc: 'Infrastructure-as-Code solution provisioning complete cloud environments on AWS — VPC, EC2, RDS, S3, and IAM — with full state management and environment parity.',
        stack: ['Terraform', 'AWS', 'Ansible', 'Bash'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'devops',
        type: 'DevOps',
        name: 'Dockerized Application Deployment',
        desc: 'Multi-container application deployment using Docker Compose with automated image builds, private registry management, and health check monitoring.',
        stack: ['Docker', 'Docker Compose', 'Nginx', 'AWS ECR'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'backend',
        type: 'Backend',
        name: 'Node.js Authentication API',
        desc: 'Secure RESTful authentication service with JWT tokens, OAuth2, role-based access control, refresh token rotation, and rate limiting for production use.',
        stack: ['Node.js', 'Express', 'MySQL', 'JWT'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'backend',
        type: 'Backend',
        name: 'Python FastAPI Backend Service',
        desc: 'High-performance async API service with automatic OpenAPI documentation, dependency injection, background task processing, and integrated data validation.',
        stack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'backend',
        type: 'Backend',
        name: 'Django Web Platform',
        desc: 'Full-featured Django web platform with custom admin, REST API layer, user management, media uploads, and production-ready deployment configuration.',
        stack: ['Django', 'Python', 'PostgreSQL', 'Nginx'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'backend',
        type: 'Backend',
        name: 'RESTful Microservices Architecture',
        desc: 'Distributed backend system with independent microservices, API gateway, service discovery, event-driven communication, and centralized logging.',
        stack: ['Node.js', 'Docker', 'RabbitMQ', 'Nginx'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'fullstack',
        type: 'Full-Stack',
        name: 'React + Node.js Web Platform',
        desc: 'Full-stack web application with React frontend and Node.js backend, featuring real-time updates, user management, role-based dashboards, and file handling.',
        stack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com',
        demo: '#',
    },
    {
        category: 'fullstack',
        type: 'Full-Stack',
        name: 'Analytics Dashboard Platform',
        desc: 'Interactive data dashboard with real-time charts, filterable metrics, export capabilities, and role-specific views built on React + FastAPI.',
        stack: ['React', 'FastAPI', 'D3.js', 'Python'],
        github: 'https://github.com',
        demo: '#',
    },
    {
        category: 'fullstack',
        type: 'Full-Stack',
        name: 'React + FastAPI Application',
        desc: 'Modern full-stack application combining React SPA with a high-performance FastAPI backend, Docker deployment, and JWT-secured API communication.',
        stack: ['React', 'FastAPI', 'Docker', 'PostgreSQL'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'ai',
        type: 'AI & Data',
        name: 'Predictive Analytics System',
        desc: 'Machine learning pipeline for business forecasting — data ingestion, feature engineering, model training, evaluation, and automated retraining with drift detection.',
        stack: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'ai',
        type: 'AI & Data',
        name: 'AI Workflow Automation System',
        desc: 'LLM-powered automation platform for business processes — intelligent document processing, task routing, AI agents, and integration with existing enterprise tools.',
        stack: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
        github: 'https://github.com',
        demo: null,
    },
    {
        category: 'ai',
        type: 'AI & Data',
        name: 'Data Analytics Dashboard',
        desc: 'End-to-end data analytics platform with automated ingestion pipelines, statistical analysis, interactive visualizations, and scheduled reporting.',
        stack: ['Python', 'Pandas', 'Plotly', 'React'],
        github: 'https://github.com',
        demo: null,
    },
]

// ── Research Data ─────────────────────────────────────────────────────────────
export const researchItems = [{
        num: '01',
        icon: '📈',
        title: 'Predictive Analytics',
        desc: 'Research into advanced forecasting models for business and operational intelligence — applying machine learning to extract actionable predictions from complex datasets.',
    },
    {
        num: '02',
        icon: '🏦',
        title: 'Digital Tax Administration Systems',
        desc: 'Investigating technology-driven approaches to modernize tax administration — leveraging data integration, automation, and analytics for compliance and efficiency.',
    },
    {
        num: '03',
        icon: '💡',
        title: 'Technology Innovation',
        desc: 'Exploring emerging infrastructure patterns, AI system architectures, and automation frameworks — translating research insights into production engineering practice.',
    },
    {
        num: '04',
        icon: '🔬',
        title: 'Data-Driven Decision Systems',
        desc: 'Building analytical frameworks and decision-support systems that transform raw organizational data into clear, evidence-based insights for policy and strategy.',
    },
]

// ── Workflow Steps ────────────────────────────────────────────────────────────
export const workflowSteps = [
    { icon: '👨‍💻', name: 'Developer', desc: 'Code commit & push' },
    { icon: '⌥', name: 'GitHub', desc: 'Version control & PR review' },
    { icon: '⚡', name: 'CI Pipeline', desc: 'Build · Test · Security scan' },
    { icon: '🐳', name: 'Docker', desc: 'Container build & image push' },
    { icon: '☸', name: 'Kubernetes', desc: 'Rolling deploy & scaling' },
    { icon: '📈', name: 'Monitoring', desc: 'Prometheus & Grafana' },
]