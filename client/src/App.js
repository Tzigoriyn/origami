/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link, NavLink, Redirect, Switch, Routes } from 'react-router-dom';

import { getAll } from './services/getAll';
// import * as services from "./services/getAll" --> if we have more then one service in file!!!

import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Main from './components/Main';
import Footer from './components/Footer';
import style from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    }

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  componentDidMount() {
    // services.getAll() --> if we have more then one service in file!!!
    getAll()
      .then(posts =>
        this.setState({ posts }));
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });

  }

  getPost() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find(x => x.id === this.state.selectedPost)];
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick} />

          <Switch>
            <Route path='/' exact>
              <Main
                className={style.Posts}
                posts={this.getPost()}
              />
            </Route>
            <Route className={style.Posts} path='/about/:name' render={About} />
            {/* <Route className={style.Posts} path='/contact-us' render={ContactUs} /> */}
            {/* <Route className={style.Posts} path='/contact-us' render={(props) => <h1>Costum Contact Us Page</h1>} /> */}
            <Route className={style.Posts} path='/contact-us' render={() => <ContactUs />} />
            <Route render={() => <h1>Error Page!</h1>} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
