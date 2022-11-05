import {useState, useEffect} from 'react'

import {Chip} from '@mui/material'
import classNames from 'classnames'

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
  const CN = classNames('rounded-md border-1 ', {
    active: active,
  })
  const dispatch = useAppDispatch()
  const span = <span className='scale-65 w-6'>{total}</span>
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
      className={CN}
      label={label}
      onClick={handleClick}
      deleteIcon={span}
      onDelete={handleClick}
      variant={active ? 'filled' : 'outlined'}
    />
  )
}

export default TagFilter
