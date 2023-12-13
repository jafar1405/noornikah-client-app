import React from "react";
import NavMenu from "@/components/NavMenu/nav-menu";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="flex flex-row justify-between py-4">
      <div>
        <Image src={"/Logo.png"} width={160} height={80} alt="Noor Nikah" />
      </div>

      <div className="flex flex-row space-x-4 items-center">
        <NavMenu />
        <MagnifyingGlassIcon />
        <div>
          <Button variant="default" className="mr-2">
            Register
          </Button>
          <Button variant="default">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
