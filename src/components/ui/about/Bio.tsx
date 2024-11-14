import Image from 'next/image';
import React from 'react';

const Bio: React.FC = () => {
  return (
    <>
      <article className="p-5 sm:p-6 aspect-square rounded-md shadow-md  backdrop-blur-lg bg-whiteTrans border border-white/20 text-white/90">
        <div className="mx-auto flex flex-col items-center justify-center">
          <Image className="rounded-full" src={'/profile_icon.jpg'} alt="Profile Icon" width={80} height={80} />
          <p className="font-bold">Kamaboko</p>
          <small>かまぼこ</small>
        </div>
        <div className="mt-8 text-sm sm:text-base flex flex-col gap-3">
          <h3 className="font-bold">プロフィール</h3>
          <p>フロントが好きなデベロッパーです。</p>
          <p>
            もともとの専攻は法律系なのですが、知り合いにプログラミングをしてる人がたくさんいた影響で、いつの間にやら自身もプログラミングをするようになりました🌵
          </p>
          <p>
            最初はHTML/CSSあたりから入門して、そのあとはPHP(Wordpressを触るため)・Javascriptを勉強し、さらにそのあとはWebアプリケーション方面の技術全般に関心を持つようになりました。Typescript/React/Angularあたりは、特によくさわります。
          </p>
          <p>
            どちらかというとフロントエンドであれこれ見た目を作ったり、見た目を背後から支えるロジックを書いたりするのが好きですが、バックエンドやインフラ系の技術領域にも常に関心があります(とはいえ、勉強がなかなか追いつかないのがちょっとした悩みです…。)
          </p>
          <h3 className="font-bold">好きなTech</h3>
          <ul className="pl-4 list-disc">
            <li>Javascript/Typescript</li>
            <li>React/Angular/Vue</li>
            <li>Rust/OCaml</li>
            <li>Neovim</li>
            <li>PremierPro(映像編集)</li>
          </ul>
          <h3 className="font-bold">資格</h3>
          <ul className="pl-4 list-disc">
            <li>AWS Certified Developer - Associate</li>
            <li>AWS Certified Solutions Architect - Associate</li>
          </ul>
          <h3 className="font-bold">趣味</h3>
          <ul className=" pl-4 list-disc">
            <li>プログラミング</li>
            <li>料理(特にフレンチと和食)</li>
            <li>美術館巡り(特に現代美術)</li>
            <li>ギャラリー巡り</li>
            <li>読書</li>
            <li>お散歩</li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Bio;
