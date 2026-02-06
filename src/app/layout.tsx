import type { Metadata } from "next";
import { Saira_Stencil_One, Tektur } from "next/font/google";
import "./globals.css";
import { Footer } from "components/Footer";
import { Header } from "components/header/Header";
import Image from "next/image";
import type { ReactNode } from "react";
import backgroundTexture from "../../public/background-texture.png";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin", "cyrillic"],
});
const sairaStencilOne = Saira_Stencil_One({
  variable: "--font-saira-stencil-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gymkhana Race - Автоклуб",
  description: "Автоклуб, специализирующийся на стиле gymkhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tektur.variable} ${sairaStencilOne.variable} antialiased`}
      >
        <main className={"flex overflow-hidden flex-col gap-16 min-h-screen"}>
          <Image
            src={backgroundTexture.src}
            width={backgroundTexture.width}
            height={backgroundTexture.height}
            className={"fixed top-0 left-0 w-full -z-1 select-none"}
            alt="backgroundTexture"
          />
          <Header />
          <div className={"grow flex flex-col gap-16"}>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
