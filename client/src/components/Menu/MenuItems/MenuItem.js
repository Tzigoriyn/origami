/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./MenuItem.module.css";

const MenuItem = ({
    id,
    onClick,
    isSelected,
    children
}) => {
    let classes = [style.listItem]

    if (isSelected) {
        classes.push(style.listItemSelected)
    }

    return (
        <ul>
            <li className={classes.join(" ")}>
                <a href="#" onClick={() => onClick(id)}>
                    {/* <a href="#" onClick={onClick.bind(null, id)}> */}
                    {children}
                </a>
            </li>
        </ul >
    );
}

export default MenuItem;