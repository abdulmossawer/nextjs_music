"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Catogeries">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/shoe">Sneaker</HoveredLink>
            <HoveredLink href="/shoes">Sports</HoveredLink>
            <HoveredLink href="/shoes">Casual</HoveredLink>
            <HoveredLink href="/shoes">Gym</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
       
      </Menu>
    </div>
  );
}

export default Navbar;
