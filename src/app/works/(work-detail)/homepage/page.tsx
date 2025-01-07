import React from 'react';
import InfoBadge from '@components/ui/works/InfoBadge';
import Link from 'next/link';
import PageTrans from '@components/ui/utils/PageTrans';

const Page: React.FC = () => {
  return (
    <PageTrans>
      <article className="p-5 rounded-md shadow-md  backdrop-blur-lg bg-whiteTrans border border-white/20 text-white/90">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-bold text-xl">このホームページ</h2>
          <img
            src={`/works-image/homepage.png`}
            alt={'homepage screenshot'}
            className="mx-auto w-3/4 sm:w-3/5 rounded-lg"
          />
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-sm sm:text-base">
          <li className="flex flex-wrap flex-col items-start gap-2 ">
            <InfoBadge bgColor="green">Stack</InfoBadge>
            <span className="break-all">Typescript,React,Next.js(AppRouter),Tailwind,Framer-Motion</span>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-2">
            <InfoBadge bgColor="red">Link</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://www.kamaboko.tech/'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.kamaboko.tech/
            </Link>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-1 ">
            <InfoBadge bgColor="blue">Code</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://github.com/KamabokoFish/homepage'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/KamabokoFish/homepage
            </Link>
          </li>
        </ul>
        <div className="mt-8 text-sm sm:text-base flex flex-col gap-2">
          <p>自身の活動やリンク類をまとめるために作ったホームページ。</p>
          <p>
            東京旅行に行った際、国立西洋美術館やアーティゾン美術館の常設展で、印象派の絵画や純粋抽象絵画を眺めたことがデザインを思いついたきっかけ。「クリーン&コンテンポラリー(Clean&Contemporary)」をコンセプトに、グラデーションと磨りガラスのような抜け感を多用した今時のかわいいデザインに仕上げた。
          </p>
          <p>
            Typescript,React,Nextjs(AppRouter),Tailwind,Framer-Motionなどのフレームワークやライブラリを利用している(特にNextjsのAppRouterを使ってみたかった……。)。
          </p>
          <p>
            画面の変遷に合わせてなめらかに移り変わるURLナビゲーション、鮮やかなグラデーションと併せてきれいに透ける磨りガラスUI、タイル型のコンポーネント配置、ぬるっと動くフローティングボタンなど、(お仕事だとなかなかできない)表現を多用している。
          </p>
        </div>
      </article>
    </PageTrans>
  );
};

export default Page;
