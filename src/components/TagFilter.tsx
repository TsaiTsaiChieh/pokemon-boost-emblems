import {useEffect, useState} from 'react'

import {Chip} from '@mui/material'

import {useAppDispatch, useAppSelector} from '../store/hook'
import {setCharactersFilter, setFilter} from '../store/reducers/pokemonSlice'

interface Props {
  id: number
  label: string
}
const TagFilter = ({label, id}: Props) => {
  const [active, setActive] = useState(false)
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const handleClick = () => {
    dispatch(setCharactersFilter({id, active: !active}))
    setActive(!active)
  }

  // TODO should move 2 parent element
  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.characters])

  return (
    <Chip
      className='border-none'
      label={label}
      onClick={handleClick}
      variant={active ? 'filled' : 'outlined'}
    />
  )
}

export default TagFilter
