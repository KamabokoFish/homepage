import React from 'react';
import ContentCard from './ContentCard';

const ContentsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-12 ">
      <ContentCard
        href="/works"
        title="Works"
        desc="作ったもの"
        imgUrl="/neko-stamp-white.png"
        gradientClass="bg-gradient-to-br from-teal-500 to-rose-200"
        isExternal={false}
      />
      <ContentCard
        href="https://sizu.me/kamaboko_sushi"
        title="Blog"
        desc="日々のことなど"
        imgUrl="/neko-stamp-white.png"
        gradientClass="bg-gradient-to-br from-purple-400 to-amber-100"
        isExternal={true}
      />
    </div>
  );
};

export default ContentsCards;
