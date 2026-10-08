import "../styles.css";

const pageTitle = "Paket Rak Minimarket & Setup Toko Retail | Ritelindo";
const pageDescription =
  "Cari paket rak minimarket untuk toko retail? Konsultasikan kebutuhan rak gondola, layout toko, dan paket setup toko retail bersama Ritelindo. Tanya gratis via WhatsApp.";
const socialImage = "/images/retail-og.jpg";

export const metadata = {
  metadataBase: new URL("https://storack.id"),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/packets",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Ritelindo",
    url: "/packets",
    title: pageTitle,
    description:
      "Rencanakan toko lebih rapi dengan paket rak minimarket yang sesuai kebutuhan. Konsultasi gratis bersama tim Ritelindo.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Lorong toko retail dengan rak-rak gondola tertata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Temukan paket rak minimarket dan konsultasikan setup toko retail Anda bersama Ritelindo.",
    images: [socialImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
