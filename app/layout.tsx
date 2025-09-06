import type { Metadata } from "next";
import { Inconsolata } from 'next/font/google';
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-mono', // Use a generic variable name like --font-mono
});


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "yourDrive",
  description: "your personal drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
