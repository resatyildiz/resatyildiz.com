import { Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PostLayout',
  });

  return {
    title: t('latest_posts'),
    description: t('latest_posts'),
  };
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Page() {
  const tp = useTranslations('PostLayout');

  const data = use(getData());

  return (
    <div>
      <h2 className="text-2xl font-medium">{tp('page_title')}</h2>
      <ul className="my-5">
        {data.posts.map((post: any) => (
          <li
            key={post.id}
            className="grid grid-cols-12 rounded-sm border border-gray-100 p-4"
          >
            <div className="col-span-10 flex flex-col items-start justify-start gap-0">
              <h3 className="!my-0 !py-0 font-medium">{post.title}</h3>
              <p className="!my-1 !py-0 text-sm text-gray-500">
                {post.content}
              </p>
            </div>
            <div className="col-span-2 flex justify-end">
              <Link href="/posts">{tp('view_all')}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
