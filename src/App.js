import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './containers/Header';
import Home from './containers/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register';
import Article from './containers/ArticleList/Article';
import Author from './containers/Author/Author';

class App extends Component {

  componentWillMount = () => {
  }

  render() {
    return (
      <main className="container">
        <Header />
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/article/:id" component={Article}/>
          <Route path="/author/:id" component={Author}/>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
