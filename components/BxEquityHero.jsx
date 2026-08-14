import React from "react";

/**
 * BX Equity — Hero Section
 * Recriado a partir do SVG fornecido (BX_Equity.svg)
 *
 * Fonte usada no titulo, descricao e badge: Produkt Regular,
 * carregada via next/font/local em app/layout.js e exposta como
 * a CSS variable --font-produkt.
 */

function BxEquityLogo({ className }) {
  return (
    <svg
      viewBox="0 0 215 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BX Equity"
    >
      <path d="M54.5224 33.579H58.4954V6.84946H54.5224V1.80244H82.6985V11.3815H77.0222V6.84933H65.3588V17.3042H73.8737V14.781H78.8278V24.9779H73.8737V22.5058H65.3588V33.579H77.848V28.4285H83.6798V38.6266H54.5224V33.579Z" fill="white"/>
      <path d="M104.524 48V43.4155H108.189V34.1967C106.692 36.7715 103.286 39.1415 99.3122 39.1415C92.5006 39.1415 87.3921 34.4031 87.3921 25.5962V25.1842C87.3921 16.5321 92.5004 11.1241 99.5701 11.1241C103.957 11.1241 106.589 13.133 108.189 15.8108V11.6906H117.735V16.429H114.433V43.4154H117.633V47.9999L104.524 48ZM108.395 25.3388V24.9268C108.395 18.9013 105.66 16.0172 101.119 16.0172C96.423 16.0172 93.8422 19.2098 93.8422 25.0296V25.4416C93.8422 31.3643 96.7833 34.1967 100.861 34.1967C105.196 34.1967 108.395 31.3127 108.395 25.3388Z" fill="white"/>
      <path d="M140.542 34.0939C139.303 36.7212 136.31 39.1932 132.079 39.1932C126.917 39.1932 123.099 36.1546 123.099 28.7377V16.4291H119.847V11.6908H129.343V28.12C129.343 32.1884 130.994 33.991 134.504 33.991C137.703 33.991 140.542 31.8274 140.542 27.5017V16.4291H137.291V11.6908H146.838V34.0421H150.089V38.6266H140.542V34.0939Z" fill="white"/>
      <path d="M152.561 38.6267V34.0422H155.813V16.4293H152.51V11.6909H162.005V34.0422H165.359V38.6267H152.561ZM154.935 3.65694C154.935 1.5452 156.639 0 158.754 0C160.87 0 162.573 1.5452 162.573 3.65694C162.573 5.71702 160.87 7.31335 158.754 7.31335C156.639 7.31335 154.935 5.71702 154.935 3.65694Z" fill="white"/>
      <path d="M170.725 31.107V16.4291H167.112V11.6908H170.725V5.76802H176.968V11.6908H183.368V16.4291H176.968V30.6432C176.968 32.9607 178.104 34.1456 180.427 34.1456C181.459 34.1456 182.44 33.991 183.626 33.579V38.3692C182.388 38.7288 181.046 39.0897 179.24 39.0897C173.408 39.0897 170.725 36.2568 170.725 31.107Z" fill="white"/>
      <path d="M211.955 16.4291L198.796 48H190.9V43.4672H194.873L197.866 36.2566L188.991 16.429H185.997V11.6906H198.95V16.429H195.597L201.119 29.6644L206.331 16.429H202.924V11.6906H215V16.429L211.955 16.4291Z" fill="white"/>
      <path d="M40.9453 1.79741H49.8776L43.2544 10.4892L49.8273 19.1158H43.8951L37.3234 10.4892L42.4737 3.729L40.9453 1.79741Z" fill="#00AA77"/>
      <path d="M3.9609 6.88734L0 1.84099H17.1694C24.8059 1.84099 29.2437 4.77613 29.2437 11.4193V11.624C29.2437 15.3322 27.5927 18.1642 23.4125 19.4514C28.5217 20.5325 30.7914 23.2104 30.7914 28.1535V28.3599C30.7914 35.2079 26.2502 38.6572 18.1508 38.6572H3.87449L3.9609 6.88734ZM16.293 17.3404C20.8851 17.3404 22.6396 15.7434 22.6396 11.9844V11.7798C22.6396 8.27795 20.5749 6.88734 16.2422 6.88734H10.6686V17.3404H16.293ZM17.3254 33.6111C21.9175 33.6111 24.0331 31.603 24.0331 27.8441V27.6377C24.0331 23.8788 21.9685 21.974 16.861 21.974H10.6687V33.6111H17.3254Z" fill="white"/>
      <path d="M36.6411 1.80549H30.709L37.3321 10.4973L30.7593 19.1239H36.6914L43.2632 10.4973L36.6411 1.80549Z" fill="white"/>
    </svg>
  );
}

export default function BxEquityHero() {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6 py-24"
      style={{
        background: "linear-gradient(90deg, #002117 0%, #125E47 100%)",
      }}
    >
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Wordmark */}
        <BxEquityLogo className="h-10 w-auto sm:h-12" />

        {/* Subheading + Paragraph */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2
            className="text-[40px] font-normal text-white text-center"
            style={{
              fontFamily: "var(--font-produkt), Arial, sans-serif",
              fontWeight: 400,
	      fontSize: 32px,
              lineHeight: "120%",
              letterSpacing: "0",
            }}
          >
            Forward Thinking Investments
          </h2>

          <p
            className="max-w-xl text-base text-center"
            style={{
              fontFamily: "var(--font-produkt), Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            A real estate platform that buys undervalued and transitional
            assets, then manages them on-site rather than handing them off.
            That ownership work sharpens how BX Capital underwrites and turns
            up deals for BX Equity.
          </p>
        </div>

        {/* Badge */}
        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-2 bg-white" />
          <span
            className="text-xs font-medium uppercase tracking-[0.15em] text-white"
            style={{ fontFamily: "var(--font-produkt), Arial, sans-serif" }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
