import localFont from "next/font/local";
import "./globals.css";

const produkt = localFont({
  src: "./fonts/produkt-regular.woff2",
  variable: "--font-produkt",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "BX Equity — Forward Thinking Investments",
  description:
    "A direct investment platform putting growth equity into consumer, technology, and operating businesses. Deals come through the family's operating network and counterparty relationships built over years, and that same network feeds BX Capital and BX Realty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={produkt.variable}>{children}</body>
    </html>
  );
}
