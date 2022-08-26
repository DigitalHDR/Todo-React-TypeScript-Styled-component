import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('')

  const handlekeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
        onEnter(inputText)
        setInputText('')
    }
  }

  return (
    <C.Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="adicionar nova tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handlekeyUp}
      />
    </C.Container>
  )
}
