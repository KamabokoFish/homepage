'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TbFolderOpen } from 'react-icons/tb';
import { AnimatePresence, motion, Variants } from 'framer-motion';

//delayしつつ全体にアニメーションすると、表示文字列が減ったときのちらつきを押さえられる
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const fileIconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    // indexの値に応じてdurationを遅くしていく(左から右に波のように表示させる)
    transition: { duration: index === 0 ? 1 : index * 0.2 + 1 },
  }),
  exit: (index: number) => ({
    opacity: 0,
    y: 15,
    transition: { duration: index === 0 ? 1 : index * 0.2 + 1 },
  }),
};

const BreadCrumbNav: React.FC = () => {
  const currentPath: string = usePathname();
  const currentPathArray: string[] = currentPath.split('/').filter(Boolean);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={currentPath}
          className="flex font-medium text-sm sm:text-base"
        >
          <AnimatePresence>
            <motion.span variants={fileIconVariants} initial="hidden" animate="visible" exit="exit">
              <Link className="flex justify-center items-center" href={'/'}>
                <TbFolderOpen />
                <span>/</span>
              </Link>
            </motion.span>

            {currentPathArray.map((path: string, index: number) => {
              // console.log(path, index);
              if (path) {
                // 現在いるページのURLに対応する文字列かどうかを判定
                const isCurrent: boolean = index === currentPathArray.length - 1;
                const joinedLinkUrl: string = `/${currentPathArray.slice(0, index + 1).join('/')}`;

                if (!isCurrent && !path.endsWith('/')) {
                  // 最後ではない文字列(URLのpath)には末尾にスラッシュを付与
                  path += '/';
                }

                return (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={itemVariants}
                  >
                    <Link href={joinedLinkUrl}>{path}</Link>
                  </motion.span>
                );
              }
            })}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BreadCrumbNav;
