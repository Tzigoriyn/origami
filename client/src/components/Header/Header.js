/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Header.module.css";
import Navigation from "./Navigation"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <Navigation><Link to="/"><img src="white-origami-bird.png" alt="white origami" /></Link></Navigation>
                <Navigation><Link to="/">Home</Link></Navigation>
                <Navigation><Link to="/about">About</Link></Navigation>
                <Navigation><Link to="/contact-us">Contact us</Link></Navigation>
                <Navigation><Link to="/">Going to 4</Link></Navigation>
                <Navigation><Link to="/">Going to 5</Link></Navigation>
                <Navigation><Link to="/">Going to 6</Link></Navigation>
                <Navigation><Link to="/">Going to 7</Link></Navigation>
                <Navigation><Link to="/">Going to 8</Link></Navigation>
                <Navigation><Link to="/">Going to 9</Link></Navigation>
                <Navigation><Link to="/">Going to 10</Link></Navigation>
                <Navigation><Link to="/">Going to 11</Link></Navigation>
                {/* <Link to="/about">Abouth</Link> */}
            </ul>
        </nav>
    );
}

export default Header;
