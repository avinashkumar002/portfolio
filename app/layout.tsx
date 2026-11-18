import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Avinash Kumar Singh | Frontend Developer",
  description: "Frontend developer building fast React and Next.js products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
