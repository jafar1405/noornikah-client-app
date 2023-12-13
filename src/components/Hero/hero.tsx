import Link from "next/link";
import { PersonIcon, MobileIcon, Link1Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
// import { FaUserPlus, FaPlug, FaPhone } from 'react-icons/fa' // replace this line

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-xl text-green-400 ">Welcome</h1>
      <h2 className="text-6xl leading-snug font-semibold text-white my-4">
        Find Your Perfect <br /> Match Here!!
      </h2>
      <nav className="flex justify-center mt-4">
        <Link href="/signup" className="flex items-center px-4 py-2">
          <PersonIcon className="mr-2" /> Signup {/* use shadcn/ui icon */}
        </Link>
        <Link href="/connect" className="flex items-center px-4 py-2">
          <Link1Icon className="mr-2" /> Connect {/* use shadcn/ui icon */}
        </Link>
        <Link href="/contact" className="flex items-center px-4 py-2">
          <MobileIcon className="mr-2" /> Contact {/* use shadcn/ui icon */}
        </Link>
      </nav>
    </div>
  );
}
