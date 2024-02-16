import {
  SiGithub,
  SiGoogleforms,
  SiTwitter,
} from "@icons-pack/react-simple-icons";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function Contact() {
  return (
    <>
      <div className=" grid grid-cols-[24px,_1fr] items-center gap-4 self-stretch p-4 pt-0">
        <div className=" col-span-2 place-self-stretch p-4 pt-0 text-center">
          お問い合わせ
        </div>
        <SiGoogleforms color="default" />
        <Link
          href="https://forms.gle/ocyP8gynbdpvo8JR7"
          color="foreground"
          showAnchorIcon
          isExternal
        >
          Google フォーム
        </Link>
        <div className=" col-span-2 place-self-stretch p-4 text-center">
          その他アカウント
        </div>
        <SiGithub />
        <Link
          href="https://github.com/shallow90125"
          color="foreground"
          showAnchorIcon
          isExternal
        >
          shallow90125
        </Link>
        <SiTwitter color="default" />
        <Link
          href="https://twitter.com/shallow90125"
          color="foreground"
          showAnchorIcon
          isExternal
        >
          shallow90125
        </Link>
      </div>
      <Image
        alt="spotify"
        src="https://spotify-recently-played-readme.vercel.app/api?user=c0mbpbnibfl59fuoj9u0cl5gj&count=1"
      />
      <iframe
        className=" w-full max-w-[25rem] rounded-2xl"
        src="https://open.spotify.com/embed/track/0oxYB9GoOIDrdzniNdKC44?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
}
