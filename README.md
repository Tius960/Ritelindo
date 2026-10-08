<div align="center">

# Ritelindo

**Landing page B2B untuk paket rak minimarket dan setup toko retail**

Dirancang untuk satu tujuan: mengubah pengunjung menjadi percakapan WhatsApp.

![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.3-149ECA?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A5%2020.9-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-157347?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-Optimized-d3f36b?style=flat-square&labelColor=173b2b)

[Fitur](#-fitur-utama) · [Memulai](#-memulai-cepat) · [Struktur](#-struktur-proyek) · [Konfigurasi](#%EF%B8%8F-konfigurasi) · [Deployment](#-deployment)

</div>

---

## Tentang Proyek

Ritelindo adalah landing page satu halaman untuk bisnis penyedia rak minimarket dan perlengkapan toko. Halaman ini memperkenalkan tiga pilihan paket, menjelaskan cara Ritelindo merencanakan tata ruang toko, menjawab pertanyaan umum, dan mengarahkan calon pelanggan ke konsultasi gratis lewat WhatsApp.

Proyek dibangun dengan **Next.js (App Router)** dan CSS murni tanpa library UI tambahan, sehingga ringan dan mudah dirawat.

## Fitur Utama

### Technical SEO

| Aspek | Implementasi |
| --- | --- |
| Meta title | `Paket Rak Minimarket & Setup Toko Retail \| Ritelindo` |
| Meta description | Unik, memuat keyword B2B (rak minimarket, rak gondola, setup toko retail) |
| Open Graph | title, description, type, locale, siteName, url, gambar 1200×630 + alt text |
| Twitter Card | `summary_large_image` |
| Canonical | URL absolut dibentuk dari `metadataBase` |
| Heading | Satu `<h1>`, `<h2>` per section, `<h3>` untuk kartu paket dan poin keunggulan |
| Bahasa | `<html lang="id">`, locale `id_ID` |

### Performa

- Halaman di-prerender sebagai **static content** saat build.
- Gambar hero (WebP) dan gambar OG (JPG) disimpan lokal di `public/images/`, tanpa ketergantungan ke CDN pihak ketiga.
- Hero memakai `next/image` dengan `preload`.
- Font sistem dan tanpa library UI, sehingga tidak ada request font atau CSS eksternal.
- Mendukung `prefers-reduced-motion`.

### UX dan Konversi

- **Tombol WhatsApp di banyak titik**: header, hero, setiap kartu paket, section keunggulan, consult band, FAQ, dan footer.
- **Tombol WhatsApp melayang** yang selalu terlihat di layar.
- **Pesan otomatis kontekstual**: setiap tombol membuka WhatsApp dengan teks yang berbeda sesuai konteksnya.
- Navigasi mobile dengan menu hamburger yang aksesibel (`aria-expanded`, `aria-controls`).
- FAQ memakai elemen native `<details>`/`<summary>`, tanpa JavaScript tambahan.
- Desain **mobile-first**: gaya dasar untuk layar kecil, diperluas dengan `min-width`.

## Tech Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Next.js 16.4.0 (App Router, Turbopack) |
| UI | React 19.3.0 |
| Styling | CSS biasa (`styles.css`) |
| Bahasa | JavaScript (JSX) |
| Runtime | Node.js ≥ 20.9.0 |

## Memulai Cepat

**Prasyarat:** Node.js 20.9.0 atau lebih baru.

```bash
# Clone repositori
git clone https://github.com/Tius960/Ritelindo.git
cd Ritelindo

# Install dependensi
npm install

# Jalankan mode development
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Perintah yang Tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server development |
| `npm run build` | Membuat build production |
| `npm run start` | Menjalankan hasil build production |

### Rute

| Rute | Keterangan |
| --- | --- |
| `/` | Halaman utama |
| `/packets` | Menampilkan halaman yang sama dengan `/`; canonical mengarah ke rute ini |

## Struktur Proyek

```
Ritelindo/
├── app/
│   ├── layout.jsx          # Root layout + metadata (SEO, Open Graph, Twitter)
│   ├── page.jsx            # Halaman utama: hero, paket, keunggulan, FAQ, footer
│   ├── site-header.jsx     # Header + menu mobile (client component)
│   └── packets/
│       └── page.jsx        # Re-export halaman utama untuk rute /packets
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── retail-store.webp   # Gambar hero
│       └── retail-og.jpg       # Gambar Open Graph (1200×630)
├── styles.css              # Seluruh styling
├── next.config.mjs
├── jsconfig.json
├── package.json
└── AGENTS.md               # Dibuat otomatis oleh `next dev`
```

## Konfigurasi

### Nomor WhatsApp

Ubah konstanta di `app/page.jsx`. Gunakan format internasional tanpa tanda `+`.

```js
const BUSINESS_WHATSAPP_NUMBER = "6281319800800";
```

### Domain dan Metadata SEO

Ubah di `app/layout.jsx`:

| Variabel | Fungsi |
| --- | --- |
| `metadataBase` | Domain produksi. Dipakai untuk membentuk URL absolut `canonical`, `og:url`, dan `og:image` |
| `pageTitle` | Judul halaman |
| `pageDescription` | Deskripsi halaman |
| `socialImage` | Path gambar OG, default `/images/retail-og.jpg` |

### Paket dan Konten

Daftar paket (**Usaha Awal**, **Minimarket**, **Ruang Khusus**) ada di array `packages` pada `app/page.jsx`. Setiap paket memiliki nama, deskripsi, daftar isi, dan pesan WhatsApp sendiri.

### Warna dan Tema

Variabel warna dan font ada di blok `:root` pada `styles.css`.

## Deployment

Proyek ini dapat di-deploy ke platform yang mendukung Next.js, misalnya [Vercel](https://vercel.com), atau dijalankan sendiri:

```bash
npm run build
npm run start
```

> **Sebelum deploy:** pastikan `metadataBase` di `app/layout.jsx` sudah sesuai dengan domain produksi agar canonical dan preview link (Open Graph) benar.

## Catatan

- `AGENTS.md` dibuat dan diperbarui otomatis oleh `next dev`; tidak perlu diedit manual.
- Versi dependensi terkunci lewat `package-lock.json`.
- Opsi `allowedDevOrigins` di `next.config.mjs` hanya untuk akses development dari jaringan lokal.
- Folder `node_modules/` dan `.next/` tidak perlu di-commit; pastikan keduanya ada di `.gitignore`.

---

<div align="center">

Dibuat untuk Ritelindo · Perlengkapan toko, direncanakan bersama.

</div>
