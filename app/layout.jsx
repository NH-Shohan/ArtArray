import { Roboto_Slab } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto_Slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "ArtArray",
  description: "Array of Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_Slab.className}>
        <div className="width_container mx-auto">
          <div>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
