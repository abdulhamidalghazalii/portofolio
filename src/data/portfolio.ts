import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Abdul Hamid Al-Ghazali",
    role: "Web Developer",
    tagline: "Fresh graduate S1 Teknik Informatika Telkom University Purwokerto yang berfokus pada pengembangan aplikasi web Full-Stack dan pengelolaan basis data yang efektif.",
    shortBio: "Memiliki pengalaman dalam membangun aplikasi berbasis web end-to-end, baik dari sisi frontend maupun backend, serta mengelola basis data relasional (PostgreSQL, MySQL, SQLite) untuk mendukung kebutuhan operasional pengguna.",
    fullBio: [
      "Fresh graduate S1 Teknik Informatika dari Telkom University Purwokerto yang memiliki ketertarikan tinggi pada bidang pengembangan website (Web Development).",
      "Memiliki pengalaman dalam membangun aplikasi berbasis web, baik dari sisi frontend maupun backend, serta mengelola database untuk mendukung pengolahan data yang lebih efektif dan efisien.",
      "Senang mempelajari teknologi baru, mengembangkan solusi digital, dan mencari cara untuk membuat sistem yang lebih praktis dan mudah digunakan. Saya pribadi yang teliti, cepat belajar, mampu bekerja sama dalam tim, dan siap mengembangkan kemampuan serta berkontribusi dalam membangun aplikasi web yang sesuai dengan kebutuhan pengguna."
    ],
    email: "abdulhamidalghazali62@gmail.com",
    avatarUrl: "/profile.jpg",
    location: "Bekasi, Jawa Barat",
    university: "Telkom University Purwokerto",
    github: "https://github.com/abdulhamidalghazalii",
    linkedin: "https://linkedin.com/in/abdulhamidalghazalii",
    twitter: "https://twitter.com/abdulhamid",
    resumeUrl: "/resume-abdul-hamid-alghazali.pdf",
    availability: "Terbuka untuk Peluang Kerja & Proyek Web",
    stats: []
  },

  skillCategories: [
    {
      category: "Frontend Development",
      description: "Pengembangan antarmuka responsif, modern, dan ramah pengguna.",
      items: [
        { name: "HTML5 & CSS3", level: 95, highlight: true },
        { name: "JavaScript (ES6+)", level: 90, highlight: true },
        { name: "React", level: 88, highlight: true },
        { name: "Tailwind CSS", level: 92, highlight: true },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive UI", level: 92 }
      ]
    },
    {
      category: "Backend & API",
      description: "Logika server, otentikasi aman, dan integrasi REST API.",
      items: [
        { name: "PHP", level: 88, highlight: true },
        { name: "Laravel", level: 88, highlight: true },
        { name: "RESTful API", level: 90, highlight: true },
        { name: "Authentication & Security", level: 86, highlight: true },
        { name: "CRUD Operations", level: 92 },
        { name: "Node.js (Fundamental)", level: 80 }
      ]
    },
    {
      category: "Basis Data (Database)",
      description: "Perancangan skema, normalisasi, dan optimasi query data.",
      items: [
        { name: "PostgreSQL", level: 88, highlight: true },
        { name: "MySQL", level: 90, highlight: true },
        { name: "SQLite", level: 85 },
        { name: "Database Schema Design", level: 86 }
      ]
    },
    {
      category: "Tools & Deployment",
      description: "Alat kolaborasi, container, version control, dan alur rilis.",
      items: [
        { name: "Git & GitHub", level: 90, highlight: true },
        { name: "Docker", level: 80, highlight: true },
        { name: "Postman (API Testing)", level: 88 },
        { name: "Vite Bundler", level: 88 },
        { name: "Server Deployment", level: 84 }
      ]
    }
  ],

  projects: [
    {
      id: "project-hris-botz",
      title: "Sistem HRIS & Manajemen Data Pekerja",
      tagline: "Aplikasi Web HRIS end-to-end untuk digitalisasi data karyawan & operasional",
      description: "Merancang dan mengembangkan aplikasi sistem HRIS berbasis web dari tahap awal hingga dapat digunakan oleh perusahaan PT Botz Indonesia. Mencakup fitur manajemen profil pekerja, rekapitulasi kehadiran, manajemen jadwal kerja, dan sistem Payroll terstruktur.",
      category: "Full Stack",
      tags: ["Full Stack", "Laravel", "React", "PostgreSQL", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://github.com/abdulhamidalghazalii",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Membangun fitur Manajemen Data Pekerja dengan operasi CRUD lengkap, jadwal kerja, dan payroll.",
        "Mengembangkan antarmuka pengguna responsif dan user-friendly agar mudah diakses dari berbagai perangkat.",
        "Mengintegrasikan basis data aman untuk menyimpan data rahasia dan riwayat kehadiran pekerja.",
        "Melakukan testing, debugging, hingga deployment ke server perusahaan."
      ],
      role: "FullStack Web Developer",
      period: "07/2025 – 10/2025 (PT Botz Indonesia)"
    },
    {
      id: "project-portfolio-web",
      title: "Modern Developer Portfolio",
      tagline: "Platform portofolio web berkinerja tinggi dengan antarmuka modern",
      description: "Website portofolio rekayasa web yang dirancang dengan performa cepat, responsivitas tinggi, dan integrasi resume digital untuk mempermudah perekrut meninjau profil teknis.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Three.js"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://portofolio-abdulhamidalghazali.vercel.app",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Desain antarmuka profesional, bersih, dan cepat dimuat di seluruh perangkat.",
        "Integrasi fitur unduh resume CV langsung dalam format PDF.",
        "Arsitektur komponen modular dan efisiensi informasi yang optimal."
      ],
      role: "Web Developer",
      period: "2024"
    },
    {
      id: "project-cloud-dashboard",
      title: "Data Analytics & Management Dashboard",
      tagline: "Dashboard analitik interaktif untuk visualisasi dan manajemen data",
      description: "Aplikasi dashboard data dengan tabel interaktif, filter status dinamis, dan pengelolaan pengguna untuk pemantauan data secara terorganisir.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "PHP", "MySQL", "REST API"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://github.com/abdulhamidalghazalii",
      featured: false,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Penyajian data visual dengan chart terstruktur dan filter status kustom.",
        "API backend untuk melayani pemrosesan data dengan query optimal.",
        "Antarmuka yang bersih dan mudah dinavigasi oleh pengguna."
      ],
      role: "FullStack Developer",
      period: "2024"
    }
  ],

  experiences: [
    {
      id: "exp-botz",
      role: "FullStack Web Developer",
      company: "PT Botz Indonesia",
      location: "Indonesia",
      type: "Pengalaman Kerja",
      period: "07/2025 – 10/2025",
      description: "Merancang dan mengembangkan aplikasi sistem HRIS berbasis web dari tahap awal hingga dapat digunakan secara langsung oleh operasional perusahaan.",
      achievements: [
        "Membangun fitur Manajemen Data Pekerja mencakup operasi CRUD untuk profil karyawan, rekapitulasi kehadiran, manajemen jadwal kerja, dan Payroll.",
        "Mengembangkan antarmuka pengguna (frontend) yang responsif dan ramah pengguna (user-friendly) agar mudah diakses oleh karyawan melalui berbagai perangkat.",
        "Merancang arsitektur backend dan mengintegrasikan basis data (database) dengan aman untuk menyimpan informasi rahasia dan riwayat kehadiran pekerja.",
        "Melakukan pengujian (testing) dan perbaikan bug (debugging) untuk memastikan website berjalan lancar tanpa kendala sebelum dideploy.",
        "Melakukan proses deployment ke server perusahaan hingga siap digunakan."
      ],
      technologies: ["PHP", "Laravel", "React", "PostgreSQL", "MySQL", "REST API", "Tailwind CSS", "Bootstrap"]
    }
  ],

  education: [
    {
      id: "edu-telkom-pwt",
      degree: "S1 Teknik Informatika (Informatics Engineering)",
      institution: "Telkom University Purwokerto",
      location: "Purwokerto / Bekasi",
      period: "09/2022 – 08/2026",
      gpa: "Bachelor of Science",
      details: [
        "Mempelajari fundamental Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Web, dan Sistem Basis Data.",
        "Memiliki pemahaman mendalam dalam membangun arsitektur aplikasi berbasis web (Frontend & Backend).",
        "Menyelesaikan implementasi sistem nyata HRIS berbasis web pada lingkungan industri."
      ],
      courses: [
        "Pemrograman Web",
        "Sistem Basis Data",
        "Struktur Data & Algoritma",
        "Rekayasa Perangkat Lunak",
        "Jaringan Komputer"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "FullStack Web Developer HRIS Project",
      issuer: "PT Botz Indonesia",
      issueDate: "2025",
      credentialId: "BOTZ-DEV-2025",
      credentialUrl: "/resume-abdul-hamid-alghazali.pdf",
      skills: ["FullStack Development", "Sistem HRIS", "Database Security", "Server Deployment"]
    },
    {
      id: "cert-2",
      title: "S1 Teknik Informatika Degree Program",
      issuer: "Telkom University Purwokerto",
      issueDate: "2022 – 2026",
      credentialId: "TELKOM-PWT-INFORMATIKA",
      credentialUrl: "/resume-abdul-hamid-alghazali.pdf",
      skills: ["Web Development", "Software Engineering", "Algorithms", "Database Management"]
    }
  ]
};

