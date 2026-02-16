import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Industrias Jaber - Excellence in Coffee Machinery",
  description:
    "Premium solutions for every stage of coffee production, from harvesting to the perfect final grind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${workSans.variable} font-display antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
