import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnonPort — Anonymous Offshore VPS & Dedicated Servers",
  description: "Offshore VPS, dedicated servers, Windows RDP, GPU hosting and domains across seven jurisdictions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
