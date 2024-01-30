import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICat } from '../../store/slices/catsSlice.ts'

export interface CatProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cat: ICat
}
