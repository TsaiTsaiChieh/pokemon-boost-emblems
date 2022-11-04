import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'

const GradeFilterGroup = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const gradeOptions: string[] = t('search_options.grades', {
    returnObjects: true,
  })

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.levels])

  return (
    <div className=''>
      {gradeOptions.map((ele, i) => (
        <TagFilter key={i} label={ele} id={i} subFilterName='levels' />
      ))}
    </div>
  )
}

export default GradeFilterGroup
