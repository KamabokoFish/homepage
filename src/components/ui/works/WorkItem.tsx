import React from 'react';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  info: string;
};

// /worksで表示されるそれぞれのリンクカード
const WorkItem: React.FC<Props> = ({ children, href, imgSrc, alt, title, info }) => {
  return (
    <Link
      href={`/works/${href}`}
      className="flex flex-col justify-center items-center gap-3 w-full  sm:w-10/12 aspect-[1/0.8] pt-6 pb-4 rounded-lg shadow-xl duration-300 hover:shadow-2xl hover:scale-105 backdrop-blur-md bg-whiteTrans border border-white/20 text-white/90"
    >
      <img src={`/works-image/${imgSrc}.png`} alt={alt} className="w-3/4 rounded-lg" />
      <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
      <p className="text-sm sm:text-base">{info}</p>
    </Link>
  );
};

export default WorkItem;
