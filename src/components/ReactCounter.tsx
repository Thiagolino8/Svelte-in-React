import { useStore } from '@nanostores/react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { sharedCount } from '../store'

interface Props {
  title?: string
}

export const ReactCounter = ({title}: Props) => {
  const [count, setCount] = useState(0)
  const $count = useStore(sharedCount)
  const increment = () => setCount((count) => count + 1)
  return (
    <div>
      <a href='https://reactjs.org' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
      {title ? <h2>{title}</h2> : null}
      <button onClick={increment}>React Counter is {count}</button>
      <button onClick={() => sharedCount.set($count + 1)}>Shared Counter is {$count}</button>
    </div>
  )
}
