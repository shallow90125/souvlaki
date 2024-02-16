export default function Home() {
  const birthday = {
    year: 2002,
    month: 6,
    date: 21,
  };
  const age = (() => {
    const today = new Date();
    const a = new Date(today.getFullYear(), birthday.month - 1, birthday.date);

    const age = today.getFullYear() - birthday.year;

    return today < a ? age - 1 : age;
  })();

  return (
    <>
      <p>
        {`${birthday.year}年 6月 生まれ (${age}歳)`}
        <br />
        大阪国際工科専門職大学 工科学部 情報工学科
        <br />
        IoTシステムコース 在学中 (2025年 3月 卒業見込み)
        <br />
        就職先未定
        <br />
        <br />
        2023年 1月-2月 (20日間)
        <br />
        SIer企業にてインターン (臨地実務実習)
        <br />
        2023年 10月-11月 (30日間)
        <br />
        組み込み系企業にてインターン (臨地実務実習)
        <br />
        <br />
        趣味 嗜好
        <br />
        <br />
        ミンク・ホロウの世捨て人
        <br />
        プログラミング
        <br />
        音楽 (シューゲイズ プログレ ポストパンク)
        <br />
        技術記事を読むこと
        <br />
        映画 (タランティーノ)
        <br />
        型安全
        <br />
        FPSゲーム
      </p>
      <iframe
        className=" w-full max-w-[25rem] rounded-2xl"
        src="https://open.spotify.com/embed/track/5CXokdWISVHIcq4BsKwDvJ?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
}
