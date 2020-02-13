import React from 'react';
import { connect } from 'react-redux';
import PostsListActions from '../../actions/PostActions.js';
import  PostsList  from './PostsList';
import './journal.scss';


class PostsListContainer extends React.Component {
	componentWillMount() {
    	const { fetchItems } = this.props;
    	fetchItems();
  	}
  	render() {
    	return <PostsList items={this.props.items} />;
  	}
}

export default connect(
  ({ blog }) => blog,
  PostsListActions,
)(PostsListContainer);