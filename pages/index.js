import Image from "next/image";
import { Manrope } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Navbar />
    </main>
  );
}
