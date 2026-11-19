import type { Metadata } from "next";
import { Footer } from "@/modules/layout/footer";
import { Header } from "@/modules/layout/header";
import { SmoothScroll } from "@/shared/components/smooth-scroll";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <a href="#noi-dung" className="skip-link">Chuyển đến nội dung</a>
        <SmoothScroll>
          <Header />
          <main id="noi-dung" tabIndex={-1}>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
