import PageTrans from '@components/ui/utils/PageTrans';
import WorkItem from '@components/ui/works/WorkItem';
import WorksItems from '@components/ui/works/WorksItems';
import React from 'react';

type WorkArrayItemType = {
  id: number;
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  info: string;
};

const workArray: WorkArrayItemType[] = [
  {
    id: 1,
    href: 'roullet-app',
    imgSrc: 'roullet-app',
    alt: 'roullet app image',
    title: 'おみくじ2024',
    info: '新年を占うためのおみくじ🎍',
  },
  {
    id: 2,
    href: 'validation-mock',
    imgSrc: 'validation-mock',
    alt: 'validation mock image',
    title: 'バリデーション・モック',
    info: 'パスワード入力欄のモックUI',
  },
];

const Page: React.FC = () => {
  return (
    <PageTrans>
      <WorksItems>
        {workArray.map((item: WorkArrayItemType): React.ReactNode => {
          return (
            <WorkItem
              key={item.id}
              href={item.href}
              imgSrc={item.imgSrc}
              alt={item.alt}
              title={item.title}
              info={item.info}
            />
          );
        })}
      </WorksItems>
    </PageTrans>
  );
};

export default Page;
