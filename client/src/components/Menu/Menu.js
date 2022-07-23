/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import MenuItem from "./MenuItems";
import { MENU_ITEMS } from "./menueConstans"

import style from './Menu.module.css';

const Menu = ({
    onMenuItemClick
}) => {
    const [currentItem, setCurrentItem] = useState();

    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <aside className={style.aside}>{
            MENU_ITEMS.map(x =>
                <MenuItem key={x.id}
                    id={x.id}
                    isSelected={x.id === currentItem}
                    onClick={menuItemClickHandler}
                >
                    Going to {x.id}
                </MenuItem>)
        }
        </aside>
    );
}

export default Menu;