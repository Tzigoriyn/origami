/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Component } from "react"

import { getAll } from "./services/getAll";
// import * as services from "./services/getAll" --> if we have more then one service in file!!!

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer"
import style from './App.module.css';

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>

//     </div>
//   );
// }

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
    this.setState({ selectedPost: id })

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

          <Main
            className={style.Posts}
            posts={this.getPost()}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
