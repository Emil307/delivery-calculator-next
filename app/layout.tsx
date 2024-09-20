import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter } from "@/app/ui/styles/fonts";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Калькулятор стоимости доставки",
  description:
    "Калькулятор для расчёта стоимости доставки посылки с учётом размера и веса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
