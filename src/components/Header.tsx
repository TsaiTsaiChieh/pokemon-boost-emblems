import {useEffect} from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import {Container} from '@mui/system'

import {useAppSelector} from '../store/hook'
import {useAppDispatch} from '../store/hook/index'
import {toggleDarkMode} from '../store/reducers/persistSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const {isDarkMode} = useAppSelector((state) => state.persist)
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }
  useEffect(() => {
    isDarkMode ?
      document.documentElement.classList.add('dark') :
      document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <Container className='relative w-12 h-12'>
      <div className='flex absolute right-0 px-10'>
        <button onClick={handleToggleDarkMode} className='text-4xl'>
          {isDarkMode ? (
            <ModeNightIcon fontSize='large' className='text-dark-4' />
          ) : (
            <LightModeIcon fontSize='large' className='text-light-1' />
          )}
        </button>
      </div>
    </Container>
  )
}


export default Header
