/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Header.module.css";
import Navigation from "./Navigation"

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="white-origami-bird.png" alt="white origami" /></li>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
                <Navigation>Going to 11</Navigation>
            </ul>
        </nav>
    );
}

export default Header;
