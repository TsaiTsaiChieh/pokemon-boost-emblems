import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import TagFilter from '../../../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFilter} from '../../../store/reducers/pokemonSlice'

const ColorFilterGroup = () => {
  const dispatch = useAppDispatch()
  const {filter, stat} = useAppSelector(((state) => state.pokemon))
  const {t} = useTranslation()
  const colorOptions: string[] = t('search_options.colors', {
    returnObjects: true,
  })

  useEffect(() => {
    dispatch(setFilter({...filter}))
  }, [filter.categories])

  return (
    <div className='flex flex-wrap gap-2 mt-2'>
      {colorOptions.map((ele, i) => (
        <TagFilter
          key={i}
          id={i}
          label={ele}
          subFilterName='categories'
          total={stat.categories[i]}
        />
      ))}
    </div>
  )
}

export default ColorFilterGroup
