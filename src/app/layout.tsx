import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Eyad", template: "%s - Eyad" },
  description:
    "Eyad Mahmoud is a Senior UI/UX & Product Designer based in Alexandria, Egypt, designing highly usable SaaS, mobile and web products for clients across the USA, Europe and the Middle East.",
  openGraph: {
    title: "Eyad Mahmoud — Senior UI/UX & Product Designer",
    description:
      "Research-driven product design, usability and scalable design systems for global clients.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
