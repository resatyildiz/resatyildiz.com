'use client';

import Error from 'next/error';

export default function GlobalError(props: { params: { locale: string } }) {
  return (
    <html lang={props.params.locale}>
      <body>
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
}
