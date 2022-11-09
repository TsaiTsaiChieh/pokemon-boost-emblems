import {useState, useEffect} from 'react'

import {Chip} from '@mui/material'

import {useAppDispatch, useAppSelector} from '../store/hook'
import {resetFilter, toggleSubFilterById} from '../store/reducers/pokemonSlice'

// reset button doesn't have id and subFilterName Props
interface Props {
  id?: number
  label: string
  subFilterName?: keyof FilterArrayField
  total?: number
}
const TagFilter = ({label, id, subFilterName, total}: Props) => {
  const {filter} = useAppSelector((state) => state.pokemon)
  const subFiltersIsEmpty = !filter.ids.length &&
    !filter.characters.length &&
    !filter.categories.length &&
    !filter.levels.length
  const [active, setActive] = useState(
    subFilterName ? false : subFiltersIsEmpty,
  )
  const dispatch = useAppDispatch()
  const span = (
    <span className='scale-70 w-9 pl-1'>
      ({total?.toString().padStart(3, '0')})
    </span>
  )
  const handleClick = () => {
    subFilterName ? dispatch(
      toggleSubFilterById({id: id!, active: !active, subFilterName}),
    ) : dispatch(resetFilter())
    setActive(!active)
  }

  useEffect(() => {
    if (subFilterName && !filter[subFilterName].length) {
      setActive(false)
      // 點選全部且無其他 filter 時，全部要為 active
    } else if (!subFilterName && subFiltersIsEmpty) {
      setActive(true)
      // 有其他 filter 時，全部不為 active
    } else if (
      !subFilterName &&
      (filter.ids.length ||
        filter.characters.length ||
        filter.categories.length ||
        filter.levels.length)
    ) {
      setActive(false)
    }
  }, [filter])

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
