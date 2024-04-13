'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleClick = (val: string | number) => {
    router.push(pathname, { locale: val as string });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-lg border border-gray-100 px-4 py-1 text-sm transition-all hover:border-gray-200">
          {locale.toUpperCase()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {AppConfig.locales.map((item) => (
          <DropdownMenuItem key={item} onClick={() => handleClick(item)}>
            {item.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
