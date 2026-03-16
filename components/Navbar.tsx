import Link from "next/link";
import { Twitter, Instagram, Dribbble } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-6">

      <div className="text-2xl">👨‍💻</div>

      <div className="flex gap-10 text-gray-600">
        <Link href="https://www.fiverr.com/thedawnsun?public_mode=true">About</Link>
        <Link href="https://www.fiverr.com/thedawnsun?public_mode=true">Works</Link>
        <Link href="https://www.fiverr.com/thedawnsun?public_mode=true">Services</Link>
        <Link href="https://www.fiverr.com/thedawnsun?public_mode=true">Contact</Link>
      </div>

      <div className="flex gap-4 text-gray-500">
        <Dribbble size={18}/>
        <Twitter size={18}/>
        <Instagram size={18}/>
      </div>
    </nav>
  );
}