import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Lizit",
  description: "Explore Lizit's Easy-to-Use Test Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="p-3 md:p-8 lg:p-16 xl:p-20">{children}</main>
      </body>
    </html>
  );
}
