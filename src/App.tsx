import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'comprar o pão na padaria',
      done: false,
    },
    {
      id: 2,
      name: 'comprar o bolo na padaria',
      done: false,
    },
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* área de adicionar nova tarefa */}

        {list.map((item, index) => (
          <ListItem />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App


29:59