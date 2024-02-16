import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 grid h-16 border-b border-divider bg-background">
      <div className=" mx-auto flex w-full max-w-screen-lg place-items-center gap-4 p-4">
        <Link href="/" className=" flex-none text-lg font-bold text-primary">
          souvlaki.dev
        </Link>
        <Menu />
      </div>
    </header>
  );
}
