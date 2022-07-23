/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Component } from "react"

import { getAll } from "./services/getAll";
// import * as services from "./services/getAll" --> if we have more then one service in file!!!

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
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
      posts: []
    }
  }

  componentDidMount() {
    // services.getAll() --> if we have more then one service in file!!!
    getAll()
      .then(posts =>
        this.setState({ posts }));
  }

  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu />

          <Main className={style.Posts} posts={this.state.posts} />
        </div>

      </div>
    );
  }
}

export default App;
