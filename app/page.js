import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Danh Sách Bài Viết</h2>
          <p className="text-gray-600 mt-2">Khám phá các bài viết mới nhất từ API.</p>
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 12).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}