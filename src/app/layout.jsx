import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets:["latin"],
})

export const metadata = {
  title: {
    default: "The Flamin Fork",
    template: "%s | The Flamin Fork",
  },
  description: "Best Restaurants in The town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppins.className}`}
      >
        <header className="px-5 md:px-10 py-1 flex justify-between gap-5 items-center bg-stone-800 ">
          <Link href={"/"}>
            {/* <img src="/logo.png" className="w-16" alt="" /> */}
            <Image width={120} height={120}  src="/logo.png" className="w-16" alt=""></Image>
          </Link>
          <div className="space-x-5 ">
            <Link prefetch={false} className="btn" href={"/foods"}>
              Foods
            </Link>
            <Link className="btn" href={"/reviews"}>
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
