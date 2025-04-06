import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "RegisterKaro",
  description: "RegisterKaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth
    bg-stone-500">
      <body>
        {children}
      </body>
    </html>
  );
}
