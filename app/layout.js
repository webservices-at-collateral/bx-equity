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
    "A real estate platform that buys undervalued and transitional assets, then manages them on-site rather than handing them off.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={produkt.variable}>{children}</body>
    </html>
  );
}
