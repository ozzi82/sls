import "./globals.css";
import { Inter } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer"; // if you have one
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.sunlitesigns.com"),
  title: "Wholesale Sign Manufacturing | UL Listed Channel Letters & LED Signage | Sunlite Signs",
  description: "Premium wholesale sign manufacturer specializing in UL listed trimless channel letters, FCO letters, illuminated signage, blade signs, and custom LED solutions. 48-hour quote turnaround, 3-week door-to-door delivery. Serving sign companies across USA & Canada since 25+ years.",
  keywords: "wholesale sign manufacturer, UL listed channel letters, trimless channel letters wholesale, FCO letters wholesale, illuminated signs manufacturer, LED signage wholesale, custom channel letters, wholesale blade signs, commercial signage manufacturing, architectural signage wholesale, sign fabrication USA, wholesale sign company, custom illuminated letters, face-lit channel letters, halo-lit channel letters, cast acrylic letters wholesale, dimensional signage manufacturer, commercial sign wholesale",
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`dark antialiased ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans">

        <ScrollToTop />
        <div className="print:hidden">
          <Header />
        </div>
        <main>{children}</main>
        <div className="print:hidden">
          <FloatingCTA />
          <Footer />
        </div>
      </body>

    </html>
  );
}
