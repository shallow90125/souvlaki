import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "souvlaki.dev",
  description: "souvlaki.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className=" dark">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
