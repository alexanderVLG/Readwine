import React from 'react';
import Layout from '../components/layout';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();


  return (
    <>
      <Layout>
        <h2>Блог о вине</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
}
