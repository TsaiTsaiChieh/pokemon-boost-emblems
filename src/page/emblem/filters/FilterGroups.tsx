import {useEffect} from 'react'

import {Container} from '@mui/material'

import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'
import CharacterFilterGroup from './CharacterFilterGroup'
import ColorFilterGroup from './ColorFilterGroup'
import GradeFilterGroup from './GradeFilterGroup'

const FilterGroups = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {ids, characters, categories, levels} = filter

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [ids, characters, categories, levels])

  return (
    <Container className='flex flex-col rounded-lg p-0 my-8'>
      <GradeFilterGroup />
      <ColorFilterGroup />
      <CharacterFilterGroup />
    </Container>
  )
}

export default FilterGroups
