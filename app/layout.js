import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
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
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
