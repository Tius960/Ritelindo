# Ritelindo – Landing Page Paket Rak Minimarket

Landing page B2B untuk Ritelindo, penyedia rak minimarket dan perlengkapan toko retail. Tujuan halaman ini adalah mengarahkan calon pelanggan untuk berkonsultasi melalui WhatsApp.

## Tech Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Next.js 16.4.0 (App Router, Turbopack) |
| UI | React 19.3.0 |
| Styling | CSS biasa (`styles.css`), mobile-first |
| Bahasa | JavaScript (JSX) |
| Node.js | >= 20.9.0 |

## Fitur

- **Technical SEO**
  - Meta title dan meta description unik dengan keyword "Paket Rak Minimarket" dan "Setup Toko Retail".
  - Canonical URL.
  - Open Graph tags lengkap (title, description, type, locale, siteName, url, image 1200×630 + alt) dan Twitter Card.
  - Hierarki heading rapi: satu `<h1>`, `<h2>` per section, `<h3>` untuk kartu paket dan poin keunggulan.
  - `<html lang="id">`.
- **Performa**
  - Gambar hero dan OG disimpan lokal di `public/images/` (WebP untuk hero, JPG untuk OG).
  - Gambar hero memakai `next/image` dengan `preload`.
  - Font sistem, tanpa library UI atau font eksternal.
  - Halaman di-prerender sebagai static content.
- **UX dan Konversi**
  - CTA WhatsApp di header, hero, tiap kartu paket, section keunggulan, consult band, FAQ, dan footer.
  - Tombol WhatsApp melayang yang selalu terlihat.
  - Pesan WhatsApp otomatis berbeda sesuai konteks tombol.
  - Navigasi mobile dengan menu hamburger (`aria-expanded`, `aria-controls`).
  - FAQ memakai elemen native `<details>`/`<summary>`.
  - Mendukung `prefers-reduced-motion`.

## Struktur Proyek

```
Ritelindo/
├── app/
│   ├── layout.jsx          # Root layout + metadata (SEO, Open Graph, Twitter)
│   ├── page.jsx            # Halaman utama (hero, paket, keunggulan, FAQ, footer)
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

## Menjalankan Proyek

Prasyarat: Node.js 20.9.0 atau lebih baru.

```bash
# 1. Install dependensi
npm install

# 2. Mode development
npm run dev
# buka http://localhost:3000

# 3. Build production
npm run build

# 4. Jalankan hasil build
npm run start
```

Rute yang tersedia: `/` dan `/packets` (keduanya menampilkan halaman yang sama; canonical mengarah ke `/packets`).

## Konfigurasi

### Nomor WhatsApp
Ubah konstanta di `app/page.jsx`. Gunakan format internasional tanpa tanda `+`.

```js
const BUSINESS_WHATSAPP_NUMBER = "6281319800800";
```

### Domain dan metadata SEO
Ubah di `app/layout.jsx`:

- `metadataBase`: domain produksi. Nilai ini dipakai untuk membentuk URL absolut `canonical`, `og:url`, dan `og:image`.
- `pageTitle` dan `pageDescription`: judul dan deskripsi halaman.
- `socialImage`: path gambar OG, default `/images/retail-og.jpg`.

### Paket dan konten
Daftar paket (Usaha Awal, Minimarket, Ruang Khusus) ada di array `packages` pada `app/page.jsx`. Setiap paket punya nama, deskripsi, daftar isi, dan pesan WhatsApp sendiri.

### Warna dan tema
Variabel warna dan font ada di blok `:root` pada `styles.css`.

## Deployment

Proyek ini dapat di-deploy ke platform apa pun yang mendukung Next.js (misalnya Vercel) atau dijalankan sendiri dengan `npm run build && npm run start`. Sebelum deploy, pastikan `metadataBase` sudah sesuai dengan domain produksi.

## Catatan

- `AGENTS.md` dibuat dan diperbarui otomatis oleh `next dev`; tidak perlu diedit manual.
- Versi dependensi terkunci lewat `package-lock.json`.
- Opsi `allowedDevOrigins` di `next.config.mjs` hanya untuk akses development dari jaringan lokal.
