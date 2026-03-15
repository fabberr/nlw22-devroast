import { Geist, JetBrains_Mono } from "next/font/google";
import { Navbar, NavbarBrand, NavbarLink } from "@/components/navbar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${jetbrainsMono.variable} font-sans`}>
        <Navbar>
          <NavbarBrand>devroast</NavbarBrand>
          <NavbarLink href="/leaderboard">leaderboard</NavbarLink>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
