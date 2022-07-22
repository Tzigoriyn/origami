/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from "./components/Header";
import Menu from "./components/Menu"
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header className={style.headerListItem} />

      <div className={style.cotainer}>
        <Menu className={style.container} />
      </div>

    </div>
  );
}

export default App;
