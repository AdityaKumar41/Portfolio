import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingNavDemo from "@/components/Navbar";

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
            <Footer />
          </div>
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
