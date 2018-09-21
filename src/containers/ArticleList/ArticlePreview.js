import React, { Component } from 'react';

import TimeAgo from 'react-timeago'

import { Link } from 'react-router-dom';

class ArticlePreview extends Component {
    render() {
        return (
            <div className="card border-0">
                <div className="card-body d-flex justify-content-between">
                    <Link to={"/article/" + this.props.article.slug}>
                        <h5 className="card-title">{this.props.article.title}</h5>
                        <p className="card-text">{this.props.article.body}</p>
                    </Link>
                    <div>
                        <Link to={"/author/" + this.props.article.author.username}>{this.props.article.author.username}</Link>
                    </div>
                </div>
                <div className="card-footer">
                    <small><TimeAgo date={this.props.article.updatedAt} /></small>
                </div>
            </div>
        );
    }
}

export default ArticlePreview;