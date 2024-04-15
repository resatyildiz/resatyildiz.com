import Link from 'next/link';
import { cloneElement, createElement, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface LinkBoxProps {
  title?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  bgImage?: boolean;
}

const LinkBox = ({
  title,
  href,
  icon: Icon,
  className,
  bgImage,
}: LinkBoxProps) => {
  const Container = href
    ? createElement(Link, {
        href,
      })
    : createElement('div');

  return cloneElement(
    Container,
    {
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className: cn(
        'block rounded-lg border border-gray-200 p-4 transition-all ',
        className,
        bgImage ? `bg-title bg-cover` : 'bg-gray-50',
        href && 'hover:cursor-pointer hover:shadow',
      ),
    },

    <>
      {Icon && Icon}
      <div className="my-2">{title}</div>
    </>,
  );
};

export default LinkBox;
