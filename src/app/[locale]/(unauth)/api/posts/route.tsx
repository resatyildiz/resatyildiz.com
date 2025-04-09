export async function GET() {
  return new Response(
    JSON.stringify({
      posts: [
        {
          id: 1,
          title: 'Hello World',
          content: 'This is my first post!',
        },
      ],
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
