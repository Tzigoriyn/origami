/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import MenuItem from './MenuItems';

import style from './Menu.module.css';

const Menu = () => {
    // const [currentItem, setCurrentItem] = useState();

    return (
        <aside className={style.aside}>
            <MenuItem>Going to 1</MenuItem>
            <MenuItem>Going to 2</MenuItem>
            <MenuItem>Going to 3</MenuItem>
            <MenuItem>Going to 4</MenuItem>
            <MenuItem>Going to 5</MenuItem>
            <MenuItem>Going to 6</MenuItem>
            <MenuItem>Going to 7</MenuItem>
            <MenuItem>Going to 8</MenuItem>
            <MenuItem>Going to 9</MenuItem>
            <MenuItem>Going to 10</MenuItem>
            <MenuItem>Going to 11</MenuItem>
        </aside>
    );
}

export default Menu;