import { Layout } from '../../components/Layout/Layout.tsx'
import { useEffect } from 'react'
import { getCats } from '../../store/actions/getCats.ts'
import { ICat } from '../../../src/store/slices/catsSlice.ts'
import { CatsList } from '../../../src/components/CatsList/CatsList.tsx'
import { useAppDispatch, useAppSelector } from '../../../src/hooks'
import styles from './main.module.css'
import { useInView } from 'react-intersection-observer'
import { setPage } from '../../store/slices/catsSlice.ts'

export const Main = () => {
  const loading = useAppSelector((state) => state.cats?.loading)
  const page = useAppSelector((state) => state.cats.page)
  const dispatch = useAppDispatch()
  const { ref, inView } = useInView({
    threshold: 0.5
  })
  useEffect(() => {
    if (page < 10) {
      dispatch(getCats(page))
    }
  }, [dispatch, page])

  const cats: ICat[] = useAppSelector((state) => state.cats.cats)

  useEffect(() => {
    if (cats && inView && page < 10) {
      dispatch(setPage(page + 1))
    }
  }, [inView])
  return (
    <Layout>
      {loading && page === 0 ? (
        <h2 className={styles.loadingText}>З А Г Р У З К А...</h2>
      ) : (
        <>
          <CatsList cats={cats} />
          {page < 10 && (
            <h4 className={styles.addContent}>... загружаем еще котиков ...</h4>
          )}
        </>
      )}
      <div className={styles.observer} ref={ref}></div>
    </Layout>
  )
}
