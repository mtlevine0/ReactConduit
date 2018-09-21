import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import ArticlePreview from './ArticlePreview';

import * as actionType from '../../actions/ArticleList';

import './ArticleList.css';

class ArticleList extends Component {

    componentWillMount = () => {
        this.props.onLoadArticles();
        console.log(this.props.articles);
        console.log(this.props.isAddArtcleListFailed);
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
    articles: state.articles,
    isAddArticleListLoading: state.isAddArticleListLoading,
    isAddArtcleListFailed: state.isAddArtcleListFailed
});

const mapDispatchToProps = dispatch => ({
    onLoadArticles: () => dispatch(actionType.articleListLoadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);