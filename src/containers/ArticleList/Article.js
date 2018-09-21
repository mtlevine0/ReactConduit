import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionType from '../../actions/Article';

import './ArticleList.css';

class Article extends Component {

    componentWillMount = () => {
        this.props.onLoadArticle(this.props.match.params.id);
    }

    render() {
        return(
            <div className=" d-flex justify-content-center">
                <div className="card border-0 article">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">{this.props.article.title}</h5>
                            <p className="card-text">{this.props.article.body}</p>
                        </div>
                        <Link to={"/author/" + this.props.article.author.username}>
                            <div>{this.props.article.author.username}</div>
                        </Link>
                    </div>
                </div> 
            </div>
       
        );
    }
}

const mapStateToProps = state => ({
    article: state.Article.article,
    isGetArticleLoading: state.Article.isGetArticleLoading,
    isGetArtcleFailed: state.Article.isGetArtcleFailed
});

const mapDispatchToProps = dispatch => ({
    onLoadArticle: (slug) => dispatch(actionType.articleLoadData(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
