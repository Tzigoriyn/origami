/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Header.module.css';
import Navigation from './Navigation';
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                {/* <Navigation><Link to="/"><img src="white-origami-bird.png" alt="white origami" /></Link></Navigation>
                <Navigation><Link to="/">Home</Link></Navigation>
                <Navigation><Link to="/about">About</Link></Navigation>
                <Navigation><Link to="/contact-us">Contact us</Link></Navigation>
                <Navigation><Link to="/about/pesho">Pesho</Link></Navigation>
                <Navigation><Link to="/about/gosho">Gosho</Link></Navigation>
                <Navigation><Link to="/about/dafina">Dafina</Link></Navigation>
                <Navigation><Link to="/about/suzi">Suzi</Link></Navigation>
                <Navigation><Link to="/about/jeny">Jeny</Link></Navigation>
                <Navigation><Link to="/about/iva">Iva</Link></Navigation>
                <Navigation><Link to="/about/paco">Paco </Link></Navigation>
                <Navigation><Link to="/about/eli">Eli </Link></Navigation> */}
                {/* <Link to="/about">Abouth</Link> */}
                {/* activStyle */}
                {/* <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/"><img src="white-origami-bird.png" alt="white origami" /></NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/">Home</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about">About</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/contact-us">Contact us</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/pesho">Pesho</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/gosho">Gosho</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/dafina">Dafina</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/suzi">Suzi</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/jeny">Jeny</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/iva">Iva</NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/paco">Paco </NavLink></Navigation>
                <Navigation><NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/eli">Eli </NavLink></Navigation> */}
                {/* activClassName */}
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/"><img src="white-origami-bird.png" alt="white origami" /></NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/">Home</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about">About</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/contact-us">Contact us</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/pesho">Pesho</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/gosho">Gosho</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/dafina">Dafina</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/suzi">Suzi</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/jeny">Jeny</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/iva">Iva</NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/paco">Paco </NavLink></Navigation>
                <Navigation><NavLink activeClassName='navigation-link-class' exact={true} to="/about/eli">Eli </NavLink></Navigation>
            </ul>
        </nav>
    );
}

export default Header;
