import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: string;
  bgColor?: 'red' | 'green' | 'blue' | 'default';
};

type BadgeStylesType = Record<'red' | 'green' | 'blue' | 'default', string>;

const badgeStyles: BadgeStylesType = {
  red: 'bg-pink-100/90 text-pink-600',
  green: 'bg-green-100/90 text-green-600',
  blue: 'bg-blue-100/90 text-blue-600',
  default: 'bg-gray-100/90 text-gray-600',
};

const baseStyle = 'rounded-full px-2 py-0.5 text-xs sm:text-sm font-semibold ';

const InfoBadge: React.FC<Props> = ({ children, bgColor = 'default' }) => {
  const style = bgColor ? badgeStyles[bgColor] : badgeStyles.default;

  return (
    <>
      <span className={twMerge(baseStyle, style)}>{children}</span>
    </>
  );
};

export default InfoBadge;
