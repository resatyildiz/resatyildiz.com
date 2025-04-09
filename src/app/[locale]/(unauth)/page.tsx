import { Github, Linkedin, SunMedium, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LinkBox from '@/components/ui/LinkBox';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Page() {
  const t = useTranslations('About');
  const rootT = useTranslations('RootLayout');

  return (
    <>
      <h3 className="mt-5 text-2xl font-bold">{t('meta_title')}</h3>-
      <p className="text-base">{t('about_paragraph')}</p>
      <hr className="my-5" />
      <h5 className="mb-4 text-sm font-semibold">{rootT('some_links')}</h5>
      <div>
        <div className="grid grid-cols-12 gap-4">
          <LinkBox
            title="Github"
            href="https://github.com/resatyildiz"
            icon={<Github />}
            className="col-span-8"
          />
          <LinkBox className="col-span-4" bgImage />
          <LinkBox className="col-span-5" bgImage />
          <LinkBox
            title="LinkedIn"
            href="https://www.linkedin.com/in/resatyildiz/"
            icon={<Linkedin />}
            className="col-span-7"
          />
          <LinkBox
            title="Medium"
            href="https://medium.com/@resatyildiz"
            icon={<SunMedium />}
            className="col-span-6"
          />
          <LinkBox className="col-span-6" bgImage />
          <LinkBox className="col-span-3" bgImage />
          <LinkBox
            title="Twitter"
            href="https://twitter.com/resat_dev"
            icon={<Twitter />}
            className="col-span-9"
          />
        </div>
      </div>
    </>
  );
}
