"use client";

import { links } from "@/utils/links";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className=" flex flex-grow place-items-center justify-end gap-4 md:justify-center">
      <div className=" hidden flex-grow place-items-center gap-4 md:flex">
        {links.map((v, i) => (
          <Link
            key={i}
            href={`/${v}`}
            className=" relative inline-flex items-center text-medium text-foreground no-underline outline-none transition-opacity tap-highlight-transparent hover:opacity-80 active:opacity-disabled data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus"
          >
            {v}
          </Link>
        ))}
      </div>
      <Dropdown className=" md:hidden">
        <DropdownTrigger>
          <Button isIconOnly size="sm" className=" md:hidden">
            <IconMenu2 />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {links.map((v, i) => (
            <DropdownItem key={i} href={`/${v}`} as={Link}>
              {v}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
