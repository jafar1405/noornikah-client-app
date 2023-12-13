"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/global";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {NAV_ITEMS.map((el) => (
          <NavigationMenuItem key={el.label}>
            <Link href={el.link} legacyBehavior passHref>
              <NavigationMenuLink>{el.label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
