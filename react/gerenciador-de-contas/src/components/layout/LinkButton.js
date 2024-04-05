import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

const LinkButton = ({text,to,cor}) => {
  return (
    <Link className={`${styles.botao} ${styles[cor]}`} to={to}>{text}</Link>
  )
}

export default LinkButton