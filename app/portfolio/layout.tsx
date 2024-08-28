import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Portfolio Bustomi",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-lilita">{children}</body>
    </html>
  );
}
