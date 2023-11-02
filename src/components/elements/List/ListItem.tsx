import { PropsWithChildren } from 'react'
import styles from './List.module.scss'

export function ListItem<T>({
  children,
  isSelected,
  itemId,
  onClickItem,
}: PropsWithChildren<{
  itemId: T
  isSelected: boolean
  onClickItem?: (itemId: T) => void
}>) {
  const isClickable = !!onClickItem
  const listItemClasses = `${styles.list_item} ${isClickable ? styles.clickable : ''} ${
    isSelected ? styles.selected : ''
  }`
  const handleClick = () => {
    isClickable && onClickItem(itemId)
  }

  return (
    <li className={listItemClasses} onClick={handleClick}>
      {children}
    </li>
  )
}
