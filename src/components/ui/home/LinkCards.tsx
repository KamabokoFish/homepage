import React from 'react';
import LinkCard from './LinkCard';
import { PiGithubLogoBold } from 'react-icons/pi';
import { SiZenn } from 'react-icons/si';
import { TbBrandBluesky } from 'react-icons/tb';

type LinkInfo = {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
};

//各アイコン共通のスタイル
const iconStyle = 'w-3/5 h-3/5';

const linkInfoArray: LinkInfo[] = [
  {
    id: 0,
    name: 'Github',
    url: 'https://github.com/KamabokoFish',
    icon: <PiGithubLogoBold className={iconStyle} />,
  },
  {
    id: 1,
    name: 'Zenn',
    url: 'https://zenn.dev/fukakusa_kadoma',
    icon: <SiZenn className={iconStyle} />,
  },
  {
    id: 2,
    name: 'BlueSky',
    url: 'https://bsky.app/profile/wasabi-sushi.bsky.social',
    icon: <TbBrandBluesky className={iconStyle} />,
  },
];

const LinkCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-12 ">
      {linkInfoArray.map((link) => {
        return <LinkCard key={link.id} href={link.url} icon={link.icon} />;
      })}
    </div>
  );
};

export default LinkCards;
