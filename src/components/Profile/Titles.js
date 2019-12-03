import React from 'react';
import { connect } from 'react-redux';
import PostsListActions from '../../actions/PostActions.js';
import  TitlesList  from './TitlesList';


class Titles extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { fetchRemoveItem } = this.props;
    return <TitlesList items={this.props.items} onRemove={fetchRemoveItem} />;
  }
}

export default connect(
  ({ blog }) => blog,
  PostsListActions,
)(Titles);