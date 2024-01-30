import { Layout } from '../../components/Layout/Layout.tsx'
import styles from './favorites.module.css'
import { CatsList } from '../../../src/components/CatsList/CatsList.tsx'
import { useAppSelector } from '../../../src/hooks'

export const Favorites = () => {
  const favorites = useAppSelector((state) => state.cats?.favorites)
  return (
    <Layout>
      {favorites.length > 0 ? (
        <CatsList cats={favorites} />
      ) : (
        <div className={styles.emptyImg}>
          <img src='/cats/nofavorites.jpg' alt='В избранном пока пусто' />
          <h2>Нет котиков ((</h2>
        </div>
      )}
    </Layout>
  )
}
