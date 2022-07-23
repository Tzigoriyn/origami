/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Component } from "react"
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
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu />

          <Main />
        </div>

      </div>
    );
  }
}

export default App;
