import MotionHome from "@/components/MotionHome";
import { links } from "@/utils/links";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <MotionHome>
      <main className=" grid place-content-center place-items-center gap-4 p-4">
        <div className=" flex place-items-center gap-4">
          <Avatar src="https://github.com/shallow90125.png" />
          <div className=" text-2xl">shallow90125</div>
        </div>
        <div className=" animate-gradient bg-[linear-gradient(to_right,theme(colors.purple.300),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.fuchsia.500),theme(colors.pink.500),theme(colors.pink.600),theme(colors.pink.700),theme(colors.pink.700),theme(colors.pink.700),theme(colors.pink.800),theme(colors.pink.800),theme(colors.pink.800),theme(colors.fuchsia.800),theme(colors.purple.800),theme(colors.violet.700),theme(colors.indigo.700),theme(colors.indigo.600),theme(colors.indigo.500),theme(colors.violet.500),theme(colors.violet.400),theme(colors.purple.400),theme(colors.purple.300))] bg-[length:600%_auto] bg-clip-text text-[12.5dvw] font-black text-transparent lg:text-[8rem]">
          souvlaki.dev
        </div>
        <div className=" flex place-items-center gap-4 p-4">
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
      </main>
    </MotionHome>
  );
}
