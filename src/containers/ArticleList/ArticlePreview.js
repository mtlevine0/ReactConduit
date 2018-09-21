import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ArticlePreview extends Component {
    render() {
        return (
            <div className="card border-0">
                <div className="card-body d-flex justify-content-between">
                    <Link to="/article/article1">
                        <h5 className="card-title">Article Title Goes Here</h5>
                        <p className="card-text">Some quick artcile description goes here.</p>
                    </Link>
                    <div>
                        <Link to="/author/mtlevine0">mtlevine0</Link>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        );
    }
}

export default ArticlePreview;