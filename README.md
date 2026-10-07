# 🚀 Modern 3D Developer Portfolio

Sebuah website portfolio modern, interaktif, dan berkinerja tinggi yang dibangun dengan **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Three.js / React Three Fiber**, **Framer Motion**, dan **Lucide React**.

---

## 🛠️ Tech Stack

* **Framework & Runtime**: React 19 + TypeScript
* **Build Tool & Bundler**: Vite 8
* **Styling**: Tailwind CSS v4 (Glassmorphism & Obsidian Dark Aesthetic)
* **3D Visuals & Graphics**: Three.js + `@react-three/fiber` + `@react-three/drei`
* **Icons**: Lucide React + Custom SVG Social Icons
* **Animation**: Micro-interactions & GPU-accelerated CSS transitions

---

## 📂 Struktur Project

```text
Project/
├── public/                 # Aset statis & Favicon
├── src/
│   ├── assets/             # Aset gambar & SVG
│   ├── components/         # Komponen UI Modular
│   │   ├── Navbar.tsx      # Floating glassmorphic header + mobile drawer
│   │   ├── Hero.tsx        # Hero section + 3D interactive viewport + stats
│   │   ├── ThreeCanvas.tsx # Scene 3D WebGL (distort core, orbit rings, particles)
│   │   ├── About.tsx       # Bio naratif, filosofi, & IDE code snapshot
│   │   ├── Skills.tsx      # Kategori keahlian dengan progress bar & core badges
│   │   ├── Projects.tsx    # Filterable project showcase & card preview
│   │   ├── ProjectModal.tsx# Modal detail proyek mendalam
│   │   ├── Experience.tsx  # Timeline vertikal pengalaman kerja
│   │   ├── Education.tsx   # Pendidikan & mata kuliah utama
│   │   ├── Certifications.tsx # Sertifikasi industri & verifikasi
│   │   ├── Contact.tsx     # Form pesan interaktif & copy email
│   │   ├── Footer.tsx      # Footer, copyright, & back to top
│   │   └── SocialIcons.tsx # Komponen SVG untuk GitHub & LinkedIn
│   ├── data/
│   │   └── portfolio.ts    # 🌟 FILE PUSAT DATA PRIBADI & KONTEN (Edit di sini!)
│   ├── types/
│   │   └── portfolio.ts    # Definisi tipe TypeScript
│   ├── App.tsx             # Entrypoint perakitan aplikasi
│   ├── index.css           # Design tokens, glassmorphism & typography
│   └── main.tsx            # Bootstrap React DOM
├── index.html              # Template HTML + SEO Meta Tags + Google Fonts
├── package.json            # Dependensi & script
├── tsconfig.json           # Konfigurasi TypeScript
└── vite.config.ts          # Konfigurasi Vite + Tailwind + manual chunking
```

---

## ⚙️ Cara Mengubah Data Pribadi

Seluruh informasi pribadi, teks, tautan, proyek, keahlian, dan riwayat disimpan secara terpusat pada satu file:

👉 **[`src/data/portfolio.ts`](file:///c:/Users/DELL/Documents/Project/src/data/portfolio.ts)**

Cukup buka file tersebut dan ganti nilai placeholder berikut dengan informasi Anda:

* `[NAMA LENGKAP]` ➔ Nama lengkap Anda
* `[NAMA UNIVERSITAS]` ➔ Nama universitas / kampus Anda
* `[EMAIL]` ➔ Alamat email aktif Anda
* `[GITHUB]` ➔ Username GitHub Anda
* `[LINKEDIN]` ➔ Username LinkedIn Anda
* `[KOTA]` ➔ Domisili kota Anda
* `[PERUSAHAAN TERKINI]` & `[PERUSAHAAN SEBELUMNYA]` ➔ Riwayat pekerjaan Anda

---

## 🚀 Menjalankan Project Secara Lokal

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173/`.

2. **Kompilasi Production Build**:
   ```bash
   npm run build
   ```
   Output bundle produksi yang optimal akan dibuat di folder `dist/`.

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```
