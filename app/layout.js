import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto_Slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "ArtArray",
  description: "Array of Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_Slab.className}>{children}</body>
    </html>
  );
}
