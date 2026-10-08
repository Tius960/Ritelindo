"use client";

import { useState } from "react";

export default function SiteHeader({ whatsappHref }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="Ritelindo, kembali ke beranda"
      >
        <span className="brand-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>
          ritelindo<span className="brand-period">.</span>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`main-nav${isMenuOpen ? " is-open" : ""}`}
        id="main-nav"
        aria-label="Navigasi utama"
      >
        <a href="#paket" onClick={closeMenu}>
          Pilihan Paket
        </a>
        <a href="#keunggulan" onClick={closeMenu}>
          Keunggulan
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a
          className="nav-cta"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-.1l-.4-.2-3.8 1 1-3.7-.3-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.1.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3Z" />
          </svg>
          Konsultasi WA Gratis
        </a>
      </nav>
    </header>
  );
}
