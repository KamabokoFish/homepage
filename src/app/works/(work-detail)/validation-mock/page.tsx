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
          <h2 className="font-bold text-xl">バリデーション・モック</h2>
          <img
            src={`/works-image/validation-mock.png`}
            alt={'valitation mock image'}
            className="mx-auto w-3/4 sm:w-3/5 rounded-lg"
          />
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-sm sm:text-base">
          <li className="flex flex-wrap flex-col items-start gap-2 ">
            <InfoBadge bgColor="green">Stack</InfoBadge>
            <span className="break-all">CSS,Javascript,Vanilla-Tilt.js,Netlify</span>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-2">
            <InfoBadge bgColor="red">Link</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://password-mock.netlify.app/'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://password-mock.netlify.app/
            </Link>
          </li>
          <li className="flex flex-col items-start flex-wrap gap-1 ">
            <InfoBadge bgColor="blue">Code</InfoBadge>
            <Link
              className="underline break-all"
              href={'https://github.com/KamabokoFish/validation-form'}
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/KamabokoFish/validation-form
            </Link>
          </li>
        </ul>
        <div className="mt-8 text-sm sm:text-base flex flex-col gap-2">
          <p>モダンなグラデ感でデザインした、パスワード入力欄のモックUIの試作。</p>
          <p>パスワードの隠蔽機能・正規表現を利用した簡易的なバリデーション機能を備えている。</p>
          <p>カード部分にマウスオーバーすると、Vanilla-Tilt.jsによって立体的に傾くのがちょっとしたこだわり。</p>
          <p>
            日々使うWebアプリのパスワード・バリデーションに使いにくさを感じていたため、自分が「こういうUIだと触っていて気持ちよいだろうな…」と感じるものをモックとして作成した。
          </p>
        </div>
      </article>
    </PageTrans>
  );
};

export default Page;
