import {useEffect} from 'react'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import TranslateIcon from '@mui/icons-material/Translate'
import {Container} from '@mui/system'
import {useTranslation} from 'react-i18next'

import {useAppSelector, useAppDispatch} from '../../store/hook'
import {toggleDarkMode, toggleLanguage} from '../../store/reducers/persistSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const {isDarkMode, language} = useAppSelector((state) => state.persist)
  const {t, i18n} = useTranslation()
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }
  const changeLanguage = () => {
    dispatch(toggleLanguage())
  }

  // language
  useEffect(() => {
    i18n.changeLanguage(language)
    document.title = t('titles.main')
  }, [language])
  // dark mode
  useEffect(() => {
    isDarkMode ?
      document.documentElement.classList.add('dark') :
      document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <Container className='mb-10 py-4 px-8'>
      <div className='flex justify-between'>
        <div className='flex text-4xl items-center'>
          <CatchingPokemonIcon className='text-4xl dark:text-dark-4
           text-light-1' />
          <span className='text-xl ml-1 dark:text-dark-4 text-light-1'>
            {t('titles.main')}
          </span>
        </div>
        <div className='flex gap-8'>
          <button onClick={changeLanguage} className='text-4xl'>
            <TranslateIcon className='text-4xl dark:text-dark-4 text-light-1' />
          </button>
          <button onClick={handleToggleDarkMode} className='text-4xl'>
            {isDarkMode ? (
              <Brightness7Icon fontSize='large' className='text-dark-4' />
            ) : (
              <Brightness4Icon fontSize='large' className='text-light-1' />
            )}
          </button>
        </div>
      </div>
    </Container>
  )
}


export default Header
