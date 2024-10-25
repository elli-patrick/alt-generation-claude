import type { Metadata } from "next";
import { Wix_Madefor_Display as WixMadefor } from "next/font/google";
import "./globals.css";

const wixMadefor = WixMadefor({
  subsets: ["latin"],
  variable: "--font-wix-madefor", // Updated kebab-case variable name
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${wixMadefor.variable} antialiased`}>{children}</body>
    </html>
  );
}
