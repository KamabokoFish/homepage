import React from 'react';
import InfoBadge from '@components/ui/works/InfoBadge';
import Link from 'next/link';
import PageTrans from '@components/ui/utils/PageTrans';

//MEMO:
//flexboxを指定すると、配下の要素内でテキストの折り返しがうまく効かないことがある
//明示的にbreak-allを指定すると親要素サイズに合わせて折り返される

const Page: React.FC = () => {
  return (
    <PageTrans>
      <article className="p-5 rounded-md shadow-md  backdrop-blur-lg bg-whiteTrans border border-white/20 text-white/90">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-bold text-xl">おみくじ2024</h2>
          <img
            src={`/works-image/roullet-app.png`}
            alt={'roullet app image'}
            className="mx-auto w-3/4 sm:w-3/5 rounded-lg"
          />
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-sm sm:text-base">
          <li className="flex flex-wrap flex-col items-start gap-2 ">
            <InfoBadge bgColor="green">Stack</InfoBadge>
            <span className="break-all">CSS,Javascript,Vanta.js,Three.js</span>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-2">
            <InfoBadge bgColor="red">Link</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://nyowa-rou-2024.netlify.app/'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://nyowa-rou-2024.netlify.app/
            </Link>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-1 ">
            <InfoBadge bgColor="blue">Code</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://github.com/KamabokoFish/nyowa-roulette'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/KamabokoFish/nyowa-roulette
            </Link>
          </li>
        </ul>
        <div className="mt-8 text-sm sm:text-base flex flex-col gap-2">
          <p>お正月に(友達と)新年の運勢を占うため、趣味で作ったルーレットおみくじ。</p>
          <p>ルーレットの中心をクリックした際に、JavascriptでCSSのrotateを加算することでぐるぐる回転させている。</p>
          <p>
            最初はルーレットのみを配置していたが、すこし殺風景だったため、Vanta.jsで生成したドットを背景に展開することでおしゃれ(？)な感じに…。
          </p>
        </div>
      </article>
    </PageTrans>
  );
};

export default Page;
