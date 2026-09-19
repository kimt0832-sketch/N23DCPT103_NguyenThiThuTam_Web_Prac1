import Badge from './Badge';

export default function BlogCard({ post }) {
  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col justify-between">
      <div>
        <Badge label="Technology" color="indigo" />
        <h2 className="font-bold text-lg mt-2 mb-1 line-clamp-2">{post.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.body}</p>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-400">User #{post.userId}</span>
        <a 
          href={`/blog/${post.id}`} 
          className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-500 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}