import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingNavDemo from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aditya Moharana - Developer",
  description:
    "Aditya is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavDemo />
          {/* <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto"> */}
          <div className="flex-1 bg-white  dark:bg-black min-h-screen  border border-transparent lg:border-neutral-200 dark:lg:border-zinc-700 overflow-y-auto dark:text-white">
            {children}
            <Toaster />
            <Footer />
          </div>
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
