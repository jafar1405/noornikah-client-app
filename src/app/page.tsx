import Hero from "@/components/Hero/hero";
import HomeHeader from "@/components/HomeHeader/page";
import HomeSearch from "@/components/HomeSearch/home-search";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SunIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div
        className="bg-cover bg-right-top bg-no-repeat bg-opacity-50"
        style={{ backgroundImage: "url(/Main-Banner.png)" }}
      >
        <div className="w-11/12 h-[550px] mx-auto text-white">
          <HomeHeader />
          <Hero />
        </div>
      </div>
      <div>
        <div className="w-11/12 mx-auto">
          <HomeSearch />
          <div className=" pt-20 pb-6">
            <Card className="flex flex-row justify-between border-0">
              <div>
                <CardHeader>
                  <CardDescription className="text-green-700">
                    ABOUT US
                  </CardDescription>
                  <CardTitle className="text-red-600 text-6xl">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-3/4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, similique voluptate obcaecati illo itaque
                    eligendi hic. Quidem sit autem vel dolorem, expedita sunt
                    repellat eos eaque dolores corrupti nam veritatis.
                  </p>
                  <ul className="my-6 flex flex-col space-y-2">
                    <li className="flex flex-row items-center space-x-2">
                      <SunIcon /> <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                      <SunIcon /> <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                      <SunIcon /> <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                      <SunIcon /> <span>Lorem ipsum dolor sit amet</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" variant="default">
                    Regsiter Now
                  </Button>
                </CardFooter>
              </div>
              <Image
                src={"/welcome-imge.png"}
                width={507}
                height={510}
                alt="welcome image"
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white">
        <div className="w-11/12 mx-auto">
          <Card className="bg-transparent border-0 text-white">
            <CardHeader className="text-center">
              <CardDescription className="text-white">FEATURES</CardDescription>
              <CardTitle className="text-white text-3xl">OUR FEATURE</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row">
              <Card className="border-0 bg-transparent items-center justify-center">
                <CardHeader className="items-center justify-center">
                  <CardDescription className="text-white text-center">
                    <TwitterLogoIcon />
                  </CardDescription>
                  <CardTitle className="text-white text-md">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent items-center justify-center">
                <CardHeader className="items-center justify-center">
                  <CardDescription className="text-white text-center">
                    <TwitterLogoIcon />
                  </CardDescription>
                  <CardTitle className="text-white text-md">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardContent>
              </Card>
              <Card className="flex-row border-0 bg-transparent items-center justify-center">
                <CardHeader className="items-center justify-center">
                  <CardDescription className="text-white text-center">
                    <TwitterLogoIcon />
                  </CardDescription>
                  <CardTitle className="text-white text-md">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent items-center justify-center">
                <CardHeader className="items-center justify-center">
                  <CardDescription className="text-white text-center">
                    <TwitterLogoIcon />
                  </CardDescription>
                  <CardTitle className="text-white text-md">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent items-center justify-center">
                <CardHeader className="items-center justify-center">
                  <CardDescription className="text-white text-center">
                    <TwitterLogoIcon />
                  </CardDescription>
                  <CardTitle className="text-white text-md">
                    WELCOME TO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-black text-gray-400">
        <div className="w-11/12 mx-auto p-8 flex flex-col items-center justify-center space-y-4">
          <Image
            src={"/Noor-Nikah-footer-Logo.svg"}
            alt="footer logo"
            width={150}
            height={80}
            className="opacity-50"
          />
          <p>Home | About | contact</p>
          <p>Copyright 2023 All rights resrver by Noornikah</p>
        </div>
      </div>
    </main>
  );
}
