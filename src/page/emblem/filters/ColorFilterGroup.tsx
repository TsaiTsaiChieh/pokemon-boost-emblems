import {useEffect} from 'react'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'

const ColorFilterGroup = () => {
  const dispatch = useAppDispatch()
  const {colors} = useAppSelector((state) => state.persist)
  const {filter} = useAppSelector(((state) => state.pokemon))

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.categories])

  return (
    <div className=''>
      {colors.map((ele, i) => (
        <TagFilter key={i} id={i} label={ele} subFilterName='categories' />
      ))}
    </div>
  )
}

export default ColorFilterGroup
