import React from 'react';
import { connect } from 'react-redux';
import PostsListActions from '../../actions/PostActions.js';
import  PostsList  from './PostsList';


class PostsListContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { fetchRemoveItem } = this.props;
    return <PostsList items={this.props.items} onRemove={fetchRemoveItem} />;
  }
}

export default connect(
  ({ blog }) => blog,
  PostsListActions,
)(PostsListContainer);