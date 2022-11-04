import {useEffect} from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import TranslateIcon from '@mui/icons-material/Translate'
import {Container} from '@mui/system'
import {useTranslation} from 'react-i18next'

import {useAppSelector} from '../store/hook'
import {useAppDispatch} from '../store/hook/index'
import {toggleDarkMode, toggleLanguage} from '../store/reducers/persistSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const {isDarkMode, language} = useAppSelector((state) => state.persist)
  const {i18n} = useTranslation()
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }
  const changeLanguage = () => {
    dispatch(toggleLanguage())
  }

  // language
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  // dark mode
  useEffect(() => {
    isDarkMode ?
      document.documentElement.classList.add('dark') :
      document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <Container className='relative w-12 h-12 mb-11'>
      <div className='flex absolute right-0 px-10'>
        <button onClick={changeLanguage} className='text-4xl'>
          <TranslateIcon
            className='text-4xl dark:text-dark-4 text-light-1'
          />
        </button>
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
