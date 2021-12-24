import style from './Login.module.scss';

import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';



const LoginPage = () => {


    return (
        <div className={style.form_container}>
            <form className={style.form} >
                <h2>Sign In</h2>
                <div className={style.errorMsg}></div>
                <label htmlFor="email">Email</label>
                <div className={style.input_content}>
                    <EmailIcon className={style.icons} />
                    <input id="email" type="text" name="email" placeholder="Enter your email" />
                </div>
                <label htmlFor="pass">Password</label>
                <div className={style.input_content}>
                    <LockIcon className={style.icons} />
                    <input id="pass" type="password" name="password" placeholder="Enter your password" />
                </div>
                <button>Sign In</button>
                <p> Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
}


export default LoginPage;