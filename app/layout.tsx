import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter } from "@/app/ui/styles/fonts";

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
