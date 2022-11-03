import {useState} from 'react'

import {Chip} from '@mui/material'

import {useAppDispatch} from '../store/hook'
import {toggleSubFilterById} from '../store/reducers/pokemonSlice'

interface Props {
  id: number
  label: string
  subFilterName: keyof FilterArrayField
}
const TagFilter = ({label, id, subFilterName}: Props) => {
  const [active, setActive] = useState(false)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(toggleSubFilterById({id, active: !active, subFilterName}))
    setActive(!active)
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
