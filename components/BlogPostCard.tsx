import React from 'react';
import Link from 'next/link';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
  };
}

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;