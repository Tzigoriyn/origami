/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Header.module.css";
import Navigation from "./Navigation"

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <Navigation><img src="white-origami-bird.png" alt="white origami" /></Navigation>
                <Navigation>Going to 1</Navigation>
                <Navigation>Going to 2</Navigation>
                <Navigation>Going to 3</Navigation>
                <Navigation>Going to 4</Navigation>
                <Navigation>Going to 5</Navigation>
                <Navigation>Going to 6</Navigation>
                <Navigation>Going to 7</Navigation>
                <Navigation>Going to 8</Navigation>
                <Navigation>Going to 9</Navigation>
                <Navigation>Going to 10</Navigation>
                <Navigation>Going to 11</Navigation>
            </ul>
        </nav>
    );
}

export default Header;
