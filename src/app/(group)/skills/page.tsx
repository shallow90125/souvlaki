import TagCard from "@/components/TagCard";
import { skills } from "@/utils/skills";

export default function Skill() {
  return (
    <>
      <p className=" text-center">
        技術とその習熟度 (相対的)
        <br />
        星5 (よく使う) - 星1 (文法 基本だけ)
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] place-content-center place-items-stretch gap-4 place-self-stretch sm:grid-cols-3">
        {(Object.keys(skills) as (keyof typeof skills)[]).map((v, i) => (
          <TagCard key={i} icon={v} />
        ))}
      </div>
      <iframe
        className=" w-full max-w-[25rem] rounded-2xl"
        src="https://open.spotify.com/embed/track/4tFGNFIIZ9ANSewxGZyiDD?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
}
