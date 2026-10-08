import Image from "next/image";
import SiteHeader from "./site-header";

const BUSINESS_WHATSAPP_NUMBER = "6281319800800";

function whatsappHref(message) {
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    type: "START",
    name: "Usaha Awal",
    description:
      "Konfigurasi dasar untuk toko baru yang ingin mulai menata ruang jual dengan terarah.",
    inclusions: [
      "Rencana kebutuhan rak dasar",
      "Konfigurasi mengikuti ukuran ruang",
      "Sesuai untuk toko skala awal",
    ],
    message: "Halo Ritelindo, saya ingin bertanya tentang paket Usaha Awal.",
    action: "Tanya paket ini",
  },
  {
    type: "GROWTH",
    name: "Minimarket",
    description:
      "Rangkaian rak untuk minimarket dengan beberapa kategori produk dan alur belanja.",
    inclusions: [
      "Kombinasi rak tengah dan dinding",
      "Penataan untuk beberapa kategori",
      "Diskusi alur belanja toko",
    ],
    message: "Halo Ritelindo, saya ingin konsultasi paket rak minimarket.",
    action: "Konsultasi paket",
    featured: true,
  },
  {
    type: "CUSTOM",
    name: "Ruang Khusus",
    description:
      "Rencana rak untuk ruang, jenis produk, atau kebutuhan toko yang lebih spesifik.",
    inclusions: [
      "Penyesuaian komposisi rak",
      "Pertimbangan denah dan kategori",
      "Diskusi sebelum pemesanan",
    ],
    message: "Halo Ritelindo, saya ingin konsultasi kebutuhan rak custom.",
    action: "Bahas kebutuhan",
  },
];

export default function HomePage() {
  const generalMessage =
    "Halo Ritelindo, saya ingin konsultasi paket rak minimarket.";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SiteHeader whatsappHref={whatsappHref(generalMessage)} />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/retail-store.webp"
            alt="Rak gondola di lorong minimarket yang tertata rapi"
            fill
            preload
            sizes="100vw"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content wrap">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Ritelindo / Sistem Rak Toko
            </p>
            <h1 id="hero-title">
              Rak toko yang pas.
              <br />
              Ruang jual lebih
              <br />
              <span>teratur.</span>
            </h1>
            <p className="hero-copy">
              Paket rak minimarket dan perlengkapan toko B2B, direncanakan dari
              ukuran ruang, kategori produk, dan alur belanja.
            </p>
            <div className="hero-actions">
              <a
                className="button button-lime"
                href={whatsappHref(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi WA Gratis
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a className="text-link" href="#paket">
                Lihat pilihan paket <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-dot" /> Diskusikan kebutuhan toko Anda
              bersama tim kami
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>PLAN</span>
            <i />
            01 / 04
          </div>
        </section>

        <div className="proof-strip" aria-label="Solusi kebutuhan toko">
          <div className="wrap proof-inner">
            <span className="proof-label">PERENCANAAN BERDASARKAN</span>
            <span className="proof-item">
              <b>01</b> Rak gondola
            </span>
            <span className="proof-item">
              <b>02</b> Tata letak toko
            </span>
            <span className="proof-item">
              <b>03</b> Rekomendasi paket
            </span>
            <span className="proof-item">
              <b>04</b> Konsultasi kebutuhan
            </span>
          </div>
        </div>

        <section
          className="section packages-section"
          id="paket"
          aria-labelledby="packages-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">
                  <span className="eyebrow-line" /> Pilih konfigurasi
                </p>
                <h2 id="packages-title">
                  Rak sesuai ruang.
                  <br />
                  <span>Mulai dari skala toko.</span>
                </h2>
              </div>
              <p className="section-intro">
                Bandingkan kebutuhan awal, minimarket, atau ruang dengan
                spesifikasi khusus. Komposisi akhir dibahas berdasarkan denah
                toko Anda.
              </p>
            </div>
            <div
              className="package-grid"
              aria-label="Pilihan konfigurasi paket rak"
            >
              {packages.map((packageOption, index) => (
                <article
                  className={`package-row${packageOption.featured ? " package-row-featured" : ""}`}
                  key={packageOption.type}
                >
                  <div className="package-marker">
                    <span className="package-number">0{index + 1}</span>
                    <span className="package-type">{packageOption.type}</span>
                  </div>
                  <div className="package-copy">
                    <h3>{packageOption.name}</h3>
                    <p>{packageOption.description}</p>
                  </div>
                  <div className="package-detail">
                    <ul>
                      {packageOption.inclusions.map((inclusion) => (
                        <li key={inclusion}>{inclusion}</li>
                      ))}
                    </ul>
                    <a
                      className="package-link"
                      href={whatsappHref(packageOption.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {packageOption.action}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="package-disclaimer">
              Komposisi, ukuran, dan harga mengikuti spesifikasi toko serta
              ketersediaan. Hubungi tim kami untuk pembahasan dan penawaran.
            </p>
          </div>
        </section>

        <section
          className="section benefits-section"
          id="keunggulan"
          aria-labelledby="benefits-title"
        >
          <div className="wrap benefits-layout">
            <div className="benefits-copy">
              <p className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" /> Rencana yang lebih matang
              </p>
              <h2 id="benefits-title">
                Tata ruang,
                <br />
                atur <span>alur.</span>
              </h2>
              <p>
                Susunan rak ikut membentuk pengalaman belanja. Mulai dengan
                kebutuhan yang jelas agar setiap sudut toko bekerja lebih baik.
              </p>
              <a
                className="button button-green"
                href={whatsappHref(
                  "Halo Ritelindo, saya ingin konsultasi setup toko retail.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Diskusikan toko Anda
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="benefit-list">
              <article className="benefit-row">
                <span className="benefit-index">01</span>
                <div>
                  <h3>Mulai dari ukuran ruang</h3>
                  <p>
                    Sesuaikan pilihan rak dengan denah dan ruang gerak toko.
                  </p>
                </div>
                <span className="benefit-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
              <article className="benefit-row">
                <span className="benefit-index">02</span>
                <div>
                  <h3>Kelompokkan kategori produk</h3>
                  <p>
                    Rencanakan penempatan produk agar mudah ditemukan pelanggan.
                  </p>
                </div>
                <span className="benefit-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
              <article className="benefit-row">
                <span className="benefit-index">03</span>
                <div>
                  <h3>Pilih konfigurasi yang sesuai</h3>
                  <p>
                    Diskusikan tipe dan komposisi rak sebelum menentukan paket.
                  </p>
                </div>
                <span className="benefit-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
              <article className="benefit-row">
                <span className="benefit-index">04</span>
                <div>
                  <h3>Dapatkan arahan awal</h3>
                  <p>
                    Ceritakan rencana toko Anda untuk memulai konsultasi
                    kebutuhan.
                  </p>
                </div>
                <span className="benefit-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="consult-band" aria-labelledby="consult-title">
          <div className="wrap consult-inner">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> Mulai dari percakapan
              </p>
              <h2 id="consult-title">
                Ceritakan rencana
                <br />
                toko <span>Anda.</span>
              </h2>
            </div>
            <div className="consult-action">
              <p>
                Tim Ritelindo siap membantu Anda mengeksplorasi pilihan rak dan
                kebutuhan setup toko retail.
              </p>
              <a
                className="button button-lime"
                href={whatsappHref(
                  "Halo Ritelindo, saya ingin konsultasi gratis tentang paket rak toko.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi WA Gratis
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <span className="consult-caption">
                Respons awal melalui WhatsApp
              </span>
            </div>
          </div>
        </section>

        <section
          className="section faq-section"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="wrap faq-layout">
            <div className="faq-heading">
              <p className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" /> Pertanyaan umum
              </p>
              <h2 id="faq-title">
                Sebelum
                <br />
                mulai <span>belanja.</span>
              </h2>
              <p>Belum yakin harus mulai dari mana? Kami bantu arahkan.</p>
              <a
                className="button button-green"
                href={whatsappHref(
                  "Halo Ritelindo, saya ingin bertanya tentang paket rak toko.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya tim Ritelindo
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>
                  <span>Bagaimana cara memilih paket rak minimarket?</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>
                  Mulai dari ukuran ruang, jenis produk, dan kapasitas pajang
                  yang Anda butuhkan. Tim kami dapat membantu mendiskusikan
                  konfigurasi yang sesuai.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Apakah paket bisa disesuaikan dengan ukuran toko?</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>
                  Komposisi rak dapat dibicarakan berdasarkan ruang dan
                  kebutuhan toko Anda. Sampaikan perkiraan ukuran ruang saat
                  konsultasi agar diskusi lebih terarah.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  <span>
                    Informasi apa yang perlu disiapkan untuk konsultasi?
                  </span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>
                  Jika tersedia, siapkan ukuran ruang, foto atau denah toko, dan
                  gambaran kategori produk yang akan dijual. Anda tetap bisa
                  memulai konsultasi tanpa semuanya.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Bagaimana cara mendapatkan penawaran harga?</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>
                  Hubungi tim Ritelindo melalui WhatsApp untuk menyampaikan
                  kebutuhan. Penawaran dapat dibahas setelah spesifikasi dan
                  komposisi paket diketahui.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-top">
          <a
            className="brand brand-footer"
            href="#home"
            aria-label="Ritelindo, kembali ke atas"
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
          <p>Perlengkapan toko, direncanakan bersama.</p>
          <a
            className="footer-cta"
            href={whatsappHref(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>© {currentYear} Ritelindo</span>
          <span>Solusi rak toko &amp; perlengkapan retail</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappHref(generalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi gratis melalui WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-.1l-.4-.2-3.8 1 1-3.7-.3-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.1.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3Z" />
        </svg>
        <span>Chat WhatsApp</span>
      </a>
    </>
  );
}
