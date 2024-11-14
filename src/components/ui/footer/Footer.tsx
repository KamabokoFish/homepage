import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="sticky top-[95vh] flex justify-center items-center mx-auto w-11/12 max-w-3xl mt-9 h-10 text-sm text-slate-300">
      <span>KAMABOKO {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
