import {useEffect} from 'react'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'

const GradeFilterGroup = () => {
  const dispatch = useAppDispatch()
  const {grades} = useAppSelector((state) => state.persist)
  const {filter} = useAppSelector((state) => state.pokemon)

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.levels])

  return (
    <div className=''>
      {grades.map((ele, i) => (
        <TagFilter key={i} label={ele} id={i} subFilterName='levels' />
      ))}
    </div>
  )
}

export default GradeFilterGroup
