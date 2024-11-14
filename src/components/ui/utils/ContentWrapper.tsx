import React from 'react';

type Props = {
  children: React.ReactNode;
};

//コンテンツ全体の幅を制御するコンテナ(rootのlayout.tsxで利用)
const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <main className="mx-auto mt-24 px-6 w-11/12 max-w-3xl">{children}</main>;
};

export default ContentWrapper;
