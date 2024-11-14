'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
    },
  },
};

//framer-motionを使ったページ変遷アニメーション用のコンポーネント
//各page.tsxで使う
const PageTrans: React.FC<Props> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTrans;
