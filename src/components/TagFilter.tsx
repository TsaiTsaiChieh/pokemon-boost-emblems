import {useState} from 'react'

import {Chip} from '@mui/material'

import {useAppDispatch} from '../store/hook'
import {setCharactersFilter} from '../store/reducers/pokemonSlice'

interface Props {
  id: number
  label: string
}
const TagFilter = ({label, id}: Props) => {
  const [active, setActive] = useState(false)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setCharactersFilter({id, active: !active}))
    setActive(!active)
    !active ? console.log('add') : console.log('rm')
  }
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
