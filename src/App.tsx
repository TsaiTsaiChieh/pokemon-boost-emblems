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
    <div className='bg-light-3 min-h-screen dark:bg-slate-900'>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme} Mode
      </button>
      <Emblem />
    </div>
  )
}

export default App
