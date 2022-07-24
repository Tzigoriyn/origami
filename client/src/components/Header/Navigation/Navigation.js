/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <li className={style.listItem}>{
            (typeof props.children !== "string") ?
                props.children :
                <a href="#">{props.children}</a>}
        </li>
    );
}

export default Navigation;