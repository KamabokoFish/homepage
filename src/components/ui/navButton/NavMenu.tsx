'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbHome } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { TbApps } from 'react-icons/tb';

const NavMenu: React.FC = () => {
  // ナビゲーションの表示状態を管理するステート
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ボタンがクリックされた際にナビゲーション展開の表示/非表示を切り替える関数
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed bottom-[6vh] left-0 right-0 mx-auto bg-[rgba(5,69,119)]/30 rounded-3xl shadow-xl backdrop-blur-md border border-white/20 z-50 text-white   duration-500 ease-in-out ${isOpen ? 'rounded-3xl w-48 h-52' : ' w-28 h-14'}`}
    >
      {/* ナビゲーションメニュー */}
      <nav
        className={`flex justify-center items-center  delay-300 duration-300 ${isOpen ? 'opacity-100 visible h-3/4 ' : 'opacity-0 invisible'}`}
      >
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
          <ul
            onClick={toggleMenu}
            className={`flex flex-col justify-center items-start gap-4 w-full text-2xl font-medium `}
          >
            <li>
              <Link className="flex gap-1 justify-center items-center" href={'/'}>
                <TbHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className="flex gap-1 justify-center items-center" href={'/about'}>
                <CgProfile />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link className="flex gap-1 justify-center items-center" href={'/works'}>
                <TbApps />
                <span>Works</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* メインのボタン */}
      <button
        onClick={toggleMenu}
        className={`w-full h-14 absolute left-0 bottom-0 flex justify-center items-center text-xl `}
      >
        <div className="h-8 overflow-hidden">
          <div className={`duration-500 ${isOpen ? '-translate-y-6' : 'translate-y-1'} `}>
            <span
              className={`flex gap-1 justify-center items-center duration-300 ease-in-out ${isOpen ? 'invisible opacity-0' : 'visible opacity-100'}`}
            >
              <span>Menu</span>
              <FaRegPaperPlane />
            </span>
            <span
              className={`flex gap-1 justify-center items-center duration-300 ease-in-out ${isOpen ? 'opacity-100 visible ' : 'opacity-0 invisible'}`}
            >
              <span>Close</span>
              <IoIosCloseCircleOutline className="scale-125" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default NavMenu;
