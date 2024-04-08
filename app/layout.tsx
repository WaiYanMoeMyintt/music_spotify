import type { Metadata } from "next";
import "./globals.css";
import {Figtree} from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
export const metadata: Metadata = {
  title: "Spotify Music App",
  description: "Listen Music & Chill",
};
const inter = Figtree({subsets:['latin']})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
