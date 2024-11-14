import Link from 'next/link';
import React from 'react';
import BreadCrumbNav from './BreadCrumbNav';

const Header: React.FC = () => {
  return (
    <header className="mx-auto px-6 w-11/12 max-w-3xl sticky top-10 bg-whiteTrans  rounded-full shadow-xl backdrop-blur-md border border-white/20 z-50 text-white">
      <div className="flex justify-between items-center h-14 w-full">
        <h1 className="font-bold">
          <Link href={'/'}>KAMABOKO</Link>
        </h1>
        <BreadCrumbNav />
      </div>
    </header>
  );
};

export default Header;
