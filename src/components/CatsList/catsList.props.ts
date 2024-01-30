import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICat } from '../../store/slices/catsSlice.ts'

export interface CatsListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cats: ICat[]
}
