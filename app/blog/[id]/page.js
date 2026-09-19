import Header from '@/components/Header';

async function getPostDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post detail');
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const post = await getPostDetail(id);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <a 
          href="/" 
          className="inline-block mb-6 text-indigo-600 font-medium hover:underline"
        >
          &larr; Back to Blog
        </a>
        <article className="bg-white p-8 rounded-2xl shadow-sm border">
          <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
            Post ID: {post.id} (User #{post.userId})
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">
            {post.title}
          </h1>
          <div className="prose text-gray-700 leading-relaxed space-y-4">
            <p>{post.body}</p>
            <p>Hello!</p>
          </div>
        </article>
      </div>
    </main>
  );
}
