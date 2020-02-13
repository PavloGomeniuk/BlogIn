import React from 'react';
import PostItem  from './PostItem';

const PostsList = ({ items}) => {
    return (
        <React.Fragment>
            {items ? items.map(blog => <PostItem {...blog} />) : 'Loading...'}
            <section className="main-section-bottom">
                <div className="main-section-bottom-line"></div>
                <div className="main-section-bottom-btn">
                    <button>
                        <svg className="left" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
                        Previous
                    </button>
                    <button>
                        Next
                        <svg className="right" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </button>
                </div>
            </section>
        </React.Fragment>
    );
};
export default PostsList;