import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts } from 'redux/posts/posts.actions';
import { selectIsLoading, selectPosts } from 'redux/posts/posts.selectors';
import Post from './post.list.item';
import Loading from '../shared/loading';

function PostsRoute({ posts, isLoading, fetchPosts }) {
  useEffect(() => {
    if (posts === null) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  return (
    <div>
      <h1 className="title">Posts</h1>
      {isLoading && <Loading></Loading>}
      {posts && posts.map(post => <Post key={post.id} {...post} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  posts: selectPosts
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsRoute);
