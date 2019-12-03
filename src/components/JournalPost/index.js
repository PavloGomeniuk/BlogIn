import React from 'react';
import JournalItem from './JournalItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostsListActions from '../../actions/PostActions.js';

class JournalPost extends React.Component {
  componentDidMount() {
    const { post, postId, fetchItem } = this.props;
    if (!post) {
      fetchItem(postId);
    }
  }
  render() {
    const { post } = this.props;
    return !post ? (
      'Loading...'
    ) : (
      <JournalItem text={post && post.text} title={post && post.title} />
    );
  }
}

const mapStateToProps = ({ blog }, { match }) => ({
  post: blog.items && blog.items.filter(post => post._id === match.params.id)[0],
  postId: match.params.id,
});

export default withRouter(
  connect(
    mapStateToProps,
    PostsListActions,
  )(JournalPost),
);
