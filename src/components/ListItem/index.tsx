import * as C from './styles'
import { Item } from '../../types/item'
// import { useState } from 'react'

type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
  // const [isChecked, setIsChecked] = useState(item.done)

  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>
        {item.name} - {item.done.toString()}
      </label>
    </C.Container>
  )
}
