import React from 'react';
import TitlesItem  from './TitlesItem.js';

const TitlesList = ({ items, onRemove }) => {
  return (
    <div className="main">
      {items ? items.map(blog => <TitlesItem {...blog} onRemove={onRemove} />) : 'Loading...'}
    </div>
  );
};
export default TitlesList;