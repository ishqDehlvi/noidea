import React from 'react';
import Header from '@/components/Header';
import BlogPostCard from '@/components/BlogPostCard';

const BlogListingPage: React.FC = () => {
  // Fetch blog post data from an API or static data
  const blogPosts = [
    { id: 1, title: 'Post 1', excerpt: 'This is the excerpt for post 1' },
    { id: 2, title: 'Post 2', excerpt: 'This is the excerpt for post 2' },
    // ...
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogListingPage;