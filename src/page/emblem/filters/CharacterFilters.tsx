import {useEffect} from 'react'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'
import PositiveSwitch from './PositiveSwitch'

const CharacterFilters = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {characters} = useAppSelector((state) => state.persist)

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.characters])

  return (
    <div className=''>
      <PositiveSwitch />
      {characters.map((ele, i) => <TagFilter key={i} label={ele} id={i} />)}
    </div>
  )
}

export default CharacterFilters
