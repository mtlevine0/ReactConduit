import React, { Component } from 'react';

import ArticleList from '../ArticleList/ArticleList';

class Author extends Component {

    componentWillMount = () => {

    }

    render() {
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{this.props.match.params.id}</h1>
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
                </div>
                <ArticleList />
            </div>
        );
    }
}

export default Author;