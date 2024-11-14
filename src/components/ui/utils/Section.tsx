import React from 'react';

//位置調整用にマージンをpropで受け取る
type Props = {
  children: React.ReactNode;
  mt?: string;
};

const Section: React.FC<Props> = ({ children, mt }) => {
  return <section className={mt}>{children}</section>;
};

export default Section;
