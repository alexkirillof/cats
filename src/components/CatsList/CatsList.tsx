import styles from './catsList.module.css'
import { CatsListProps } from '../../../src/components/CatsList/catsList.props.ts'
import { Cat } from '../../../src/components/Cat/Cat.tsx'
import { ICat } from '../../store/slices/catsSlice.ts'

export const CatsList = ({ cats, ...props }: CatsListProps) => {
  return (
    <ul className={styles.listWrapper} {...props}>
      {cats.map((cat: ICat) => (
        <Cat cat={cat} key={cat.id} />
      ))}
    </ul>
  )
}
