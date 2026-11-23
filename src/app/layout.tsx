import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.seoTitle, template: `%s - ${site.name}` },
  description: site.seoDescription,
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
