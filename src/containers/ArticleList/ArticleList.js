import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlePreview from './ArticlePreview';

import * as actionType from '../../actions/ArticleList';

import './ArticleList.css';

class ArticleList extends Component {

    componentWillMount = () => {
        this.props.onLoadArticles();
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <ul className="list-group list-group-flush article-list">
                    {this.props.articles.map((article,index) => {
                        return(<li className="list-group-item border-0" key={index}><ArticlePreview article={article}/></li>);
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.ArticleList.articles,
    isAddArticleListLoading: state.ArticleList.isAddArticleListLoading,
    isAddArtcleListFailed: state.ArticleList.isAddArtcleListFailed
});

const mapDispatchToProps = dispatch => ({
    onLoadArticles: () => dispatch(actionType.articleListLoadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);