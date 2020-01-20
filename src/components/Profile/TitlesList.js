import React from 'react';
import TitlesItem  from './TitlesItem.js';

const TitlesList = ({ items, onRemove }) => {
  return (
    <React.Fragment>
      {items ? items.map(blog => <TitlesItem {...blog} onRemove={onRemove} />) : 'Loading...'}
    </React.Fragment>
  );
};
export default TitlesList;