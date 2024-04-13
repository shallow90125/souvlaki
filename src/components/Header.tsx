import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 grid h-16 border-b border-divider bg-background">
      <div className=" mx-auto flex w-full max-w-screen-lg place-items-center gap-4 p-4">
        <Link
          href="/"
          className=" relative inline-flex flex-none items-center text-lg font-bold text-primary no-underline outline-none transition-opacity tap-highlight-transparent hover:opacity-80 active:opacity-disabled data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus"
        >
          souvlaki.dev
        </Link>
        <Menu />
      </div>
    </header>
  );
}
