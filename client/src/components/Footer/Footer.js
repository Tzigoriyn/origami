/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <ul>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 1</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 2</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 3</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 4</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 5</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 6</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 7</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 8</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 9</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 10</a></li>
                <li className={style.listItem}><a className={style.listItemA} href="#">Going to 11</a></li>
                <li className={style.listItem}><img src="/blue-origami-bird-flipped.png" alt="blue flipped" /></li>
            </ul>
            <p className={style.FooterP}>Software University &copy; 2019</p>
        </footer>
    );
}

export default Footer;