import PageTrans from '@components/ui/utils/PageTrans';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const NotFound: React.FC<Props> = ({ children }) => {
  return (
    <PageTrans>
      <h2 className="flex flex-col justify-center  items-center gap-2 font-bold text-2xl text-white">
        <span className="scale-125"> 👻 </span>
        <span>ページがないよ！</span>
      </h2>
    </PageTrans>
  );
};

export default NotFound;
