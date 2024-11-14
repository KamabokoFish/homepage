import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { HiOutlineExternalLink } from 'react-icons/hi';

type Props = {
  href: string;
  title: string;
  desc: string;
  imgUrl: string;
  gradientClass: string; //グラデーションの指定
  isExternal: boolean; // リンクが外部リンクの場合はアイコンを表示する
};

//親コンポーネントからグラデーション関連のスタイルを受け取ってtw-mergeで結合
const baseStyle =
  'p-3 sm:p-6 aspect-square rounded-lg shadow-xl duration-300 hover:shadow-2xl hover:scale-105 relative text-white';

const ContentCard: React.FC<Props> = ({ href, title, desc, imgUrl, gradientClass, isExternal }) => {
  return (
    <Link href={href} className={twMerge(baseStyle, gradientClass)}>
      <h3 className="flex items-end text-xl sm:text-3xl font-medium ">
        <span>{title}</span>
        {isExternal && <HiOutlineExternalLink className="scale-75" />}
      </h3>
      <small className="text-sm ">{desc}</small>
      <img alt="cat foot stamp" src={imgUrl} className="absolute bottom-0 right-0 aspect-auto z-0 w-6/12" />
    </Link>
  );
};

export default ContentCard;
