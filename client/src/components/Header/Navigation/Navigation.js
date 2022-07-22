/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Navigation.module.css";

const Navigation = (props) => {
    return (
        <li className={style.listItem}>
            <a href="#">{props.children}</a>
        </li>
    );
}

export default Navigation;