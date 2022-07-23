/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./MenuItem.module.css";

const MenuItem = (props) => {
    // const [currentItem, setCurrentItem] = useState();

    return (
        <ul>
            <li className={style.listItem}>
                <a href="#">{props.children}</a>
            </li>
        </ul >
    );
}

export default MenuItem;