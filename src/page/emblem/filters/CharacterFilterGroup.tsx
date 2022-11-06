import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'
import PositiveSwitch from './PositiveSwitch'

const CharacterFilterGroup = () => {
  const dispatch = useAppDispatch()
  const {filter, stat} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const characterOptions: string[] = t('search_options.characters', {
    returnObjects: true,
  })

  // change characters will trigger search action
  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.characters])

  return (
    <div className='flex flex-wrap items-center gap-x-2'>
      <PositiveSwitch />
      {characterOptions.map((ele, i) => (
        <TagFilter key={i} label={ele} id={i} subFilterName='characters'
          total={stat.characters[i]}
        />
      ))}
    </div>
  )
}

export default CharacterFilterGroup
