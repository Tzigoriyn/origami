import style from '../Main/Main.module.css';

// eslint-disable-next-line no-unused-vars
// import { Redirect, useHistory, withRouter } from 'react-router-dom';

const About = ({
    match,
    // lacation, ->if no needed no add
    history
}) => {
    // console.log(match);

    // if (Math.random() > 0.5) {
    //     return <Redirect to="/" />
    // }

    // const history = useHistory();

    // if (Math.random() > 0.6) {
    //     history.push('/');

    //     return null;//you should be return but do not use undefined
    // }

    // if (Math.random() > 0.6) {
    //     history.push('/');

    //     return null;//you should be return but do not use undefined
    // }


    return (
        <main className={style.main}>
            <h1 className={style.mainH1}>About {match.params.name} Page</h1>
        </main>
    );
}

export default About;
// export default withRouter(About); ___--->>> does not work properly!