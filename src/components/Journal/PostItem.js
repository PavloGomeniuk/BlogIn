import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = ({ title, text, _id, backgroundURL, onRemove }) => (
        <section className="main-section">
            <div className="main-section-img_1" style={{ backgroundImage: `url(${backgroundURL})` }}></div>
            <div className="main-section-text">
                <p>
                    {title}
                </p>
                <span>
                    {text}
                </span>
                <button>
                    Continue Reading 
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </button>   
                <a href="javascript://" onClick={onRemove.bind(this, _id)}>Delete post</a>
            </div>
        </section>
);

export default PostItem;