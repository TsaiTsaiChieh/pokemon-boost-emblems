import {useState, useEffect} from 'react'

import {Chip} from '@mui/material'

import {useAppDispatch, useAppSelector} from '../store/hook'
import {
  resetFilter,
  setReset,
  toggleSubFilterById,
} from '../store/reducers/pokemonSlice'

interface Props {
  id?: number
  label: string
  subFilterName?: keyof FilterArrayField
  total?: number
}
const TagFilter = ({label, id, subFilterName, total}: Props) => {
  const [active, setActive] = useState(false)
  const {reset} = useAppSelector((state) => state.pokemon)
  const dispatch = useAppDispatch()
  const span = (
    <span className='scale-70 w-9 pl-1'>
      ({total?.toString().padStart(3, 0)})
    </span>
  )
  const handleClick = () => {
    if ((id || id === 0) && subFilterName) {
      dispatch(
        toggleSubFilterById({id: id!, active: !active, subFilterName}),
      )
      setActive(!active)
    } else {
      // reset
      dispatch(setReset(true))
      dispatch(resetFilter())
    }
  }
  useEffect(() => {
    if (reset) {
      setActive(false)
      dispatch(setReset(false))
    }
  }, [reset])

  return (
    <Chip
      size='small'
      color={active ? 'primary' : 'secondary'}
      className='rounded-md border-1 flex [&>span]:pr-0'
      label={label}
      onClick={handleClick}
      deleteIcon={span}
      onDelete={handleClick}
    />
  )
}

export default TagFilter
