import React from 'react';

type Props = {
  children: React.ReactNode;
};

const WorksItems: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h2 className="text-white font-bold text-lg text-center">趣味で作ったもの</h2>
      <section className="mt-6 flex flex-col gap-10 justify-center items-center">{children}</section>
    </>
  );
};

export default WorksItems;
