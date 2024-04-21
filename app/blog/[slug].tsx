import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Header from '@/components/Header';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Fetch a list of all blog post slugs from your data source (API, file system, etc.)
  const slugs = ['post-1', 'post-2', 'post-3'];

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // or 'blocking' if you want to use ISR
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async ({
  params,
}) => {
  const { slug } = params || {};

  // Fetch the blog post data based on the slug from your data source
  const post = {
    id: 1,
    title: 'Example Blog Post',
    content: '<p>This is the content of the blog post...</p>',
  };

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;