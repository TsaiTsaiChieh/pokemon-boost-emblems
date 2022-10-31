import {useEffect, useState} from 'react'

import Emblem from './page/Emblem'

const App = () => {
  const [theme, setTheme] = useState<string>('light')
  useEffect(() => {
    theme === 'light' ?
      document.documentElement.classList.remove('dark') :
      document.documentElement.classList.add('dark')
  }, [theme])

  return (
    <div
      className='bg-light-4 dark:bg-dark-1 min-h-screen
    bg-texture w-full relative'
    >
      {/* <div
        id='gloss'
        className='w-full h-478 fixed bg-gloss'
      ></div> */}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme} Mode
      </button>
      <Emblem />
    </div>
  )
}

export default App
