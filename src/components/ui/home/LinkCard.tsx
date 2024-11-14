import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  icon: React.ReactNode;
  // gradientClass?: string; //グラデーションの指定
};

const LinkCard: React.FC<Props> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center p-3 sm:p-6 aspect-square rounded-lg shadow-xl duration-300 hover:shadow-2xl hover:scale-105 backdrop-blur-md bg-whiteTrans border border-white/20 text-white/90"
    >
      {icon}
    </Link>
  );
};

export default LinkCard;
