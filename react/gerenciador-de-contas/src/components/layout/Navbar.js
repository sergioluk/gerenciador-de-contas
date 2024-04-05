import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/criar-conta">Criar Conta</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar