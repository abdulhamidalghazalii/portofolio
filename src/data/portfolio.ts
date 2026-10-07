import type { PortfolioData } from '../types/portfolio';

/**
 * =========================================================================
 * KONFIGURASI DATA PORTFOLIO - ABDUL HAMID AL-GHAZALI
 * =========================================================================
 * Seluruh informasi pribadi dan konten portfolio terpusat pada file ini.
 * =========================================================================
 */

export const portfolioData: PortfolioData = {
  personal: {
    // Identitas Utama
    name: "Abdul Hamid Al-Ghazali",
    role: "Full-Stack Web Developer & Software Engineer",
    tagline: "Mahasiswa Telkom University yang berfokus pada Full-Stack Web Development, sistem terstruktur, dan pengalaman digital interaktif.",
    shortBio: "Full-Stack Web Developer dari Telkom University berdomisili di Bekasi. Berpengalaman membangun aplikasi web end-to-end, termasuk sistem Manajemen Data Absensi selama PKL di PT BOLTZ INDONESIA.",
    fullBio: [
      "Halo! Saya Abdul Hamid Al-Ghazali, mahasiswa dari Telkom University yang berdomisili di Bekasi, Indonesia.",
      "Sebagai seorang Full-Stack Web Developer, saya memiliki antusiasme tinggi dalam merancang aplikasi web yang solutif, efisien, dan memiliki struktur kode yang bersih.",
      "Saya memiliki pengalaman praktis selama menjalani PKL di PT BOLTZ INDONESIA selama 3 bulan, di mana saya merancang dan membangun proyek Sistem Manajemen Data Absensi karyawan secara full-stack dari basis data hingga tampilan antarmuka pengguna."
    ],
    email: "abdulhamidalghazali62@gmail.com",
    avatarUrl: "/profile.jpg",
    location: "Bekasi, Jawa Barat, Indonesia",
    phone: "+62 8xx-xxxx-xxxx",
    university: "Telkom University",
    github: "https://github.com/abdulhamidalghazalii",
    linkedin: "https://linkedin.com/in/abdulhamidalghazalii",
    twitter: "https://twitter.com/abdulhamid",
    resumeUrl: "#",
    availability: "Terbuka untuk Peluang Kerja, Magang & Proyek Web",
    stats: [
      { label: "Durasi PKL", value: "3 Bulan", helper: "di PT BOLTZ INDONESIA" },
      { label: "Fokus Bidang", value: "Full-Stack", helper: "Web Development & DB" },
      { label: "Pendidikan", value: "Telkom Univ", helper: "Informatika / Teknologi" },
      { label: "Domisili", value: "Bekasi", helper: "Jawa Barat, Indonesia" }
    ]
  },

  skillCategories: [
    {
      category: "Frontend & Web UI",
      description: "Pengembangan antarmuka responsif, modern, dan interaktif.",
      items: [
        { name: "React / Modern React", level: 90, highlight: true },
        { name: "TypeScript / JavaScript", level: 88, highlight: true },
        { name: "Tailwind CSS", level: 92, highlight: true },
        { name: "HTML5 & Modern CSS", level: 95 },
        { name: "Responsive Web Design", level: 92 },
        { name: "Framer Motion", level: 82 }
      ]
    },
    {
      category: "Backend & Basis Data",
      description: "Logika server, API RESTful, dan manajemen basis data absensi/bisnis.",
      items: [
        { name: "Laravel (PHP)", level: 88, highlight: true },
        { name: "Node.js & Express", level: 86, highlight: true },
        { name: "RESTful API Architecture", level: 88, highlight: true },
        { name: "Database Management (MySQL / PostgreSQL)", level: 85, highlight: true },
        { name: "User Authentication & Authorization", level: 84 },
        { name: "CRUD & Data Validation", level: 90 }
      ]
    },
    {
      category: "3D & Creative Visuals",
      description: "Eksplorasi grafis interaktif berbasis web 3D.",
      items: [
        { name: "Three.js", level: 80, highlight: true },
        { name: "React Three Fiber (R3F)", level: 80 },
        { name: "@react-three/drei", level: 78 },
        { name: "Interactive Canvas Animations", level: 82 }
      ]
    },
    {
      category: "Tools & Metodologi",
      description: "Alat pengembangan harian, otomasi, manajemen kode, dan alur kerja tim.",
      items: [
        { name: "Google Apps Script (AppScript)", level: 88, highlight: true },
        { name: "Git & GitHub Workflow", level: 90, highlight: true },
        { name: "Vite Bundler", level: 88 },
        { name: "Postman (API Testing)", level: 86 },
        { name: "Workflow & Data Automation", level: 85 },
        { name: "Clean Code & Problem Solving", level: 85 }
      ]
    }
  ],

  projects: [
    {
      id: "project-absensi-boltz",
      title: "Sistem Manajemen Data Absensi Karyawan",
      tagline: "Aplikasi Full-Stack Web untuk digitalisasi presensi di PT BOLTZ INDONESIA",
      description: "Project sistem informasi kehadiran yang dikembangkan selama masa PKL 3 bulan di PT BOLTZ INDONESIA. Aplikasi ini mempermudah pencatatan kehadiran harian, monitoring data kehadiran karyawan, dan rekapitulasi data absensi secara real-time dan terstruktur.",
      category: "Full Stack",
      tags: ["Full Stack", "React", "Node.js", "Express", "Database Management", "Tailwind CSS"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://github.com/abdulhamidalghazalii",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Dikembangkan langsung selama Praktik Kerja Lapangan (PKL) 3 bulan di PT BOLTZ INDONESIA.",
        "Mengelola alur pencatatan kehadiran karyawan dan rekapitulasi presensi secara otomatis.",
        "Arsitektur Full-Stack modular dengan antarmuka yang bersih, intuitif, dan responsif untuk kebutuhan operasional perusahaan."
      ],
      role: "Fullstack Web Developer (PKL)",
      period: "3 Bulan (PT BOLTZ INDONESIA)"
    },
    {
      id: "project-3d-portfolio",
      title: "Interactive 3D Developer Portfolio",
      tagline: "Website portfolio personal berkinerja tinggi dengan visual 3D WebGL",
      description: "Platform portfolio interaktif dengan integrasi Three.js, React Three Fiber, dan Tailwind CSS untuk menampilkan profil rekayasa web secara visual dan dinamis.",
      category: "3D & Graphics",
      tags: ["React", "Three.js", "R3F", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://github.com/abdulhamidalghazalii",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Implementasi mesh distorsi dinamis dan sistem partikel Three.js yang dioptimalkan.",
        "Desain responsif dengan estetika dark obsidian dan skor performa tinggi.",
        "Navigasi halus dengan transisi komponen terstruktur."
      ],
      role: "Frontend & 3D Web Developer",
      period: "2024"
    },
    {
      id: "project-cloud-dashboard",
      title: "Data Analytics & Management Dashboard",
      tagline: "Dashboard visualisasi data interaktif dengan metrik terstruktur",
      description: "Aplikasi dashboard analitik dengan filter data, grafik performa, dan manajemen pengguna untuk pemantauan data secara terorganisir.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
      githubUrl: "https://github.com/abdulhamidalghazalii",
      demoUrl: "https://github.com/abdulhamidalghazalii",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Penyajian data visual dengan chart interaktif dan filter status kustom.",
        "API backend untuk melayani pemrosesan data dengan query optimal.",
        "Dukungan mode tampilan gelap yang ramah di mata pengguna."
      ],
      role: "Fullstack Developer",
      period: "2024"
    }
  ],

  experiences: [
    {
      id: "exp-boltz",
      role: "Fullstack Web Developer (PKL)",
      company: "PT BOLTZ INDONESIA",
      location: "Indonesia",
      type: "Praktik Kerja Lapangan (PKL)",
      period: "3 Bulan",
      description: "Menjalani Praktik Kerja Lapangan (PKL) selama 3 bulan sebagai Fullstack Web Developer, merancang dan mengembangkan proyek Sistem Manajemen Data Absensi karyawan.",
      achievements: [
        "Merancang dan membangun arsitektur sistem Manajemen Data Absensi secara end-to-end dari frontend hingga backend dan database.",
        "Mengimplementasikan fitur pencatatan absensi karyawan, rekapitulasi data kehadiran, dan validasi data secara terstruktur.",
        "Memastikan antarmuka aplikasi intuitif dan mudah dioperasikan oleh seluruh staf dan manajemen perusahaan."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "Database Management", "Tailwind CSS", "RESTful API"]
    }
  ],

  education: [
    {
      id: "edu-telkom",
      degree: "S1 Informatika / Rekayasa Perangkat Lunak",
      institution: "Telkom University",
      location: "Bandung / Bekasi, Indonesia",
      period: "Aktif / Mahasiswa",
      gpa: "Predikat Baik",
      details: [
        "Mempelajari fundamental Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Web, dan Sistem Basis Data.",
        "Aktif dalam eksplorasi teknologi pengembangan aplikasi web modern (Frontend & Backend).",
        "Menyelesaikan implementasi proyek nyata di industri melalui program PKL di PT BOLTZ INDONESIA."
      ],
      courses: [
        "Pemrograman Web Lanjut",
        "Basis Data & Manajemen Data",
        "Struktur Data & Algoritma",
        "Rekayasa Perangkat Lunak"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Full-Stack Web Development Course",
      issuer: "Telkom University & Online Learning",
      issueDate: "2024",
      credentialId: "TELKOM-DEV-2024",
      credentialUrl: "https://github.com/abdulhamidalghazalii",
      skills: ["React", "Node.js", "Database Management", "RESTful API"]
    },
    {
      id: "cert-2",
      title: "Sertifikat Praktik Kerja Lapangan (PKL)",
      issuer: "PT BOLTZ INDONESIA",
      issueDate: "3 Bulan PKL",
      credentialId: "BOLTZ-PKL-XXXX",
      credentialUrl: "https://github.com/abdulhamidalghazalii",
      skills: ["Fullstack Web Development", "Manajemen Data Absensi", "Team Collaboration"]
    }
  ]
};
