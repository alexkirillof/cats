import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const currentRoute = location.pathname
  return (
    <div className={styles.header}>
      <div
        className={`${styles.menuItem} ${
          currentRoute === '/cats/' ? styles.active : ''
        }`}
      >
        <NavLink to={'/'}>Все котики</NavLink>
      </div>
      <div
        className={`${styles.menuItem} ${
          currentRoute === '/cats/favorites' ? styles.active : ''
        }`}
      >
        <NavLink to={'/favorites'}>Любимые котики</NavLink>
      </div>
    </div>
  )
}

export default Header
