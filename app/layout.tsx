// Css
import "@/styles/globals.css";

// Next
import { Metadata } from "next";
import clsx from "clsx";

// Config
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Componentes
import { Navbar } from "@/components/menu/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="relative bg-slate-50/80 flex flex-col h-screen">
          <Navbar />
          <main className="w-full flex">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
