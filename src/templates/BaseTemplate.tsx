/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="bg-title bg-cover pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-800">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl text-gray-600">
              {AppConfig.jobTitle}&nbsp;@&nbsp;
              <Link
                href={AppConfig.companyURL}
                className="underline hover:no-underline"
              >
                {AppConfig.company}
              </Link>
            </h2>
          </div>

          <div className="flex justify-between py-1">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
