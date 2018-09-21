import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ArticleList.css';

class Article extends Component {

    render() {
        return(
            <div className=" d-flex justify-content-center">
                <div className="card border-0 article">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">Article Title Goes Here</h5>
                            <p className="card-text">Some quick artcile description goes here.</p>
                        </div>
                        <Link to="/author/mtlevine0">
                            <div>mtlevine0</div>
                        </Link>
                    </div>
                </div> 
            </div>
       
        );
    }
}

export default Article;