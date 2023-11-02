// Data Source
import { ListItem } from '@/components/elements/List/ListItem'
import { List } from '@/components/elements/List/List'
// styled-components
import { getUsers } from '@/data/getUsers'
import { User } from '@/models/user/type'
import { useEffect, useState } from 'react'
import styles from './UserList.module.css'

// CSS Modules

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedIds, setSelectedIds] = useState<Id<'User'>[]>([])

  const hasUserId = (selectedIds: Id<'User'>[], userId: Id<'User'>) => {
    return selectedIds.some((id) => id === userId)
  }
  const handleClick = (selectedIds: Id<'User'>[], userId: Id<'User'>) => {
    if (hasUserId(selectedIds, userId)) {
      const newIds = selectedIds.filter((id) => id !== userId)
      setSelectedIds(newIds)
    } else {
      setSelectedIds([...selectedIds, userId])
    }
  }

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
  })
  return (
    <List>
      {users.map((user) => (
        <ListItem<Id<'User'>>
          key={user.id}
          itemId={user.id}
          isSelected={hasUserId(selectedIds, user.id)}
          onClickItem={(id: Id<'User'>) => handleClick(selectedIds, id)}
        >
          <div className={styles.user_list_item}>
            <div className={styles.usr_icon_wrapper}>
              <img className={styles.usr_icon} src={user.picture} alt={'ユーザーアイコン'} />
            </div>
            <div className={styles.usr_info_wrapper}>
              <div className={styles.usr_name}>{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export { UserList }
